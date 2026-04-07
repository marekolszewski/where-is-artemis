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
  earthMesh.rotation.z = 0.4101; // axial tilt 23.5 degrees
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

  // Crew Module — conical frustum (narrow top, wide base)
  const cmGeo = new THREE.CylinderGeometry(150, 450, 550, 32);
  const cmMat = new THREE.MeshStandardMaterial({
    color: 0xe0e0e0,
    metalness: 0.3,
    roughness: 0.65,
  });
  const cm = new THREE.Mesh(cmGeo, cmMat);
  cm.position.y = 575;
  group.add(cm);

  // Heat shield — dark disk at CM base
  const shieldGeo = new THREE.CylinderGeometry(460, 460, 30, 32);
  const shieldMat = new THREE.MeshStandardMaterial({
    color: 0x1a1a1a,
    metalness: 0.05,
    roughness: 0.95,
  });
  const shield = new THREE.Mesh(shieldGeo, shieldMat);
  shield.position.y = 285;
  group.add(shield);

  // Adapter ring between CM and SM
  const adapterGeo = new THREE.CylinderGeometry(440, 400, 50, 32);
  const adapterMat = new THREE.MeshStandardMaterial({
    color: 0x555555,
    metalness: 0.5,
    roughness: 0.5,
  });
  const adapter = new THREE.Mesh(adapterGeo, adapterMat);
  adapter.position.y = 245;
  group.add(adapter);

  // Service Module — gold thermal blanket cylinder
  const smGeo = new THREE.CylinderGeometry(400, 400, 550, 32);
  const smMat = new THREE.MeshStandardMaterial({
    color: 0xc9a84c,
    metalness: 0.55,
    roughness: 0.35,
  });
  const sm = new THREE.Mesh(smGeo, smMat);
  sm.position.y = -55;
  group.add(sm);

  // Engine nozzle
  const nozzleGeo = new THREE.CylinderGeometry(100, 180, 200, 16);
  const nozzleMat = new THREE.MeshStandardMaterial({
    color: 0x3a3a3a,
    metalness: 0.7,
    roughness: 0.3,
  });
  const nozzle = new THREE.Mesh(nozzleGeo, nozzleMat);
  nozzle.position.y = -430;
  group.add(nozzle);

  // Solar panel wings — 4 panels in X pattern
  const panelGeo = new THREE.BoxGeometry(1800, 20, 350);
  const panelMat = new THREE.MeshStandardMaterial({
    color: 0x162040,
    metalness: 0.5,
    roughness: 0.4,
    side: THREE.DoubleSide,
  });

  for (let i = 0; i < 4; i++) {
    const panel = new THREE.Mesh(panelGeo, panelMat);
    const angle = (i * Math.PI) / 2 + Math.PI / 4;
    panel.position.set(
      Math.cos(angle) * 1100,
      -55,
      Math.sin(angle) * 1100,
    );
    panel.rotation.y = angle;
    group.add(panel);
  }

  // Soft point light for visibility at distance
  const glow = new THREE.PointLight(0x88bbff, 0.6, 20_000);
  group.add(glow);

  return group;
}
