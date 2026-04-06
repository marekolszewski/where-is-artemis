export interface TrajectoryPoint {
  timestamp: number; // Unix ms
  x: number; // km, geocentric ICRF
  y: number;
  z: number;
  vx: number; // km/s
  vy: number;
  vz: number;
}

export interface MissionData {
  spacecraft: TrajectoryPoint[];
  missionStart: number; // Unix ms
  missionEnd: number;
  launchTime: number;
  lunarFlybyTime: number;
  splashdownTime: number;
}

export interface MissionPhase {
  name: string;
  startTime: number;
  endTime: number;
  color: string;
}

export const EARTH_RADIUS_KM = 6_371;
export const MOON_RADIUS_KM = 1_737.4;
export const AU_TO_KM = 149_597_870.7;

export const MISSION_PHASES: MissionPhase[] = [
  { name: "Launch & LEO", startTime: Date.UTC(2026, 3, 1, 22, 35), endTime: Date.UTC(2026, 3, 1, 23, 30), color: "#ff4444" },
  { name: "HEO Checkout", startTime: Date.UTC(2026, 3, 1, 23, 30), endTime: Date.UTC(2026, 3, 3, 16, 0), color: "#ffaa00" },
  { name: "Trans-Lunar Coast", startTime: Date.UTC(2026, 3, 3, 16, 0), endTime: Date.UTC(2026, 3, 6, 21, 0), color: "#00aaff" },
  { name: "Lunar Flyby", startTime: Date.UTC(2026, 3, 6, 21, 0), endTime: Date.UTC(2026, 3, 7, 1, 0), color: "#ff00ff" },
  { name: "Return Coast", startTime: Date.UTC(2026, 3, 7, 1, 0), endTime: Date.UTC(2026, 3, 10, 23, 0), color: "#00ffaa" },
  { name: "Reentry & Splashdown", startTime: Date.UTC(2026, 3, 10, 23, 0), endTime: Date.UTC(2026, 3, 11, 0, 7), color: "#ff4444" },
];
