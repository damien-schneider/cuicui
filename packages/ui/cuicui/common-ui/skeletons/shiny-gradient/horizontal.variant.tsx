"use client";

import { SkeletonShinyGradient } from "@/cuicui/common-ui/skeletons/shiny-gradient/skeleton-shiny-gradient";

export const ShinyGradientSkeletonHorizontal = () => {
  return (
    <SkeletonShinyGradient className="flex w-48 flex-col gap-5 rounded-2xl bg-black/5 p-4 dark:bg-white/5">
      <div className="h-24 w-full rounded-lg bg-neutral-200 dark:bg-rose-100/10" />
      <div className="space-y-3">
        <div className="h-3 w-3/5 rounded-lg bg-neutral-200 dark:bg-rose-100/10" />
        <div className="h-3 w-4/5 rounded-lg bg-neutral-300 dark:bg-rose-100/20" />
        <div className="h-3 w-2/5 rounded-lg bg-neutral-300 dark:bg-rose-100/20" />
      </div>
    </SkeletonShinyGradient>
  );
};

export default ShinyGradientSkeletonHorizontal;
