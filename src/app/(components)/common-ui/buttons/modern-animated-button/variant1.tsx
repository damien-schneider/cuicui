import React from "react";

export default function ModernAnimatedButtonVariant1() {
  return (
    <>
      <style>
        {`
        /* Define custom properties with @property */
        @property --r2 {
          syntax: "<angle>";
          inherits: false;
          initial-value: 0deg;
        }

        @property --x {
          syntax: "<length>";
          inherits: false;
          initial-value: 20px;
        }

        /* Animated button styles */

        .rotation-animation {
          animation: rotationKeyFrames -.64s linear 3s infinite, translationKeyFrames -.64s linear 3s infinite
        }

        /* Keyframes for rotation */
        @keyframes rotationKeyFrames {
          0% {
            --r2: 0deg;
          }
          32.8228% {
            --r2: 0deg;
          }
          50% {
            --r2: 180deg;
          }
          82.8228% {
            --r2: 180deg;
          }
          100% {
            --r2: 360deg;
          }
        }

        /* Keyframes for x movement */
        @keyframes translationKeyFrames {
          0% {
            --x: 20px;
          }
          32.8228% {
            --x: 180px;
          }
          50% {
            --x: 180px;
          }
          82.8228% {
            --x: 20px;
          }
          100% {
            --x: 20px;
          }
        }
      `}
      </style>
      <button
        type="button"
        className="p-px rounded-full rotation-animation transition-all shadow-[0_0_20px_0_rgba(245,48,107,0.1)] hover:shadow-[0_0_20px_3px_rgba(245,49,108,.2)] hover:bg-[#782a2b] cursor-pointer conic-gradient dark:invert-0 invert hue-rotate-[190deg] dark:hue-rotate-0 transform-gpu"
        style={{
          background:
            "conic-gradient(from calc(var(--r2) - 80deg) at var(--x) 15px, transparent 0, #eca5a7 20%, transparent 25%), #452324",
        }}
      >
        <span
          className="flex flex-nowrap items-center h-7 px-3 font-medium tracking-tighter rounded-full pointer-events-none gap-2 py-1 text-sm
          bg-[#120d0e] text-[#eca5a7]"
        >
          <span>Advanced button</span>
          <span className="h-5/6 w-px bg-neutral-700/50" />
          <span className="text-neutral-500 ">Hover me</span>
        </span>
      </button>
    </>
  );
}
