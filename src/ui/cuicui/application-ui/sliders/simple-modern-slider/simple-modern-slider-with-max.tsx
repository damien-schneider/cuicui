"use client";
import React from "react";

export default function SimpleModernSliderWithMax() {
  const [value, setValue] = React.useState(0);

  const maxValue = 5;
  return (
    <div className="px-10">
      <label htmlFor="min-and-max-simple-modern-slider" className="sr-only">
        Example range
      </label>
      <input
        type="range"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full bg-transparent transition-all active:scale-105 outline-none cursor-col-resize appearance-none disabled:opacity-50 disabled:pointer-events-none focus:outline-none
        [&::-webkit-slider-thumb]:w-1
        [&::-webkit-slider-thumb]:h-4
        [&::-webkit-slider-thumb]:appearance-none
        [&::-webkit-slider-thumb]:bg-neutral-600
        dark:[&::-webkit-slider-thumb]:bg-neutral-200
        [&::-webkit-slider-thumb]:border-0
        [&::-webkit-slider-thumb]:rounded-full


        [&::-webkit-slider-runnable-track]:w-full
        [&::-webkit-slider-runnable-track]:h-8
        [&::-webkit-slider-runnable-track]:border-0
        active:[&::-webkit-slider-runnable-track]:bg-neutral-300
        dark:active:[&::-webkit-slider-runnable-track]:bg-neutral-700
        [&::-webkit-slider-runnable-track]:bg-neutral-200
        dark:[&::-webkit-slider-runnable-track]:bg-neutral-800
        [&::-webkit-slider-runnable-track]:rounded-xl
        // [&::-webkit-slider-runnable-track]:px-2
        [&::-webkit-slider-runnable-track]:py-2
        
        [&::-moz-range-thumb]:w-1
        [&::-moz-range-thumb]:h-4
        [&::-moz-range-thumb]:appearance-none
        [&::-moz-range-thumb]:bg-neutral-600
        dark:[&::-moz-range-thumb]:bg-neutral-200
        [&::-moz-range-thumb]:border-0
        
        [&::-moz-range-track]:transition-all
        [&::-moz-range-track]:w-full
        [&::-moz-range-track]:h-8
        [&::-moz-range-track]:border-0
        [&::-moz-range-track]:px-2
        active:[&::-moz-range-track]:bg-neutral-300
        dark:active:[&::-moz-range-track]:bg-neutral-700
        [&::-moz-range-track]:bg-neutral-200
        dark:[&::-moz-range-track]:bg-neutral-800
        [&::-moz-range-track]:rounded-xl 
        "
        id="min-and-max-simple-modern-slider"
        aria-orientation="horizontal"
        min={0}
        max={maxValue}
      />
      <div className="relative">
        <p
          className={
            "absolute top-0 rounded-full font-medium text-xs text-neutral-500"
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
