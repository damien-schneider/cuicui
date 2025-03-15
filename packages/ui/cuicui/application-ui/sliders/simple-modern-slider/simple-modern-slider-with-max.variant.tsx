"use client";
import React from "react";

export default function SimpleModernSliderWithMax() {
  const [value, setValue] = React.useState(0);

  const maxValue = 5;
  return (
    <div className="px-10">
      <label className="sr-only" htmlFor="min-and-max-simple-modern-slider">
        Example range
      </label>
      <input
        aria-orientation="horizontal"
        className="// w-full cursor-col-resize appearance-none bg-transparent outline-hidden transition-all focus:outline-hidden active:scale-105 disabled:pointer-events-none disabled:opacity-50 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-1 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-neutral-600 dark:[&::-moz-range-thumb]:bg-neutral-200 [&::-moz-range-track]:h-8 [&::-moz-range-track]:w-full [&::-moz-range-track]:rounded-xl [&::-moz-range-track]:border-0 [&::-moz-range-track]:bg-neutral-200 [&::-moz-range-track]:px-2 [&::-moz-range-track]:transition-all active:[&::-moz-range-track]:bg-neutral-300 dark:[&::-moz-range-track]:bg-neutral-800 dark:active:[&::-moz-range-track]:bg-neutral-700 [&::-webkit-slider-runnable-track]:h-8 [&::-webkit-slider-runnable-track]:w-full [&::-webkit-slider-runnable-track]:rounded-xl [&::-webkit-slider-runnable-track]:border-0 [&::-webkit-slider-runnable-track]:bg-neutral-200 [&::-webkit-slider-runnable-track]:px-2 [&::-webkit-slider-runnable-track]:py-2 active:[&::-webkit-slider-runnable-track]:bg-neutral-300 dark:[&::-webkit-slider-runnable-track]:bg-neutral-800 dark:active:[&::-webkit-slider-runnable-track]:bg-neutral-700 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-1 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-0 [&::-webkit-slider-thumb]:bg-neutral-600 dark:[&::-webkit-slider-thumb]:bg-neutral-200 "
        id="min-and-max-simple-modern-slider"
        max={maxValue}
        min={0}
        onChange={(e) => setValue(Number(e.target.value))}
        type="range"
        value={value}
      />
      <div className="relative">
        <p
          className={
            "absolute top-0 rounded-full font-medium text-neutral-500 text-xs"
          }
          style={{
            left: `calc(${(value * 100) / maxValue}% - 0.25rem)`,
          }}
        >
          {value}
        </p>
      </div>
    </div>
  );
}
