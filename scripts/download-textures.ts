const BASE_URL = "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets";
const OUTPUT_DIR = "./public/textures";

const TEXTURES = [
  "earth_atmos_2048.jpg",
  "earth_normal_2048.jpg",
  "earth_specular_2048.jpg",
  "earth_clouds_1024.png",
  "moon_1024.jpg",
];

async function downloadTexture(filename: string): Promise<void> {
  const url = `${BASE_URL}/${filename}`;
  const outputPath = `${OUTPUT_DIR}/${filename}`;

  const existing = Bun.file(outputPath);
  if (await existing.exists()) {
    console.log(`  [skip] ${filename} already exists`);
    return;
  }

  console.log(`  [download] ${filename}...`);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download ${filename}: ${response.status} ${response.statusText}`);
  }

  const data = await response.arrayBuffer();
  await Bun.write(outputPath, data);
  console.log(`  [done] ${filename} (${(data.byteLength / 1024).toFixed(0)} KB)`);
}

async function main() {
  console.log("Downloading planet textures...\n");

  const { mkdirSync } = await import("fs");
  mkdirSync(OUTPUT_DIR, { recursive: true });

  const results = await Promise.allSettled(TEXTURES.map(downloadTexture));

  const failed = results.filter((r) => r.status === "rejected");
  if (failed.length > 0) {
    console.error(`\n${failed.length} texture(s) failed to download.`);
    for (const f of failed) {
      if (f.status === "rejected") console.error(`  ${f.reason}`);
    }
    process.exit(1);
  }

  console.log("\nAll textures downloaded successfully.");
}

main();
