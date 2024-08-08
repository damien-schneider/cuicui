"use client";

import { cn } from "#/src/utils/cn";

export function ShinyGradientSkeletonVariant1() {
  return (
    <Skeleton className="rounded-2xl flex flex-col gap-5 w-48 bg-black/5 dark:bg-white/5 p-4">
      <div className="h-24 rounded-lg dark:bg-rose-100/10 bg-neutral-200 w-full" />
      <div className="space-y-3">
        <div className="h-3 w-3/5 rounded-lg dark:bg-rose-100/10 bg-neutral-200" />
        <div className="h-3 w-4/5 rounded-lg dark:bg-rose-100/20 bg-neutral-300" />
        <div className="h-3 w-2/5 rounded-lg dark:bg-rose-100/20 bg-neutral-300" />
      </div>
    </Skeleton>
  );
}

function Skeleton({
  className,
  children,
  ...props
}: Readonly<React.HTMLAttributes<HTMLDivElement>>) {
  return (
    <>
      <style>
        {`
          .shimmer::before {
            animation: shine 1.5s infinite ease-out;
          }
          @keyframes shine {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
        `}
      </style>
      <div
        className={cn(
          "shimmer",
          "before:bg-gradient-to-r before:from-transparent before:via-white/50 dark:before:via-rose-100/10 before:to-transparent before:absolute before:inset-0",
          "relative isolate overflow-hidden",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </>
  );
}
