import { cn } from "#/src/utils/cn";

type SkeletonShinyGradientProps = {
  orientation?: "horizontal" | "vertical";
} & Readonly<React.HTMLAttributes<HTMLDivElement>>;

export const SkeletonShinyGradient = ({
  className,
  children,
  orientation = "horizontal",
  ...props
}: SkeletonShinyGradientProps) => {
  const isHorizontal = orientation === "horizontal";

  return (
    <>
      <style>
        {`
          .shimmer::before {
            animation: shine 1.5s infinite ease-out;
          }
          @keyframes shine {
            0% {
              transform: ${
                isHorizontal
                  ? "translate3d(-100%, 0, 0)"
                  : "translate3d(0, -100%, 0)"
              };
            }
            100% {
              transform: ${
                isHorizontal
                  ? "translate3d(100%, 0, 0)"
                  : "translate3d(0, 100%, 0)"
              };
            }
          }
        `}
      </style>
      <div
        className={cn(
          "shimmer",
          `before:bg-gradient-to-${
            isHorizontal ? "r" : "b"
          } before:from-transparent before:via-white/50 dark:before:via-rose-100/10 before:to-transparent before:absolute before:inset-0`,
          "relative isolate overflow-hidden",
          isHorizontal ? "before:bg-gradient-to-r" : "before:bg-gradient-to-b",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </>
  );
};
