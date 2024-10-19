import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "../utils/cn";

const buttonVariants = cva(
  "disabled:cursor-not-allowed gap-2 inline-flex items-center justify-center transition-all focus-visible:ring-opacity-75 focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-2 font-medium relative",
  {
    variants: {
      variant: {
        brand: cn(
          "no-underline transition-colors",
          "text-white bg-primary-500 hover:bg-opacity-70 dark:hover:bg-opacity-70 dark:text-neutral-100 dark:bg-neutral-700 dark:hover:bg-opacity-70 rounded-xl",
          "disabled:dark:text-neutral-300 disabled:bg-neutral-300 disabled:dark:bg-neutral-600 disabled:text-neutral-500",
        ),
        "brand-2": cn(
          "no-underline",
          "text-white",
          "bg-primary-500  hover:bg-opacity-70 dark:hover:bg-opacity-70 transition-colors dark:text-primary-500 dark:bg-white rounded-xl disabled:dark:text-neutral-300 disabled:bg-neutral-300 disabled:dark:bg-neutral-600 disabled:text-neutral-500",
        ),
        "no-style": "",
        red: "bg-red-100 text-red-600 hover:bg-red-500/25 dark:bg-red-500/10 dark:text-red-400 dark:hover:bg-red-500/20 focus:ring-red-500",
        orange:
          "bg-orange-100 text-orange-760 hover:bg-orange-500/25 dark:bg-orange-500/10 dark:text-orange-400 dark:hover:bg-orange-500/20 focus:ring-orange-500",
        amber:
          "bg-amber-100 text-amber-600 hover:bg-amber-500/25 dark:bg-amber-500/10 dark:text-amber-400 dark:hover:bg-amber-500/20 focus:ring-amber-500",
        yellow:
          "bg-yellow-100 text-yellow-600 hover:bg-yellow-500/25 dark:bg-yellow-500/10 dark:text-yellow-400 dark:hover:bg-yellow-500/20 focus:ring-yellow-500",
        lime: "bg-lime-100 text-lime-600 hover:bg-lime-500/25 dark:bg-lime-500/10 dark:text-lime-400 dark:hover:bg-lime-500/20 focus:ring-lime-500",
        green:
          "bg-green-100 text-green-600 hover:bg-green-500/25 dark:bg-green-500/10 dark:text-green-400 dark:hover:bg-green-500/20 focus:ring-green-500",
        emerald:
          "bg-emerald-100 text-emerald-600 hover:bg-emerald-500/25 dark:bg-emerald-500/10 dark:text-emerald-400 dark:hover:bg-emerald-500/20 focus:ring-emerald-500",
        teal: "bg-teal-100 text-teal-600 hover:bg-teal-500/25 dark:bg-teal-500/10 dark:text-teal-400 dark:hover:bg-teal-500/20 focus:ring-teal-500",
        cyan: "bg-cyan-100 text-cyan-600 hover:bg-cyan-500/25 dark:bg-cyan-500/10 dark:text-cyan-400 dark:hover:bg-cyan-500/20 focus:ring-cyan-500",
        sky: "bg-sky-100 text-sky-600 hover:bg-sky-500/25 dark:bg-sky-500/10 dark:text-sky-400 dark:hover:bg-sky-500/20",
        blue: "bg-blue-100 text-blue-600 hover:bg-blue-500/25 dark:bg-blue-500/10 dark:text-blue-400 dark:hover:bg-blue-500/20 focus:ring-blue-500",
        indigo:
          "bg-indigo-100 text-indigo-600 hover:bg-indigo-500/25 dark:bg-indigo-500/10 dark:text-indigo-400 dark:hover:bg-indigo-500/20 focus:ring-indigo-500",
        violet:
          "bg-violet-100 text-violet-600 hover:bg-violet-500/25 dark:bg-violet-500/10 dark:text-violet-400 dark:hover:bg-violet-500/20 focus:ring-violet-500",
        purple:
          "bg-purple-100 text-purple-600 hover:bg-purple-500/25 dark:bg-purple-500/10 dark:text-purple-400 dark:hover:bg-purple-500/20 focus:ring-purple-500",
        fuchsia:
          "bg-fuchsia-100 text-fuchsia-600 hover:bg-fuchsia-500/25 dark:bg-fuchsia-500/10 dark:text-fuchsia-400 dark:hover:bg-fuchsia-500/20 focus:ring-fuchsia-500",
        pink: "bg-pink-100 text-pink-600 hover:bg-pink-500/25 dark:bg-pink-500/10 dark:text-pink-400 dark:hover:bg-pink-500/20",
        rose: "bg-rose-100 text-rose-600 hover:bg-rose-500/25 dark:bg-rose-500/10 dark:text-rose-400 dark:hover:bg-rose-500/20 focus:ring-rose-500",
        neutral:
          "bg-neutral-200 text-neutral-600 hover:bg-neutral-500/25 dark:bg-neutral-500/10 dark:text-neutral-400 dark:hover:bg-neutral-500/20 focus:ring-neutral-500",
        "neutral-2":
          "bg-neutral-100 text-neutral-600 hover:bg-neutral-500/25 dark:bg-neutral-500/20 dark:text-neutral-400 dark:hover:bg-neutral-500/20 focus:ring-neutral-500",
        link: "focus:outline-none focus:ring-2 focus:ring-secondary-foreground focus:ring-opacity-75 transition-all underline-offset-4 hover:underline text-slate-900 dark:text-slate-300 hover:bg-transparent dark:hover:bg-transparent", //!! Deprecated

        "secondary-v2": cn(
          //!! Deprecated
          "no-underline",
          "bg-neutral-100 hover:bg-neutral-200 transition-colors text-neutral-700 dark:text-neutral-100 dark:bg-neutral-800 disabled:dark:text-neutral-300 disabled:bg-neutral-300 disabled:dark:bg-neutral-600 disabled:text-neutral-500 dark:hover:bg-neutral-700",
        ),
        "secondary-v3": cn(
          //!! Deprecated
          "no-underline",
          "bg-neutral-200 hover:bg-neutral-300 transition-colors text-neutral-700 dark:text-neutral-100 dark:bg-neutral-800 rounded-xl disabled:dark:text-neutral-300 disabled:bg-neutral-300 disabled:dark:bg-neutral-600 disabled:text-neutral-500 dark:hover:bg-neutral-700",
        ),
        "hover-only": cn(
          "text-neutral-700 dark:text-neutral-200 transition-colors",
          "before:absolute before:inset-0 before:w-full before:h-full before:scale-50 before:opacity-0 before:hover:scale-100 before:hover:opacity-100",
          "hover:text-neutral-600/90 active:text-neutral-600/80 active:before:border-neutral-400/20 before:",
          "before:-z-10 before:h-full before:transform-gpu before:rounded-xl before:border before:border-neutral-500/5 before:bg-neutral-500/10 before:transition-all before:duration-200 before:ease-out before:active:bg-neutral-500/20 before:dark:border-neutral-600/10 ",
        ),
      },
      isPremium: {
        true: "border border-amber-500",
        false: "",
      },
      size: {
        xs: "py-0.5 px-1.5 rounded-md text-xs",
        // default: "py-2 px-4 rounded-xl",
        sm: "h-8 px-3 rounded-xl text-sm",
        default: "h-10 px-4 rounded-xl",
        lg: "h-12 px-5 rounded-xl",
        square: "p-0 size-10 rounded-xl",
        "square-sm": "p-0 size-8 rounded-xl",
        custom: "rounded-xl",
      },
      withIcon: {
        true: "gap-2",
        false: "",
      },
    },
    defaultVariants: {
      variant: "neutral",
      size: "default",
      withIcon: false,
      isPremium: false,
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        type="button"
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
