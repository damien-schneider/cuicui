import React from "react";

export const CircularBarsSpinnerLoader = () => {
  return (
    <>
      <style>
        {`
          @keyframes circular-bars {
            0% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }
        `}
      </style>
      <div className="relative flex justify-center items-center w-12 h-12">
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            className="absolute dark:invert w-1 h-4 bg-neutral-800"
            style={{
              transform: `rotate(${index * 30}deg) translate(6px, -10px)`,
              animation: "circular-bars 1.2s linear infinite",
              animationDelay: `-${index * 0.1}s`,
            }}
          ></div>
        ))}
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
};
