import { type VariantProps, cva } from "class-variance-authority";

import type React from "react";
import { cn } from "@/cuicui/utils/cn";

const badgeVariants = cva(
  cn(
    "inline-flex items-center justify-center",
    "whitespace-nowrap ring-offset-neutral-500/50 transition-all",
  ),
  {
    variants: {
      variant: {
        neutral:
          "bg-neutral-500/15 hover:bg-neutral-500/10 text-neutral-500 dark:text-neutral-400",

        lime: "bg-lime-500/15 border border-lime-500/20 text-lime-600 dark:text-lime-400",
      },
      size: {
        sm: "h-4 rounded-xs px-1.5 text-sm",

        md: "h-6 px-4 py-2 rounded-md px-4 text-sm font-medium",

        lg: "h-8 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "neutral",
      size: "md",
    },
  },
);

interface BadgeProps extends VariantProps<typeof badgeVariants> {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({
  children,
  className,
  variant,
  size,
}: Readonly<BadgeProps>) {
  return (
    <p className={cn(badgeVariants({ variant, size }), className)}>
      {children}
    </p>
  );
}
