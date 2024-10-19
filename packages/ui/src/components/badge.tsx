import { type VariantProps, cva } from "class-variance-authority";
import type React from "react";

import { cn } from "../utils/cn";
import "./ui.css";
const badgeVariants = cva(
  "forced-colors:outline inline-flex gap-1 items-center px-2 py-0.5 rounded-md text-xs font-medium text-sm sm:text-xs h-fit",
  {
    variants: {
      variant: {
        red: "bg-red-500/15 text-red-700 hover:bg-red-500/25 dark:bg-red-500/10 dark:text-red-400 dark:hover:bg-red-500/20",
        orange:
          "bg-orange-500/15 text-orange-700 hover:bg-orange-500/25 dark:bg-orange-500/10 dark:text-orange-400 dark:hover:bg-orange-500/20",
        amber:
          "bg-amber-500/15 text-amber-700 hover:bg-amber-500/25 dark:bg-amber-500/10 dark:text-amber-400 dark:hover:bg-amber-500/20",
        yellow:
          "bg-yellow-500/15 text-yellow-700 hover:bg-yellow-500/25 dark:bg-yellow-500/10 dark:text-yellow-400 dark:hover:bg-yellow-500/20",
        lime: "bg-lime-500/15 text-lime-700 hover:bg-lime-500/25 dark:bg-lime-500/10 dark:text-lime-400 dark:hover:bg-lime-500/20",
        green:
          "bg-green-500/15 text-green-700 hover:bg-green-500/25 dark:bg-green-500/10 dark:text-green-400 dark:hover:bg-green-500/20",
        emerald:
          "bg-emerald-500/15 text-emerald-700 hover:bg-emerald-500/25 dark:bg-emerald-500/10 dark:text-emerald-400 dark:hover:bg-emerald-500/20",
        teal: "bg-teal-500/15 text-teal-700 hover:bg-teal-500/25 dark:bg-teal-500/10 dark:text-teal-400 dark:hover:bg-teal-500/20",
        cyan: "bg-cyan-500/15 text-cyan-700 hover:bg-cyan-500/25 dark:bg-cyan-500/10 dark:text-cyan-400 dark:hover:bg-cyan-500/20",
        sky: "bg-sky-500/15 text-sky-700 hover:bg-sky-500/25 dark:bg-sky-500/10 dark:text-sky-400 dark:hover:bg-sky-500/20",
        blue: "bg-blue-500/15 text-blue-700 hover:bg-blue-500/25 dark:bg-blue-500/10 dark:text-blue-400 dark:hover:bg-blue-500/20",
        indigo:
          "bg-indigo-500/15 text-indigo-700 hover:bg-indigo-500/25 dark:bg-indigo-500/10 dark:text-indigo-400 dark:hover:bg-indigo-500/20",
        violet:
          "bg-violet-500/15 text-violet-700 hover:bg-violet-500/25 dark:bg-violet-500/10 dark:text-violet-400 dark:hover:bg-violet-500/20",
        purple:
          "bg-purple-500/15 text-purple-700 hover:bg-purple-500/25 dark:bg-purple-500/10 dark:text-purple-400 dark:hover:bg-purple-500/20",
        fuchsia:
          "bg-fuchsia-500/15 text-fuchsia-700 hover:bg-fuchsia-500/25 dark:bg-fuchsia-500/10 dark:text-fuchsia-400 dark:hover:bg-fuchsia-500/20",
        pink: "bg-pink-500/15 text-pink-700 hover:bg-pink-500/25 dark:bg-pink-500/10 dark:text-pink-400 dark:hover:bg-pink-500/20",
        rose: "bg-rose-500/15 text-rose-700 hover:bg-rose-500/25 dark:bg-rose-500/10 dark:text-rose-400 dark:hover:bg-rose-500/20",
        neutral:
          "bg-neutral-500/15 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-100",
        outline:
          "border border-neutral-500/15 text-neutral-700 dark:border-neutral-700 dark:text-neutral-100",
        rainbow: "rainbow-gradient text-slate-900/80 dark:text-white/80 ",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
