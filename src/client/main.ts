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

function computeSceneFraming(
  camera: THREE.PerspectiveCamera,
  points: TrajectoryPoint[],
  moonPos: THREE.Vector3,
): { position: THREE.Vector3; target: THREE.Vector3 } {
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

  const fovRad = (camera.fov * Math.PI) / 180;
  const dist = (maxDim / 2) / Math.tan(fovRad / 2) * 1.6;

  return {
    position: new THREE.Vector3(
      center.x + dist * 0.1,
      center.y + dist * 0.4,
      center.z + dist * 0.75,
    ),
    target: center,
  };
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

async function fetchTrajectoryData(): Promise<TrajectoryPoint[]> {
  let response = await fetch("/data/trajectory.json");
  if (!response.ok) response = await fetch("/api/trajectory");
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
  const headerEl = document.getElementById("header")!;

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

  const fracIdx = timeline.getCurrentFractionalIndex();
  const intIdx = timeline.getCurrentIndex();
  const spacecraftPos = trajectory.getInterpolatedPosition(fracIdx);
  bodies.spacecraft.position.copy(spacecraftPos);
  trajectory.setCurrentTimeIndex(intIdx);
  bodies.updatePositions(new Date(timeline.getCurrentTimestamp()));

  const initVel = trajectory.getVelocityAtIndex(intIdx);
  if (initVel.speed > 0.01) {
    const velDir = new THREE.Vector3(initVel.vx, initVel.vz, -initVel.vy).normalize();
    bodies.spacecraft.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), velDir);
  }

  const framing = computeSceneFraming(ctx.camera, trajectoryData, bodies.moonMesh.position);

  const closeUpOffset = new THREE.Vector3(3000, 1500, 4000);
  ctx.camera.position.copy(spacecraftPos).add(closeUpOffset);
  ctx.controls.target.copy(spacecraftPos);
  ctx.controls.enabled = false;
  ctx.controls.update();

  loadingEl.style.display = "none";
  headerEl.style.opacity = "0";
  headerEl.style.transition = "opacity 1.2s ease";

  const intro = {
    active: true,
    startTime: -1,
    duration: 5000,
    startPos: ctx.camera.position.clone(),
    startTarget: spacecraftPos.clone(),
    endPos: framing.position,
    endTarget: framing.target,
    uiRevealed: false,
  };

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
    {
      element: createLabel("Sun", "label-sun"),
      getWorldPosition: () => bodies.sunGroup.position.clone(),
    },
  ];

  for (const label of labels) {
    label.element.style.opacity = "0";
    label.element.style.transition = "opacity 0.8s ease";
  }

  const clock = new THREE.Clock();

  function animate(): void {
    const deltaMs = clock.getDelta() * 1000;

    if (intro.active) {
      if (intro.startTime < 0) intro.startTime = performance.now();

      const elapsed = performance.now() - intro.startTime;
      const rawT = Math.min(elapsed / intro.duration, 1);
      const t = easeInOutCubic(rawT);

      ctx.camera.position.lerpVectors(intro.startPos, intro.endPos, t);
      ctx.controls.target.lerpVectors(intro.startTarget, intro.endTarget, t);

      if (rawT > 0.3 && !intro.uiRevealed) {
        intro.uiRevealed = true;
        headerEl.style.opacity = "1";
        for (const label of labels) {
          label.element.style.opacity = "1";
        }
      }

      if (rawT >= 1) {
        intro.active = false;
        ctx.controls.enabled = true;
        controlsContainer.style.display = "flex";
        controlsContainer.style.opacity = "0";
        requestAnimationFrame(() => {
          controlsContainer.style.transition = "opacity 0.8s ease";
          controlsContainer.style.opacity = "1";
        });
      }
    }

    timeline.update(deltaMs);

    const currentFracIdx = timeline.getCurrentFractionalIndex();
    const currentIntIdx = timeline.getCurrentIndex();

    const currentPos = trajectory.getInterpolatedPosition(currentFracIdx);
    bodies.spacecraft.position.copy(currentPos);

    const vel = trajectory.getVelocityAtIndex(currentIntIdx);
    if (vel.speed > 0.01) {
      const velDir = new THREE.Vector3(vel.vx, vel.vz, -vel.vy).normalize();
      const targetQuat = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), velDir);
      bodies.spacecraft.quaternion.slerp(targetQuat, 0.1);
    }

    trajectory.setCurrentTimeIndex(currentIntIdx);

    const currentDate = new Date(timeline.getCurrentTimestamp());
    bodies.updatePositions(currentDate);

    const earthDist = currentPos.length();
    const moonDist = currentPos.distanceTo(bodies.moonMesh.position);

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
