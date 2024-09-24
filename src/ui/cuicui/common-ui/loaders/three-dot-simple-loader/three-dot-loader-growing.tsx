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
        {[...new Array(3)].map((_, index) => (
          <div
            className="size-5 origin-center rounded-xl bg-neutral-800 dark:invert"
            key={index.toString()}
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
