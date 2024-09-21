import React from "react";

export const DualRingSpinnerLoader = () => {
  return (
    <>
      <style>
        {`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          @keyframes spin-reverse {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(-360deg);
            }
          }

          .animate-spin-reverse {
            animation: spin-reverse 2s linear infinite;
          }
          
          .animate-spin-slow {
            animation: spin 1.5s linear infinite;
          }
        `}
      </style>
      <div className="relative flex justify-center items-center">
        <div className="w-12 h-12 dark:invert border-4 border-neutral-800 border-t-transparent rounded-full animate-spin-slow"></div>
        <div className="absolute w-10 h-10  dark:invert border-4 border-neutral-600 border-b-transparent rounded-full animate-spin-reverse"></div>
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
};
