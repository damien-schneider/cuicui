import type { ReactNode } from "react";
import { cn } from "@/cuicui/utils/cn";

export const StaticStep = ({
  step,
  title,
  children,
  className,
}: {
  step: number;
  title: string;
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        // "grid gap-6 w-full",
        // "grid-cols-[min-content,1fr]",
        "relative flex w-full gap-6",
        className,
      )}
    >
      {/* Left side number */}
      <div className="absolute top-0 left-0 flex h-full flex-col items-center">
        <p className="flex size-8 flex-none select-none items-center justify-center rounded-full border border-neutral-400/20 bg-neutral-100 font-medium text-neutral-700 text-sm dark:border-neutral-400/10 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80">
          {step}
        </p>
        <div className="relative my-2 h-full w-px rounded-full bg-neutral-200 dark:bg-neutral-700" />
      </div>
      {/* Right side content */}
      <div className="mb-4 w-full pl-12">
        <h6 className="mb-4 pl-1 font-medium text-lg text-neutral-700 tracking-tight dark:text-neutral-50">
          {title}
        </h6>
        {children}
      </div>
    </div>
  );
};
