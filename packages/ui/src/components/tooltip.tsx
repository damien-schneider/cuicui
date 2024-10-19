"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "../utils/cn";
const tooltipVariants = cva(
  "z-50 overflow-hidden rounded-lg animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  {
    variants: {
      variant: {
        primary:
          "bg-white dark:bg-neutral-700 border border-neutral-400/20 dark:text-neutral-100 text-neutral-800 shadow-sm",
        "no-style": "",
      },
      size: {
        sm: "py-1.5 px-3 text-xs",
        md: "px-4 py-2 text-xs",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);
const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

export interface TooltipContentProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>,
    VariantProps<typeof tooltipVariants> {
  sideOffset?: number;
}

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(({ className, variant, size, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(tooltipVariants({ variant, size, className }))}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

const TooltipNamespace = {
  Root: Tooltip,
  Trigger: TooltipTrigger,
  Content: TooltipContent,
  Provider: TooltipProvider,
};

export { TooltipNamespace as Tooltip };
