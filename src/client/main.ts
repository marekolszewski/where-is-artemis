import * as THREE from "three";
import { createScene } from "./scene.ts";
import { createBodies } from "./bodies.ts";
import { createTrajectory } from "./trajectory.ts";
import { createTimeline } from "./timeline.ts";
import type { TrajectoryPoint } from "./types.ts";

interface Label3D {
  element: HTMLElement;
  getWorldPosition: () => THREE.Vector3;
}

function createLabel(text: string, className: string): HTMLElement {
  const el = document.createElement("div");
  el.className = `label-3d ${className}`;
  el.textContent = text;
  document.body.appendChild(el);
  return el;
}

function updateLabels(
  labels: Label3D[],
  camera: THREE.PerspectiveCamera,
  canvas: HTMLCanvasElement,
): void {
  const halfW = canvas.clientWidth / 2;
  const halfH = canvas.clientHeight / 2;

  for (const label of labels) {
    const pos = label.getWorldPosition();
    pos.project(camera);

    if (pos.z > 1) {
      label.element.style.display = "none";
      continue;
    }

    label.element.style.display = "block";
    label.element.style.left = `${pos.x * halfW + halfW}px`;
    label.element.style.top = `${-pos.y * halfH + halfH}px`;
  }
}

function frameCameraToFitScene(
  ctx: { camera: THREE.PerspectiveCamera; controls: import("three/examples/jsm/controls/OrbitControls.js").OrbitControls },
  points: TrajectoryPoint[],
  moonPos: THREE.Vector3,
): void {
  const bbox = new THREE.Box3();

  for (const p of points) {
    bbox.expandByPoint(new THREE.Vector3(p.x, p.z, -p.y));
  }
  bbox.expandByPoint(moonPos);
  bbox.expandByPoint(new THREE.Vector3(0, 0, 0));

  const center = new THREE.Vector3();
  bbox.getCenter(center);

  const bboxSize = new THREE.Vector3();
  bbox.getSize(bboxSize);
  const maxDim = Math.max(bboxSize.x, bboxSize.y, bboxSize.z);

  const fovRad = (ctx.camera.fov * Math.PI) / 180;
  const dist = (maxDim / 2) / Math.tan(fovRad / 2) * 1.6;

  ctx.camera.position.set(
    center.x + dist * 0.05,
    center.y + dist * 0.35,
    center.z + dist * 0.85,
  );
  ctx.controls.target.copy(center);
  ctx.controls.update();
}

async function fetchTrajectoryData(): Promise<TrajectoryPoint[]> {
  const response = await fetch("/api/trajectory");
  if (!response.ok) {
    throw new Error(`Failed to fetch trajectory: ${response.status}`);
  }

  const raw: Array<{ t: number; x: number; y: number; z: number; vx: number; vy: number; vz: number }> =
    await response.json();

  return raw.map((p) => ({
    timestamp: p.t,
    x: p.x,
    y: p.y,
    z: p.z,
    vx: p.vx,
    vy: p.vy,
    vz: p.vz,
  }));
}

async function init(): Promise<void> {
  const canvas = document.getElementById("scene-canvas") as HTMLCanvasElement;
  const controlsContainer = document.getElementById("controls")!;
  const loadingEl = document.getElementById("loading")!;

  const ctx = createScene(canvas);
  const bodies = createBodies(ctx.scene);

  let trajectoryData: TrajectoryPoint[];
  try {
    trajectoryData = await fetchTrajectoryData();
  } catch (err) {
    loadingEl.textContent = `Failed to load trajectory data. ${err}`;
    loadingEl.style.color = "#ff4444";
    return;
  }

  if (trajectoryData.length === 0) {
    loadingEl.textContent = "No trajectory data available from JPL Horizons.";
    loadingEl.style.color = "#ff4444";
    return;
  }

  const trajectory = createTrajectory(ctx.scene, trajectoryData);
  const timeline = createTimeline(trajectoryData, controlsContainer);

  bodies.updateMoonPosition(new Date(timeline.getCurrentTimestamp()));

  frameCameraToFitScene(ctx, trajectoryData, bodies.moonMesh.position);

  loadingEl.style.display = "none";
  controlsContainer.style.display = "flex";

  const labels: Label3D[] = [
    {
      element: createLabel("Earth", "label-earth"),
      getWorldPosition: () => new THREE.Vector3(0, 0, 0),
    },
    {
      element: createLabel("Moon", "label-moon"),
      getWorldPosition: () => bodies.moonMesh.position.clone(),
    },
    {
      element: createLabel("Orion", "label-spacecraft"),
      getWorldPosition: () => bodies.spacecraft.position.clone(),
    },
  ];

  const clock = new THREE.Clock();

  function animate(): void {
    const deltaMs = clock.getDelta() * 1000;

    timeline.update(deltaMs);

    const fracIdx = timeline.getCurrentFractionalIndex();
    const intIdx = timeline.getCurrentIndex();

    const spacecraftPos = trajectory.getInterpolatedPosition(fracIdx);
    bodies.spacecraft.position.copy(spacecraftPos);

    trajectory.setCurrentTimeIndex(intIdx);

    const currentDate = new Date(timeline.getCurrentTimestamp());
    bodies.updateMoonPosition(currentDate);

    const earthDist = spacecraftPos.length();
    const moonPos = bodies.moonMesh.position;
    const moonDist = spacecraftPos.distanceTo(moonPos);
    const vel = trajectory.getVelocityAtIndex(intIdx);

    timeline.updateInfoPanel({
      distanceFromEarth: earthDist,
      distanceFromMoon: moonDist,
      velocity: vel.speed,
    });

    bodies.earthGroup.rotation.y += deltaMs * 0.000005;

    updateLabels(labels, ctx.camera, canvas);

    ctx.controls.update();
    ctx.renderer.render(ctx.scene, ctx.camera);
  }

  ctx.renderer.setAnimationLoop(animate);
}

init().catch((err) => {
  console.error("Initialization failed:", err);
  const loading = document.getElementById("loading");
  if (loading) {
    loading.textContent = `Error: ${err.message}`;
    loading.style.color = "#ff4444";
  }
});
