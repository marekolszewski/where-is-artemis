import * as THREE from "three";
import type { TrajectoryPoint } from "./types.ts";

export interface TrajectoryRenderer {
  pathLine: THREE.Line;
  setCurrentTimeIndex: (index: number) => void;
  getPositionAtIndex: (index: number) => THREE.Vector3;
  getInterpolatedPosition: (fractionalIndex: number) => THREE.Vector3;
  getVelocityAtIndex: (index: number) => { speed: number; vx: number; vy: number; vz: number };
  pointCount: number;
}

const PAST_COLOR = new THREE.Color(0.0, 0.85, 1.0);
const FUTURE_COLOR = new THREE.Color(0.15, 0.2, 0.35);
const CURRENT_COLOR = new THREE.Color(1.0, 1.0, 1.0);

export function createTrajectory(
  scene: THREE.Scene,
  points: TrajectoryPoint[],
): TrajectoryRenderer {
  const positions = new Float32Array(points.length * 3);
  const colors = new Float32Array(points.length * 3);

  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    positions[i * 3] = p.x;
    positions[i * 3 + 1] = p.z;
    positions[i * 3 + 2] = -p.y;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

  const material = new THREE.LineBasicMaterial({
    vertexColors: true,
    linewidth: 1,
    transparent: true,
    opacity: 0.9,
  });

  const pathLine = new THREE.Line(geometry, material);
  scene.add(pathLine);

  let currentIdx = 0;

  function setCurrentTimeIndex(index: number): void {
    currentIdx = Math.max(0, Math.min(index, points.length - 1));
    const colorAttr = geometry.attributes.color as THREE.BufferAttribute;
    const colorArray = colorAttr.array as Float32Array;

    for (let i = 0; i < points.length; i++) {
      let c: THREE.Color;
      if (i < currentIdx - 1) {
        c = PAST_COLOR;
      } else if (i >= currentIdx - 1 && i <= currentIdx + 1) {
        c = CURRENT_COLOR;
      } else {
        c = FUTURE_COLOR;
      }
      colorArray[i * 3] = c.r;
      colorArray[i * 3 + 1] = c.g;
      colorArray[i * 3 + 2] = c.b;
    }

    colorAttr.needsUpdate = true;
  }

  function getPositionAtIndex(index: number): THREE.Vector3 {
    const clamped = Math.max(0, Math.min(index, points.length - 1));
    const p = points[clamped];
    return new THREE.Vector3(p.x, p.z, -p.y);
  }

  function getInterpolatedPosition(fractionalIndex: number): THREE.Vector3 {
    const idx = Math.max(0, Math.min(fractionalIndex, points.length - 1));
    const lower = Math.floor(idx);
    const upper = Math.min(lower + 1, points.length - 1);
    const t = idx - lower;

    const a = points[lower];
    const b = points[upper];

    return new THREE.Vector3(
      a.x + (b.x - a.x) * t,
      a.z + (b.z - a.z) * t,
      -(a.y + (b.y - a.y) * t),
    );
  }

  function getVelocityAtIndex(index: number): { speed: number; vx: number; vy: number; vz: number } {
    const clamped = Math.max(0, Math.min(index, points.length - 1));
    const p = points[clamped];
    const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy + p.vz * p.vz);
    return { speed, vx: p.vx, vy: p.vy, vz: p.vz };
  }

  setCurrentTimeIndex(0);

  return {
    pathLine,
    setCurrentTimeIndex,
    getPositionAtIndex,
    getInterpolatedPosition,
    getVelocityAtIndex,
    pointCount: points.length,
  };
}
