import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "../utils/cn";

const alertVariants = cva(
  "relative w-full rounded-lg  p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        red: "bg-red-500/15 text-red-700 dark:bg-red-500/10 dark:text-red-400 border-l-4 border-red-500/50",
        orange:
          "bg-orange-500/15 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400 border-l-4 border-orange-500/50",
        amber:
          "bg-amber-500/15 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400 border-l-4 border-amber-500/50",
        yellow:
          "bg-yellow-500/15 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400 border-l-4 border-yellow-500/50",
        lime: "bg-lime-500/15 text-lime-700 dark:bg-lime-500/10 dark:text-lime-400 border-l-4 border-lime-500/50",
        green:
          "bg-green-500/15 text-green-700 dark:bg-green-500/10 dark:text-green-400 border-l-4 border-green-500/50",
        emerald:
          "bg-emerald-500/15 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 border-l-4 border-emerald-500/50",
        teal: "bg-teal-500/15 text-teal-700 dark:bg-teal-500/10 dark:text-teal-400 border-l-4 border-teal-500/50",
        cyan: "bg-cyan-500/15 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-400 border-l-4 border-cyan-500/50",
        sky: "bg-sky-500/15 text-sky-700 dark:bg-sky-500/10 dark:text-sky-400 border-l-4 border-sky-500/50",
        blue: "bg-blue-500/15 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 border-l-4 border-blue-500/50",
        indigo:
          "bg-indigo-500/15 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400 border-l-4 border-indigo-500/50",
        violet:
          "bg-violet-500/15 text-violet-700 dark:bg-violet-500/10 dark:text-violet-400 border-l-4 border-violet-500/50",
        purple:
          "bg-purple-500/15 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400 border-l-4 border-purple-500/50",
        fuchsia:
          "bg-fuchsia-500/15 text-fuchsia-700 dark:bg-fuchsia-500/10 dark:text-fuchsia-400 border-l-4 border-fuchsia-500/50",
        pink: "bg-pink-500/15 text-pink-700 dark:bg-pink-500/10 dark:text-pink-400 border-l-4 border-pink-500/50",
        rose: "bg-rose-500/15 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400 border-l-4 border-rose-500/50",
        neutral:
          "bg-neutral-300/15 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 border-l-4 border-neutral-500/15",
        outline:
          "border border-neutral-500/15 text-neutral-700 dark:border-neutral-700 dark:text-neutral-100 border-l-4",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  },
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

const AlertNameSpace = {
  Root: Alert,
  Title: AlertTitle,
  Description: AlertDescription,
};

export { AlertNameSpace as Alert };
