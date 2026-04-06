import type { TrajectoryPoint, MissionPhase } from "./types.ts";
import { MISSION_PHASES, EARTH_RADIUS_KM, MOON_RADIUS_KM } from "./types.ts";

export interface TimelineController {
  getCurrentIndex: () => number;
  getCurrentFractionalIndex: () => number;
  getCurrentTimestamp: () => number;
  update: (deltaMs: number) => void;
  updateInfoPanel: (info: {
    distanceFromEarth: number;
    distanceFromMoon: number;
    velocity: number;
  }) => void;
  isPlaying: () => boolean;
}

export function createTimeline(
  points: TrajectoryPoint[],
  container: HTMLElement,
): TimelineController {
  const missionStartMs = points[0].timestamp;
  const missionEndMs = points[points.length - 1].timestamp;
  const missionDurationMs = missionEndMs - missionStartMs;

  let currentTimeMs = clampToMission(Date.now());
  let playing = false;
  let playbackSpeed = 500;

  const scrubber = container.querySelector<HTMLInputElement>("#scrubber")!;
  const playBtn = container.querySelector<HTMLButtonElement>("#play-btn")!;
  const speedSelect = container.querySelector<HTMLSelectElement>("#speed-select")!;
  const timeDisplay = container.querySelector<HTMLElement>("#time-display")!;
  const phaseDisplay = container.querySelector<HTMLElement>("#phase-display")!;
  const distEarthEl = container.querySelector<HTMLElement>("#dist-earth")!;
  const distMoonEl = container.querySelector<HTMLElement>("#dist-moon")!;
  const velocityEl = container.querySelector<HTMLElement>("#velocity")!;
  const metDisplay = container.querySelector<HTMLElement>("#met-display")!;

  scrubber.min = "0";
  scrubber.max = String(points.length - 1);
  scrubber.step = "0.1";

  function clampToMission(t: number): number {
    return Math.max(missionStartMs, Math.min(t, missionEndMs));
  }

  function timeToFractionalIndex(t: number): number {
    const clamped = clampToMission(t);
    for (let i = 0; i < points.length - 1; i++) {
      if (clamped >= points[i].timestamp && clamped <= points[i + 1].timestamp) {
        const fraction = (clamped - points[i].timestamp) / (points[i + 1].timestamp - points[i].timestamp);
        return i + fraction;
      }
    }
    return clamped <= missionStartMs ? 0 : points.length - 1;
  }

  function updateScrubberFromTime(): void {
    const idx = timeToFractionalIndex(currentTimeMs);
    scrubber.value = String(idx);
    updateDisplays();
  }

  function updateDisplays(): void {
    const date = new Date(currentTimeMs);
    timeDisplay.textContent = formatDateTime(date);
    metDisplay.textContent = formatMET(currentTimeMs - missionStartMs);

    const phase = getCurrentPhase(currentTimeMs);
    if (phase) {
      phaseDisplay.textContent = phase.name;
      phaseDisplay.style.color = phase.color;
    } else {
      phaseDisplay.textContent = "—";
      phaseDisplay.style.color = "#888";
    }

    const progress = ((currentTimeMs - missionStartMs) / missionDurationMs) * 100;
    scrubber.style.setProperty("--progress", `${progress}%`);
  }

  scrubber.addEventListener("input", () => {
    const idx = parseFloat(scrubber.value);
    const lower = Math.floor(idx);
    const upper = Math.min(lower + 1, points.length - 1);
    const frac = idx - lower;
    currentTimeMs = points[lower].timestamp + (points[upper].timestamp - points[lower].timestamp) * frac;
    updateDisplays();
  });

  playBtn.addEventListener("click", () => {
    playing = !playing;
    playBtn.textContent = playing ? "⏸" : "▶";
    playBtn.title = playing ? "Pause" : "Play";
  });

  speedSelect.addEventListener("change", () => {
    playbackSpeed = parseInt(speedSelect.value, 10);
  });

  updateScrubberFromTime();

  return {
    getCurrentIndex(): number {
      return Math.round(timeToFractionalIndex(currentTimeMs));
    },

    getCurrentFractionalIndex(): number {
      return timeToFractionalIndex(currentTimeMs);
    },

    getCurrentTimestamp(): number {
      return currentTimeMs;
    },

    update(deltaMs: number): void {
      if (!playing) return;

      currentTimeMs += deltaMs * playbackSpeed;
      if (currentTimeMs >= missionEndMs) {
        currentTimeMs = missionEndMs;
        playing = false;
        playBtn.textContent = "▶";
      }
      if (currentTimeMs <= missionStartMs) {
        currentTimeMs = missionStartMs;
      }
      updateScrubberFromTime();
    },

    updateInfoPanel(info) {
      const altitudeEarth = Math.max(0, info.distanceFromEarth - EARTH_RADIUS_KM);
      distEarthEl.textContent = formatDistance(altitudeEarth);

      const altitudeMoon = Math.max(0, info.distanceFromMoon - MOON_RADIUS_KM);
      distMoonEl.textContent = formatDistance(altitudeMoon);

      velocityEl.textContent = `${(info.velocity).toFixed(2)} km/s (${(info.velocity * 3600).toFixed(0)} km/h)`;
    },

    isPlaying(): boolean {
      return playing;
    },
  };
}

function formatDateTime(d: Date): string {
  return d.toISOString().replace("T", " ").replace(/\.\d+Z$/, " UTC");
}

function formatMET(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `T+${days}d ${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function formatDistance(km: number): string {
  if (km >= 1000) {
    return `${(km).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} km`;
  }
  return `${km.toFixed(1)} km`;
}

function getCurrentPhase(t: number): MissionPhase | null {
  return MISSION_PHASES.find((p) => t >= p.startTime && t <= p.endTime) ?? null;
}
