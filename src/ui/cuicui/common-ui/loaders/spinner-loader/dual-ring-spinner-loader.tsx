export const DualRingSpinnerLoader = () => {
  return (
    <>
      <style>
        {`
          @keyframes spin {
            0% {
              rotate: 0deg;
              scale: 1;
            }
            30% {
              rotate: 20deg;
              scale: 0.9;
            }
            100% {
              rotate: -360deg;
              scale: 1;
            }
          }
        `}
      </style>
      <div className="relative flex justify-center items-center">
        <div
          className="size-12 dark:invert border-4 border-neutral-700 border-t-transparent rounded-full ease-in-out repeat-infinite"
          style={{
            animationName: "spin",
            animationDuration: "1.5s",
          }}
        />
        <div
          className="absolute size-9  dark:invert border-4 border-neutral-700 border-b-transparent rounded-full ease-in-out repeat-infinite direction-reverse"
          style={{
            animationName: "spin",
            animationDuration: "2s",
          }}
        />
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
};
