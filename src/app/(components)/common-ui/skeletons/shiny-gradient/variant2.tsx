"use client";

import { cn } from "#/src/utils/cn";

export function ShinyGradientVariant2() {
  return (
    <Skeleton className="rounded-2xl">
      <div className="flex flex-col gap-5 w-48 rounded-2xl bg-white/5 p-4">
        <div className="h-24 rounded-lg bg-rose-100/10" />
        <div className="space-y-3">
          <div className="h-3 w-3/5 rounded-lg bg-rose-100/10" />
          <div className="h-3 w-4/5 rounded-lg bg-rose-100/20" />
          <div className="h-3 w-2/5 rounded-lg bg-rose-100/20" />
        </div>
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
              transform: translateY(-100%);
            }
            100% {
              transform: translateY(100%);
            }
          }
        `}
      </style>
      <div
        className={cn(
          "shimmer",
          "before:bg-gradient-to-b before:from-transparent before:via-rose-100/10 before:to-transparent before:absolute before:inset-0",
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
