"use client";

import { SkeletonShinyGradient } from "#/src/ui/cuicui/common-ui/skeletons/shiny-gradient/skeleton-shiny-gradient";

export function ShinyGradientSkeletonVertical() {
  return (
    <SkeletonShinyGradient
      orientation="vertical"
      className="rounded-2xl flex flex-col gap-5 w-48 bg-black/5 dark:bg-white/5 p-4"
    >
      <div className="h-24 rounded-lg dark:bg-rose-100/10 bg-neutral-200 w-full" />
      <div className="space-y-3">
        <div className="h-3 w-3/5 rounded-lg dark:bg-rose-100/10 bg-neutral-200" />
        <div className="h-3 w-4/5 rounded-lg dark:bg-rose-100/20 bg-neutral-300" />
        <div className="h-3 w-2/5 rounded-lg dark:bg-rose-100/20 bg-neutral-300" />
      </div>
    </SkeletonShinyGradient>
  );
}
