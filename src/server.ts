import { join } from "path";

const PORT = parseInt(process.env.PORT || "3000", 10);
const ROOT = join(import.meta.dir, "..");
const PUBLIC = join(ROOT, "public");

const HORIZONS_API = "https://ssd.jpl.nasa.gov/api/horizons.api";
const ARTEMIS_SPICE_ID = "-1024";
const MOON_NAIF_ID = "301";

const MISSION_START = "2026-04-02 02:00";
const MISSION_END = "2026-04-10 23:00";
const STEP_SIZE = "10 m";

interface CachedData {
  spacecraft: Array<{ t: number; x: number; y: number; z: number; vx: number; vy: number; vz: number }>;
  fetchedAt: number;
}

let trajectoryCache: CachedData | null = null;

function buildHorizonsUrl(command: string, stepSize: string = STEP_SIZE): string {
  const params = [
    `format=text`,
    `COMMAND=%27${encodeURIComponent(command)}%27`,
    `CENTER=%27500%40399%27`,
    `EPHEM_TYPE=VECTORS`,
    `START_TIME=%27${encodeURIComponent(MISSION_START)}%27`,
    `STOP_TIME=%27${encodeURIComponent(MISSION_END)}%27`,
    `STEP_SIZE=%27${encodeURIComponent(stepSize)}%27`,
    `OUT_UNITS=KM-S`,
    `VEC_TABLE=2`,
    `CSV_FORMAT=YES`,
    `OBJ_DATA=NO`,
    `VEC_LABELS=NO`,
    `REF_PLANE=FRAME`,
  ];
  return `${HORIZONS_API}?${params.join("&")}`;
}

function parseHorizonsText(text: string): CachedData["spacecraft"] {
  const soeIdx = text.indexOf("$$SOE");
  const eoeIdx = text.indexOf("$$EOE");
  if (soeIdx === -1 || eoeIdx === -1) {
    console.error("Could not find $$SOE/$$EOE markers in Horizons response");
    return [];
  }

  const dataBlock = text.slice(soeIdx + 5, eoeIdx).trim();
  const lines = dataBlock.split("\n").filter((l) => l.trim().length > 0);

  const points: CachedData["spacecraft"] = [];

  for (const line of lines) {
    const parts = line.split(",").map((p) => p.trim());
    if (parts.length < 8) continue;

    const jd = parseFloat(parts[0]);
    if (isNaN(jd)) continue;

    // Julian Date to Unix ms: (JD - 2440587.5) * 86400000
    const unixMs = (jd - 2440587.5) * 86400000;

    const x = parseFloat(parts[2]);
    const y = parseFloat(parts[3]);
    const z = parseFloat(parts[4]);
    const vx = parseFloat(parts[5]);
    const vy = parseFloat(parts[6]);
    const vz = parseFloat(parts[7]);

    if ([x, y, z, vx, vy, vz].some(isNaN)) continue;

    points.push({ t: unixMs, x, y, z, vx, vy, vz });
  }

  return points;
}

async function fetchTrajectory(): Promise<CachedData | null> {
  if (trajectoryCache && Date.now() - trajectoryCache.fetchedAt < 600_000) {
    return trajectoryCache;
  }

  console.log("Fetching Artemis II trajectory from JPL Horizons...");
  try {
    const url = buildHorizonsUrl(ARTEMIS_SPICE_ID);
    const response = await fetch(url, { signal: AbortSignal.timeout(30_000) });
    if (!response.ok) {
      console.error(`Horizons API returned ${response.status}: ${response.statusText}`);
      return trajectoryCache;
    }

    const text = await response.text();
    const spacecraft = parseHorizonsText(text);

    if (spacecraft.length === 0) {
      console.error("No trajectory data parsed from Horizons response");
      return trajectoryCache;
    }

    console.log(`Parsed ${spacecraft.length} trajectory points from Horizons`);
    trajectoryCache = { spacecraft, fetchedAt: Date.now() };
    return trajectoryCache;
  } catch (err) {
    console.error("Failed to fetch from Horizons:", err);
    return trajectoryCache;
  }
}

let clientBundle: string | null = null;

async function buildClient(): Promise<string> {
  if (clientBundle) return clientBundle;

  console.log("Bundling client code...");
  const result = await Bun.build({
    entrypoints: [join(ROOT, "src/client/main.ts")],
    target: "browser",
    sourcemap: "inline",
    minify: false,
  });

  if (!result.success) {
    const errors = result.logs.map((l) => l.message).join("\n");
    throw new Error(`Client build failed:\n${errors}`);
  }

  clientBundle = await result.outputs[0].text();
  return clientBundle;
}

const MIME_TYPES: Record<string, string> = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

function getMimeType(path: string): string {
  const ext = path.slice(path.lastIndexOf("."));
  return MIME_TYPES[ext] ?? "application/octet-stream";
}

async function serveStaticFile(filePath: string): Promise<Response> {
  const file = Bun.file(filePath);
  if (!(await file.exists())) {
    return new Response("Not Found", { status: 404 });
  }
  return new Response(file, {
    headers: { "Content-Type": getMimeType(filePath) },
  });
}

console.log("Starting Artemis Tracker server...");

fetchTrajectory().then((data) => {
  if (data) {
    console.log(`Trajectory cache ready: ${data.spacecraft.length} points`);
  } else {
    console.warn("No trajectory data available — will retry on request");
  }
});

buildClient().catch((err) => {
  console.error("Initial client build failed:", err);
});

const server = Bun.serve({
  port: PORT,
  hostname: "0.0.0.0",

  async fetch(req) {
    const url = new URL(req.url);
    const path = url.pathname;

    if (path === "/") {
      return serveStaticFile(join(PUBLIC, "index.html"));
    }

    if (path === "/app.js") {
      try {
        const js = await buildClient();
        return new Response(js, {
          headers: { "Content-Type": "application/javascript" },
        });
      } catch (err) {
        return new Response(`// Build error: ${err}`, {
          status: 500,
          headers: { "Content-Type": "application/javascript" },
        });
      }
    }

    if (path === "/api/trajectory") {
      const data = await fetchTrajectory();
      if (!data || data.spacecraft.length === 0) {
        return Response.json({ error: "Trajectory data not available" }, { status: 503 });
      }
      return Response.json(data.spacecraft, {
        headers: { "Cache-Control": "public, max-age=300" },
      });
    }

    if (path.startsWith("/textures/") || path === "/style.css" || path === "/favicon.ico") {
      return serveStaticFile(join(PUBLIC, path));
    }

    return new Response("Not Found", { status: 404 });
  },
});

console.log(`Artemis Tracker running at http://localhost:${server.port}`);
