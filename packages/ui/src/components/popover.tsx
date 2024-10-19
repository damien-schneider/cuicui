"use client";

import * as PopoverPrimitive from "@radix-ui/react-popover";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "../utils/cn";

const popoverVariants = cva(
  "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  {
    variants: {
      variant: {
        default:
          "p-4 z-50 rounded-2xl bg-white dark:bg-neutral-900 border dark:border-neutral-800 border-neutral-100 text-color-body shadow-lg outline-none ",
        "no-padding":
          "z-50 rounded-2xl bg-white dark:bg-neutral-900 text-color-body border dark:border-neutral-800 border-neutral-100 shadow-lg outline-none ",
        "no-style": "",
      },
      size: {
        default: "w-72",
        lg: "w-96",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> &
    VariantProps<typeof popoverVariants>
>(({ className, align = "center", variant, size, sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(popoverVariants({ variant, size, className }))}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

const PopoverNameSpace = {
  Root: Popover,
  Trigger: PopoverTrigger,
  Content: PopoverContent,
  Variants: popoverVariants,
};

export { PopoverNameSpace as Popover };
