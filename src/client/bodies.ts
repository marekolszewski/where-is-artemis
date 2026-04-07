import * as THREE from "three";
import { Body, GeoVector } from "astronomy-engine";
import { EARTH_RADIUS_KM, MOON_RADIUS_KM, AU_TO_KM } from "./types.ts";

export interface CelestialBodies {
  earthGroup: THREE.Group;
  moonMesh: THREE.Mesh;
  sunGroup: THREE.Group;
  spacecraft: THREE.Group;
  updatePositions: (date: Date, sunLight: THREE.DirectionalLight) => void;
  getSpacecraftWorldPos: () => THREE.Vector3;
}

export function createBodies(scene: THREE.Scene): CelestialBodies {
  const textureLoader = new THREE.TextureLoader();

  const earthGroup = new THREE.Group();

  const earthGeo = new THREE.SphereGeometry(EARTH_RADIUS_KM, 96, 48);
  const earthMap = textureLoader.load("/textures/earth_atmos_2048.jpg");
  earthMap.colorSpace = THREE.SRGBColorSpace;
  const earthMat = new THREE.MeshPhongMaterial({
    map: earthMap,
    normalMap: textureLoader.load("/textures/earth_normal_2048.jpg"),
    normalScale: new THREE.Vector2(0.85, -0.85),
    specularMap: textureLoader.load("/textures/earth_specular_2048.jpg"),
    specular: new THREE.Color(0x333333),
    shininess: 15,
  });
  const earthMesh = new THREE.Mesh(earthGeo, earthMat);
  earthMesh.rotation.z = 0.4101;
  earthGroup.add(earthMesh);

  const cloudGeo = new THREE.SphereGeometry(EARTH_RADIUS_KM * 1.003, 64, 32);
  const cloudMap = textureLoader.load("/textures/earth_clouds_1024.png");
  cloudMap.colorSpace = THREE.SRGBColorSpace;
  const cloudMat = new THREE.MeshPhongMaterial({
    map: cloudMap,
    transparent: true,
    opacity: 0.35,
    depthWrite: false,
  });
  const cloudMesh = new THREE.Mesh(cloudGeo, cloudMat);
  earthGroup.add(cloudMesh);

  const atmosphereGeo = new THREE.SphereGeometry(EARTH_RADIUS_KM * 1.015, 64, 32);
  const atmosphereMat = new THREE.MeshPhongMaterial({
    color: 0x4488ff,
    transparent: true,
    opacity: 0.08,
    side: THREE.BackSide,
    depthWrite: false,
  });
  earthGroup.add(new THREE.Mesh(atmosphereGeo, atmosphereMat));

  const earthGlow = new THREE.PointLight(0x4488ff, 0.4, 80_000);
  earthGlow.position.set(0, 0, 0);
  earthGroup.add(earthGlow);

  scene.add(earthGroup);

  const moonGeo = new THREE.SphereGeometry(MOON_RADIUS_KM, 48, 24);
  const moonMap = textureLoader.load("/textures/moon_1024.jpg");
  moonMap.colorSpace = THREE.SRGBColorSpace;
  const moonMat = new THREE.MeshPhongMaterial({
    map: moonMap,
    shininess: 2,
  });
  const moonMesh = new THREE.Mesh(moonGeo, moonMat);
  scene.add(moonMesh);

  const spacecraft = createOrionSpacecraft();
  scene.add(spacecraft);

  const sunGroup = createSunMarker();
  scene.add(sunGroup);

  function updatePositions(date: Date, sunLight: THREE.DirectionalLight): void {
    const moonVec = GeoVector(Body.Moon, date, true);
    moonMesh.position.set(moonVec.x * AU_TO_KM, moonVec.z * AU_TO_KM, -moonVec.y * AU_TO_KM);

    const sunVec = GeoVector(Body.Sun, date, true);
    const sunDir = new THREE.Vector3(sunVec.x, sunVec.z, -sunVec.y).normalize();
    sunGroup.position.copy(sunDir.clone().multiplyScalar(1_200_000));
    sunLight.position.copy(sunDir.clone().multiplyScalar(500_000));
  }

  function getSpacecraftWorldPos(): THREE.Vector3 {
    return spacecraft.position.clone();
  }

  return { earthGroup, moonMesh, sunGroup, spacecraft, updatePositions, getSpacecraftWorldPos };
}

