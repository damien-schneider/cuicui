export const CircularBarsSpinnerLoader = ({
  numberOfBars = 12,
  width = 3,
  height = 16,
}) => {
  const animationDuration = 1.5;
  const delay = animationDuration / numberOfBars;
  return (
    <>
      <style>
        {`
          @keyframes circular-bars {
            0% {
              opacity: 1;
              rotate: 0deg;
              scale: 1;
            }
            70% {
              opacity: 0;
              rotate: -40deg;
              scale: 0.9;
            }
            100% {
              opacity: 1;
              rotate: 0deg;
              scale: 1;
            }
          }
        `}
      </style>
      <div
        className="relative flex justify-center items-center size-12"
        aria-hidden="true"
      >
        {[...Array(numberOfBars)].map((_, index) => (
          <div
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={`circular-bars-spinner-loader-bar-${index}`}
            className="absolute dark:invert bg-neutral-700 rounded-[1px]"
            style={{
              width: `${width}px`,
              height: `${height}px`,
              transform: `rotate(${
                index * (360 / numberOfBars)
              }deg) translateX(6px) translateY(-16px)`,
              animation: `circular-bars ${animationDuration}s ease-in-out infinite`,
              animationDelay: `-${index * delay}s`,
            }}
          />
        ))}
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
};
