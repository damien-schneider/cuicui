import type { ReactNode } from "react";
import { cn } from "../utils/cn";

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
        "flex gap-6 w-full relative",
        className,
      )}
    >
      {/* Left side number */}
      <div className="flex-col flex absolute top-0 left-0 h-full items-center">
        <p className="flex items-center justify-center size-8 rounded-full bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-800/80 text-sm font-medium select-none flex-none text-neutral-700 dark:text-neutral-50 border-neutral-400/20 border dark:border-neutral-400/10">
          {step}
        </p>
        <div className="w-px h-full relative rounded-full bg-neutral-200 dark:bg-neutral-700 my-2" />
      </div>
      {/* Right side content */}
      <div className="mb-4 w-full pl-12">
        <h6 className="text-lg pl-1 font-medium tracking-tight mb-4 text-neutral-700  dark:text-neutral-50">
          {title}
        </h6>
        {children}
      </div>
    </div>
  );
};
