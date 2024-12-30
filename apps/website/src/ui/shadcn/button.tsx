import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";

import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/cuicui/utils/cn";

const buttonVariants = cva(
  cn(
    "inline-flex items-center justify-center",
    "whitespace-nowrap ring-offset-neutral-500/50 transition-all",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500/20 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed",
  ),
  {
    variants: {
      variant: {
        neutral:
          "bg-neutral-500/15 hover:bg-neutral-500/10 text-neutral-500 dark:text-neutral-400",
        "hover-only": "hover:bg-neutral-500/10 text-neutral-500",
        icon: "dark:text-neutral-300 text-neutral-500 bg-neutral-800 dark:bg-neutral-700 border border-neutral-500/20 hover:scale-105 active:scale-90 transition-transform transform-gpu",
        gradient: "",
      },
      size: {
        sm: "h-6 rounded-md px-3 text-sm",
        "sm-square": "size-8 rounded-md",
        md: "h-10 px-4 py-2 rounded-md px-4 text-sm font-medium",
        "md-square": "size-10 rounded-md",
        lg: "h-11 rounded-md px-8",
        icon: "rounded-md",
      },
    },
    defaultVariants: {
      variant: "neutral",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