function createSunMarker(): THREE.Group {
  const group = new THREE.Group();

  const coreGeo = new THREE.SphereGeometry(6_000, 32, 32);
  const coreMat = new THREE.MeshBasicMaterial({ color: 0xffffee });
  group.add(new THREE.Mesh(coreGeo, coreMat));

  const glowGeo = new THREE.SphereGeometry(12_000, 24, 24);
  const glowMat = new THREE.MeshBasicMaterial({
    color: 0xffdd66,
    transparent: true,
    opacity: 0.3,
    depthWrite: false,
  });
  group.add(new THREE.Mesh(glowGeo, glowMat));

  const outerGeo = new THREE.SphereGeometry(20_000, 16, 16);
  const outerMat = new THREE.MeshBasicMaterial({
    color: 0xffcc44,
    transparent: true,
    opacity: 0.1,
    depthWrite: false,
  });
  group.add(new THREE.Mesh(outerGeo, outerMat));

  return group;
}

function createOrionSpacecraft(): THREE.Group {
  const group = new THREE.Group();

  const crewTexture = createCrewModuleTexture();
  const serviceTexture = createServiceModuleTexture();
  const panelTexture = createSolarPanelTexture();

  const cmGeo = new THREE.CylinderGeometry(150, 450, 550, 32);
  const cmMat = new THREE.MeshStandardMaterial({
    map: crewTexture,
    color: 0xf1f2f4,
    metalness: 0.22,
    roughness: 0.72,
  });
  const cm = new THREE.Mesh(cmGeo, cmMat);
  cm.position.y = 575;
  group.add(cm);

  const noseRing = new THREE.Mesh(
    new THREE.TorusGeometry(115, 18, 12, 36),
    new THREE.MeshStandardMaterial({
      color: 0x9da4ad,
      metalness: 0.65,
      roughness: 0.38,
    }),
  );
  noseRing.rotation.x = Math.PI / 2;
  noseRing.position.y = 838;
  group.add(noseRing);

  const noseCap = new THREE.Mesh(
    new THREE.CylinderGeometry(92, 108, 30, 24),
    new THREE.MeshStandardMaterial({
      color: 0x2b3138,
      metalness: 0.35,
      roughness: 0.58,
    }),
  );
  noseCap.position.y = 852;
  group.add(noseCap);

  const windowBand = new THREE.Mesh(
    new THREE.TorusGeometry(230, 26, 12, 36),
    new THREE.MeshStandardMaterial({
      color: 0x202832,
      metalness: 0.22,
      roughness: 0.72,
    }),
  );
  windowBand.rotation.x = Math.PI / 2;
  windowBand.position.y = 640;
  group.add(windowBand);

  const shieldGeo = new THREE.CylinderGeometry(460, 460, 30, 32);
  const shieldMat = new THREE.MeshStandardMaterial({
    color: 0x171717,
    metalness: 0.06,
    roughness: 0.94,
  });
  const shield = new THREE.Mesh(shieldGeo, shieldMat);
  shield.position.y = 285;
  group.add(shield);

  const adapterGeo = new THREE.CylinderGeometry(440, 400, 50, 32);
  const adapterMat = new THREE.MeshStandardMaterial({
    color: 0x5f6369,
    metalness: 0.55,
    roughness: 0.48,
  });
  const adapter = new THREE.Mesh(adapterGeo, adapterMat);
  adapter.position.y = 245;
  group.add(adapter);

  const smGeo = new THREE.CylinderGeometry(400, 400, 550, 32);
  const smMat = new THREE.MeshStandardMaterial({
    map: serviceTexture,
    color: 0xa0a6ae,
    metalness: 0.62,
    roughness: 0.42,
  });
  const sm = new THREE.Mesh(smGeo, smMat);
  sm.position.y = -55;
  group.add(sm);

  const equipmentPodGeo = new THREE.BoxGeometry(92, 220, 134);
  const equipmentPodMat = new THREE.MeshStandardMaterial({
    color: 0x6e7680,
    metalness: 0.58,
    roughness: 0.46,
  });

  for (let i = 0; i < 4; i++) {
    const angle = (i * Math.PI) / 2 + Math.PI / 4;
    const pod = new THREE.Mesh(equipmentPodGeo, equipmentPodMat);
    pod.position.set(Math.cos(angle) * 470, -40, Math.sin(angle) * 470);
    pod.rotation.y = angle;
    group.add(pod);

    const thruster = new THREE.Mesh(
      new THREE.CylinderGeometry(18, 30, 54, 12),
      new THREE.MeshStandardMaterial({
        color: 0x30353b,
        metalness: 0.7,
        roughness: 0.34,
      }),
    );
    thruster.rotation.z = Math.PI / 2;
    thruster.rotation.y = angle;
    thruster.position.set(Math.cos(angle) * 542, 18, Math.sin(angle) * 542);
    group.add(thruster);
  }

  const nozzleGeo = new THREE.CylinderGeometry(100, 180, 200, 16);
  const nozzleMat = new THREE.MeshStandardMaterial({
    color: 0x3a3d42,
    metalness: 0.72,
    roughness: 0.3,
  });
  const nozzle = new THREE.Mesh(nozzleGeo, nozzleMat);
  nozzle.position.y = -430;
  group.add(nozzle);

  const panelGeo = new THREE.BoxGeometry(1800, 20, 350);
  const panelMat = new THREE.MeshStandardMaterial({
    map: panelTexture,
    emissiveMap: panelTexture,
    emissive: new THREE.Color(0x243860),
    color: 0x8f98a3,
    metalness: 0.52,
    roughness: 0.45,
    side: THREE.DoubleSide,
  });

  for (let i = 0; i < 4; i++) {
    const panel = new THREE.Mesh(panelGeo, panelMat);
    const angle = (i * Math.PI) / 2 + Math.PI / 4;
    panel.position.set(Math.cos(angle) * 1100, -55, Math.sin(angle) * 1100);
    panel.rotation.y = angle;
    group.add(panel);

    const boom = new THREE.Mesh(
      new THREE.BoxGeometry(620, 34, 38),
      new THREE.MeshStandardMaterial({
        color: 0xa0a7b0,
        metalness: 0.6,
        roughness: 0.38,
      }),
    );
    boom.position.set(Math.cos(angle) * 620, -55, Math.sin(angle) * 620);
    boom.rotation.y = angle;
    group.add(boom);
  }

  const glow = new THREE.PointLight(0x88bbff, 0.6, 20_000);
  group.add(glow);

  return group;
}

function createCrewModuleTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext("2d")!;

  ctx.fillStyle = "#d9dde2";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, "rgba(255,255,255,0.34)");
  gradient.addColorStop(0.38, "rgba(255,255,255,0.1)");
  gradient.addColorStop(1, "rgba(70,76,86,0.3)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#848b95";
  ctx.fillRect(0, 330, canvas.width, 122);
  ctx.fillStyle = "rgba(255,255,255,0.18)";
  ctx.fillRect(0, 326, canvas.width, 10);

  ctx.fillStyle = "rgba(44,52,64,0.9)";
  ctx.fillRect(398, 108, 292, 108);

  ctx.strokeStyle = "rgba(90,96,104,0.86)";
  ctx.lineWidth = 5;
  ctx.strokeRect(212, 112, 206, 150);
  ctx.strokeRect(442, 120, 202, 84);

  const windowXs = [448, 512, 576, 640];
  for (const x of windowXs) {
    ctx.fillStyle = "#0e141d";
    ctx.beginPath();
    ctx.moveTo(x - 22, 142);
    ctx.lineTo(x + 22, 142);
    ctx.lineTo(x + 14, 196);
    ctx.lineTo(x - 14, 196);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "rgba(212,218,228,0.95)";
    ctx.lineWidth = 3;
    ctx.stroke();
  }

  ctx.strokeStyle = "rgba(112,118,126,0.78)";
  ctx.lineWidth = 3;
  for (const y of [72, 104, 224, 286, 326]) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }

  ctx.strokeStyle = "rgba(138,145,154,0.5)";
  ctx.lineWidth = 2;
  for (let x = 0; x <= canvas.width; x += 64) {
    ctx.beginPath();
    ctx.moveTo(x, 70);
    ctx.lineTo(x, 454);
    ctx.stroke();
  }

  for (let i = 0; i < 160; i++) {
    const x = (i * 173) % canvas.width;
    const y = (i * 97) % canvas.height;
    const alpha = 0.024 + (i % 5) * 0.01;
    ctx.fillStyle = `rgba(255,255,255,${alpha})`;
    ctx.fillRect(x, y, 10, 10);
  }

  return configureGeneratedTexture(new THREE.CanvasTexture(canvas));
}

function createServiceModuleTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 256;
  const ctx = canvas.getContext("2d")!;

  ctx.fillStyle = "#8e959f";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, "rgba(255,255,255,0.24)");
  gradient.addColorStop(0.5, "rgba(255,255,255,0.05)");
  gradient.addColorStop(1, "rgba(20,24,30,0.34)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(64,70,78,0.86)";
  ctx.fillRect(0, 18, canvas.width, 28);
  ctx.fillRect(0, 108, canvas.width, 26);
  ctx.fillRect(0, 204, canvas.width, 24);

  ctx.fillStyle = "rgba(194,200,208,0.38)";
  ctx.fillRect(0, 48, canvas.width, 5);
  ctx.fillRect(0, 136, canvas.width, 4);
  ctx.fillRect(0, 198, canvas.width, 4);

  ctx.strokeStyle = "rgba(225,232,240,0.36)";
  ctx.lineWidth = 2;
  for (let x = 0; x <= canvas.width; x += 64) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }

  for (let i = 0; i < 8; i++) {
    const x = 30 + i * 120;
    ctx.fillStyle = i % 2 === 0 ? "rgba(196,202,210,0.62)" : "rgba(72,78,88,0.62)";
    ctx.fillRect(x, 60, 78, 128);
    ctx.strokeStyle = "rgba(235,240,245,0.26)";
    ctx.strokeRect(x, 60, 78, 128);
    ctx.fillStyle = "rgba(28,34,42,0.5)";
    ctx.fillRect(x + 10, 76, 58, 18);
    ctx.fillRect(x + 10, 154, 58, 20);
  }

  for (let i = 0; i < 220; i++) {
    const x = (i * 71) % canvas.width;
    const y = (i * 53) % canvas.height;
    const shade = 120 + (i % 40);
    ctx.fillStyle = `rgba(${shade},${shade + 4},${shade + 8},0.08)`;
    ctx.fillRect(x, y, 7, 7);
  }

  return configureGeneratedTexture(new THREE.CanvasTexture(canvas));
}

function createSolarPanelTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 256;
  const ctx = canvas.getContext("2d")!;

  ctx.fillStyle = "#09111e";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "rgba(74,126,210,0.34)");
  gradient.addColorStop(0.5, "rgba(12,24,48,0.1)");
  gradient.addColorStop(1, "rgba(116,170,255,0.24)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "rgba(166,202,250,0.34)";
  ctx.lineWidth = 1;
  for (let x = 0; x <= canvas.width; x += 24) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }
  for (let y = 0; y <= canvas.height; y += 24) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }

  ctx.fillStyle = "rgba(214,224,240,0.52)";
  ctx.fillRect(0, 0, canvas.width, 14);
  ctx.fillRect(0, canvas.height - 14, canvas.width, 14);
  ctx.fillRect(0, 0, 16, canvas.height);
  ctx.fillRect(canvas.width - 16, 0, 16, canvas.height);

  ctx.fillStyle = "rgba(72,108,186,0.22)";
  for (let x = 12; x < canvas.width - 20; x += 48) {
    ctx.fillRect(x, 20, 22, canvas.height - 40);
  }

  for (let i = 0; i < 260; i++) {
    const x = (i * 43) % canvas.width;
    const y = (i * 61) % canvas.height;
    ctx.fillStyle = `rgba(120,170,255,${0.025 + (i % 6) * 0.012})`;
    ctx.fillRect(x, y, 12, 12);
  }

  const texture = configureGeneratedTexture(new THREE.CanvasTexture(canvas));
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(2.2, 1);
  return texture;
}

function configureGeneratedTexture(texture: THREE.CanvasTexture): THREE.CanvasTexture {
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  texture.needsUpdate = true;
  return texture;
}
