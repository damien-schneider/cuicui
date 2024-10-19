"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import * as React from "react";

import { cn } from "../utils/cn";
import { type VariantProps, cva } from "class-variance-authority";
import { CheckIcon, ChevronDownIcon } from "lucide-react";

const selectTriggerVariants = cva(
  cn(
    "flex w-full items-center justify-between transition-all",
    "focus-visible:ring-offset-2 focus-visible:ring-opacity-75 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-2",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ),
  {
    variants: {
      variant: {
        neutral: cn(
          "dark:bg-neutral-700 bg-neutral-100 text-sm text-start ring-offset-background placeholder:text-muted-foreground hover:opacity-85 focus-visible:ring-neutral-500",
        ),
        "neutral-2": cn(
          "dark:bg-neutral-800 bg-white text-sm text-start ring-offset-background placeholder:text-muted-foreground hover:opacity-85 focus-visible:ring-neutral-500",
        ),
      },
      size: {
        sm: "h-8 px-3 py-2 rounded-lg",
        default: "px-3 py-2 h-10 rounded-xl",
        lg: "px-4 py-3 h-12 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "neutral",
      size: "default",
    },
  },
);

const selectContentVariants = cva(
  "relative z-50 min-w-[8rem] overflow-hidden text-start data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 duration-500",
  {
    variants: {
      variant: {
        neutral: "dark:bg-neutral-800 bg-neutral-100 border",
        "neutral-2": "dark:bg-neutral-800 bg-white border",
      },
      size: {
        default: "rounded-xl",
      },
    },
    defaultVariants: {
      variant: "neutral",
      size: "default",
    },
  },
);

const selectItemVariants = cva(
  cn(
    "relative flex w-full cursor-pointer select-none items-center outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  ),
  {
    variants: {
      variant: {
        neutral:
          "focus:bg-neutral-200 dark:focus:bg-neutral-700 focus:text-accent-foreground",
        "neutral-2":
          "focus:bg-neutral-100 dark:focus:bg-neutral-700 focus:text-accent-foreground",
      },
      size: {
        default: "rounded-lg py-1.5 pl-8 pr-2 text-sm",
      },
    },
    defaultVariants: {
      variant: "neutral",
      size: "default",
    },
  },
);

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

export interface SelectTriggerProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>,
    VariantProps<typeof selectTriggerVariants> {}

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(({ className, children, variant, size, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(selectTriggerVariants({ variant, size }), className)}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDownIcon className="size-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

export interface SelectContentProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>,
    VariantProps<typeof selectContentVariants> {}

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  SelectContentProps
>(({ className, children, position = "item-aligned", variant, size, ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        selectContentVariants({ variant, size }),
        className,
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

interface SelectItemProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>,
    VariantProps<typeof selectItemVariants> {}

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  SelectItemProps
>(({ className, children, variant, size, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(selectItemVariants({ variant, size }), className)}
    {...props}
  >
    <span className="absolute left-2 flex size-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <CheckIcon className="size-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

const SelectNameSpace = {
  Root: Select,
  Group: SelectGroup,
  Value: SelectValue,
  Trigger: SelectTrigger,
  Content: SelectContent,
  Label: SelectLabel,
  Item: SelectItem,
  Separator: SelectSeparator,
};

export { SelectNameSpace as Select };
