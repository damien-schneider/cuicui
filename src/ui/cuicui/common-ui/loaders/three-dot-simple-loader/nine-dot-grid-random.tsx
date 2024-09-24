export default function NineDotGridRandom() {
  const animationDuration = 1;

  return (
    <>
      <style>
        {`
          @keyframes three-dot-loader-growing {
            0% {
              transform: scale(1) ;
            }
            30% {
              transform: scale(1.5);
            }
            60% {
              transform: scale(1);
            }
          }
        `}
      </style>

      <div className="grid grid-cols-3 gap-3">
        {[...new Array(9)].map((_, index) => (
          <div
            className="size-5 origin-center rounded-xl bg-neutral-800 dark:invert"
            key={index.toString()}
            style={{
              animationName: "three-dot-loader-growing",
              animationDuration: `${animationDuration}s`,
              animationIterationCount: "infinite",
              animationDirection: "both",
              animationTimingFunction: "ease-in",
              animationDelay: `${Math.random() * (animationDuration / 2)}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}
