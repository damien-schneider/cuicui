"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { type VariantProps, cva } from "class-variance-authority";
import { ChevronDownIcon } from "lucide-react";
import * as React from "react";
import { cn } from "../utils/cn";

const accordionTriggerVariants = cva("", {
  variants: {
    variant: {
      default:
        "border rounded-2xl data-[state=open]:border-primary hover:bg-primary hover:text-background",
      sidemenu: "hover:bg-background rounded-xl text-p-title text-primary ",
    },
    size: {
      sm: "text-sm py-2 px-4",
      md: "text-md py-2.5 px-6",
      lg: "text-lg py-3 px-8",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("mb-2", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> &
    VariantProps<typeof accordionTriggerVariants>
>(({ className, size, variant, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        accordionTriggerVariants({ size, variant }),
        "flex items-center flex-1 py-2.5 px-6 text-sm justify-between font-medium transition-all [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon className="w-4 h-4 transition-transform duration-200 shrink-0 text-muted-foreground" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className,
    )}
    {...props}
  >
    <div className="p-4">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

const AccordionNamespace = {
  Root: Accordion,
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
  Variants: accordionTriggerVariants,
};

export { AccordionNamespace as Accordion };
