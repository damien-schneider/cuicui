"use client";

import type { HTMLAttributes } from "react";
import { cn } from "@/cuicui/utils/cn";

export function ClassicPulseVariant1() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}

export default ClassicPulseVariant1;
function Skeleton({
  className,
  ...props
}: Readonly<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      className={cn("animate-pulse rounded-xl bg-neutral-500/30", className)}
      {...props}
    />
  );
}
