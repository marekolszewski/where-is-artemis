import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export interface SceneContext {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  controls: OrbitControls;
  sunLight: THREE.DirectionalLight;
}

export function createScene(canvas: HTMLCanvasElement): SceneContext {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000005);

  const camera = new THREE.PerspectiveCamera(
    45,
    canvas.clientWidth / canvas.clientHeight,
    50,
    4_000_000,
  );
  camera.position.set(0, 300_000, 600_000);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    logarithmicDepthBuffer: true,
  });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;

  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.minDistance = 8_000;
  controls.maxDistance = 1_200_000;
  controls.target.set(0, 0, 0);

  const sunLight = new THREE.DirectionalLight(0xffffff, 3.0);
  scene.add(sunLight);

  const ambient = new THREE.AmbientLight(0x111122, 0.5);
  scene.add(ambient);

  createStarfield(scene);

  window.addEventListener("resize", () => {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  });

  return { scene, camera, renderer, controls, sunLight };
}

function createStarfield(scene: THREE.Scene): void {
  const STAR_COUNT = 8_000;
  const positions = new Float32Array(STAR_COUNT * 3);
  const colors = new Float32Array(STAR_COUNT * 3);

  for (let i = 0; i < STAR_COUNT; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = 1_500_000 + Math.random() * 400_000;

    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);

    const brightness = 0.04 + Math.random() * 0.12;
    const tint = Math.random();
    colors[i * 3] = brightness * (tint > 0.8 ? 1.0 : 0.9);
    colors[i * 3 + 1] = brightness * 0.95;
    colors[i * 3 + 2] = brightness * (tint < 0.2 ? 1.0 : 0.9);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: 1.5,
    vertexColors: true,
    sizeAttenuation: false,
  });

  scene.add(new THREE.Points(geometry, material));
}
