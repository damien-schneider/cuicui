import React from "react";

export default function ThreeDotLoaderGrowing() {
  const animationDuration = 1;

  return (
    <>
      <style>
        {`
          @keyframes three-dot-loader-growing {
            0% {
              transform: scale(1) ;
            }
            20% {
              transform: scale(1.3);
            }
            90% {
              transform: scale(1);
            }
          }
        `}
      </style>
      <div className="flex gap-2">
        {[...Array(3)].map((_, index) => (
          <div
            key={index.toString()}
            className="bg-neutral-800 dark:invert size-5 rounded-xl origin-center"
            style={{
              animationName: "three-dot-loader-growing",
              animationDuration: `${animationDuration}s`,
              animationIterationCount: "infinite",
              animationDirection: "normal",
              animationTimingFunction: "ease-in-out",
              animationDelay: `${(animationDuration / 3) * index}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}
