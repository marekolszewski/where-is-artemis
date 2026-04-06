import { join } from "path";
import { mkdirSync, cpSync } from "fs";

const ROOT = join(import.meta.dir, "..");
const DIST = join(ROOT, "dist");
const PUBLIC = join(ROOT, "public");

const HORIZONS_API = "https://ssd.jpl.nasa.gov/api/horizons.api";
const ARTEMIS_SPICE_ID = "-1024";
const MISSION_START = "2026-04-02 02:00";
const MISSION_END = "2026-04-10 23:00";
const STEP_SIZE = "10 m";

interface TrajectoryPoint {
  t: number;
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
}

function buildHorizonsUrl(): string {
  const params = [
    `format=text`,
    `COMMAND=%27${encodeURIComponent(ARTEMIS_SPICE_ID)}%27`,
    `CENTER=%27500%40399%27`,
    `EPHEM_TYPE=VECTORS`,
    `START_TIME=%27${encodeURIComponent(MISSION_START)}%27`,
    `STOP_TIME=%27${encodeURIComponent(MISSION_END)}%27`,
    `STEP_SIZE=%27${encodeURIComponent(STEP_SIZE)}%27`,
    `OUT_UNITS=KM-S`,
    `VEC_TABLE=2`,
    `CSV_FORMAT=YES`,
    `OBJ_DATA=NO`,
    `VEC_LABELS=NO`,
    `REF_PLANE=FRAME`,
  ];
  return `${HORIZONS_API}?${params.join("&")}`;
}

function parseHorizonsText(text: string): TrajectoryPoint[] {
  const soeIdx = text.indexOf("$$SOE");
  const eoeIdx = text.indexOf("$$EOE");
  if (soeIdx === -1 || eoeIdx === -1) {
    throw new Error("Could not find $$SOE/$$EOE markers in Horizons response");
  }

  const dataBlock = text.slice(soeIdx + 5, eoeIdx).trim();
  const lines = dataBlock.split("\n").filter((l) => l.trim().length > 0);
  const points: TrajectoryPoint[] = [];

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

async function fetchTrajectoryData(): Promise<TrajectoryPoint[]> {
  console.log("Fetching Artemis II trajectory from JPL Horizons...");
  const url = buildHorizonsUrl();
  const response = await fetch(url, { signal: AbortSignal.timeout(30_000) });
  if (!response.ok) {
    throw new Error(`Horizons API returned ${response.status}: ${response.statusText}`);
  }
  const text = await response.text();
  const points = parseHorizonsText(text);
  console.log(`  Parsed ${points.length} trajectory points`);
  return points;
}

async function bundleClient(): Promise<void> {
  console.log("Bundling client code...");
  const result = await Bun.build({
    entrypoints: [join(ROOT, "src/client/main.ts")],
    outdir: DIST,
    target: "browser",
    sourcemap: "linked",
    minify: true,
    naming: "app.[ext]",
  });

  if (!result.success) {
    const errors = result.logs.map((l) => l.message).join("\n");
    throw new Error(`Client build failed:\n${errors}`);
  }
  console.log(`  Bundle: ${(result.outputs[0].size / 1024).toFixed(0)} KB`);
}

async function main(): Promise<void> {
  console.log("Building Artemis Tracker for static deployment...\n");

  mkdirSync(join(DIST, "data"), { recursive: true });
  mkdirSync(join(DIST, "textures"), { recursive: true });

  const trajectory = await fetchTrajectoryData();
  await Bun.write(join(DIST, "data", "trajectory.json"), JSON.stringify(trajectory));
  console.log(`  Wrote data/trajectory.json\n`);

  await bundleClient();

  cpSync(join(PUBLIC, "index.html"), join(DIST, "index.html"));
  cpSync(join(PUBLIC, "style.css"), join(DIST, "style.css"));
  cpSync(join(PUBLIC, "textures"), join(DIST, "textures"), { recursive: true });
  console.log("\n  Copied static assets");

  console.log(`\nBuild complete. Output in dist/`);
}

main().catch((err) => {
  console.error("Build failed:", err);
  process.exit(1);
});
