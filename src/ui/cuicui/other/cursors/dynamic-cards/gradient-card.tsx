"use client";
import { ArrowUpRightIcon } from "lucide-react";
import type { ReactNode } from "react";
import { useMouse } from "#/src/ui/cuicui/hooks/use-mouse/hook/use-mouse";
import { cn } from "#/src/utils/cn";

export const GradientCard = ({
  title,
  description,
  withArrow = false,
  circleSize = 400,
  className,
  children,
}: {
  title: string;
  description: string;
  withArrow?: boolean;
  circleSize?: number;
  children?: ReactNode;
  className?: string;
}) => {
  const [mouse, parentRef] = useMouse();

  return (
    <div
      ref={parentRef}
      className="group transition-transform hover:scale-[1.01] active:scale-90 relative overflow-hidden rounded-[20px] bg-white/10 p-2 transform-gpu"
    >
      {withArrow && (
        <ArrowUpRightIcon className="absolute top-2 right-2 text-neutral-700 dark:text-neutral-300 size-5 group-hover:opacity-100 group-hover:translate-y-0 opacity-0 translate-y-4 transition-all z-10 " />
      )}
      <div
        className={cn(
          "rounded-full absolute -translate-x-1/2 -translate-y-1/2 group-hover:scale-[3] transition-transform transform-gpu duration-500",
          mouse.elementX === null || mouse.elementY === null
            ? "opacity-0"
            : "opacity-100",
        )}
        style={{
          maskImage: `radial-gradient(${
            circleSize / 2
          }px circle at center, white, transparent)`,
          width: `${circleSize}px`,
          height: `${circleSize}px`,
          left: `${mouse.elementX}px`,
          top: `${mouse.elementY}px`,
          background:
            "linear-gradient(135deg, #3BC4F2, #7A69F9,#F26378,#F5833F)",
        }}
      />
      <div className="absolute inset-px rounded-[19px] dark:bg-neutral-900/80 bg-neutral-100/80" />
      {children && (
        <div
          className={cn(
            "relative gird place-content-center border-white dark:border-neutral-950 bg-white/70 dark:bg-black/50 h-40 rounded-[15px] overflow-hidden",
            className,
          )}
        >
          {children}
        </div>
      )}
      <div className="relative px-4 pb-2 pt-4">
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-300">
          {title}
        </h3>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      </div>
    </div>
  );
};
