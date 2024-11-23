import type { HTMLAttributes } from "react";
import { cn } from "@/cuicui/utils/cn/cn";

type SkeletonShinyGradientProps = {
  orientation?: "horizontal" | "vertical";
} & Readonly<HTMLAttributes<HTMLDivElement>>;

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
          } before:absolute before:inset-0 before:from-transparent before:via-white/50 before:to-transparent dark:before:via-rose-100/10`,
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
