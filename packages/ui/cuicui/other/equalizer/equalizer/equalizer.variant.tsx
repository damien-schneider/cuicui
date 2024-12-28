"use client";
import {
  AudioEqualizer,
  type ValuePoint,
} from "@/cuicui/other/equalizer/equalizer/equalizer";
import { useState } from "react";

export const PreviewEqualizer = () => {
  const [points, setPoints] = useState<ValuePoint[]>([
    { freq: 60, gain: 0 },
    { freq: 150, gain: 0 },
    { freq: 400, gain: 0 },
    { freq: 1000, gain: 0 },
    { freq: 2400, gain: 0 },
    { freq: 15000, gain: 0 },
  ]);

  const handleReset = () => {
    setPoints((currentPoints) =>
      currentPoints.map((point) => ({
        ...point,
        gain: 0,
      })),
    );
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex items-center justify-center p-2">
        <button
          type="button"
          className="rounded-full border border-neutral-500/20 hover:bg-neutral-400/20 py-2 px-4"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      <AudioEqualizer points={points} setPoints={setPoints} maxDb={20} />
    </div>
  );
};

export default PreviewEqualizer;
