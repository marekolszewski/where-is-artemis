import * as THREE from "three";
import { Body, GeoVector } from "astronomy-engine";
import { EARTH_RADIUS_KM, MOON_RADIUS_KM, AU_TO_KM } from "./types.ts";

export interface CelestialBodies {
  earthGroup: THREE.Group;
  moonMesh: THREE.Mesh;
  spacecraft: THREE.Group;
  updateMoonPosition: (date: Date) => void;
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

  const spacecraft = createSpacecraftMarker();
  scene.add(spacecraft);

  function updateMoonPosition(date: Date): void {
    const vec = GeoVector(Body.Moon, date, true);
    moonMesh.position.set(vec.x * AU_TO_KM, vec.z * AU_TO_KM, -vec.y * AU_TO_KM);
  }

  function getSpacecraftWorldPos(): THREE.Vector3 {
    return spacecraft.position.clone();
  }

  return { earthGroup, moonMesh, spacecraft, updateMoonPosition, getSpacecraftWorldPos };
}

function createSpacecraftMarker(): THREE.Group {
  const group = new THREE.Group();

  const coreGeo = new THREE.SphereGeometry(400, 16, 16);
  const coreMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  group.add(new THREE.Mesh(coreGeo, coreMat));

  const glowGeo = new THREE.SphereGeometry(800, 16, 16);
  const glowMat = new THREE.MeshBasicMaterial({
    color: 0x44aaff,
    transparent: true,
    opacity: 0.3,
    depthWrite: false,
  });
  group.add(new THREE.Mesh(glowGeo, glowMat));

  const outerGeo = new THREE.SphereGeometry(1500, 12, 12);
  const outerMat = new THREE.MeshBasicMaterial({
    color: 0x2266cc,
    transparent: true,
    opacity: 0.1,
    depthWrite: false,
  });
  group.add(new THREE.Mesh(outerGeo, outerMat));

  return group;
}
