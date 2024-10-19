import { type ComponentProps, forwardRef } from "react";

import { cn } from "../utils/cn";
import { type VariantProps, cva } from "class-variance-authority";

const inputVariants = cva("disabled:cursor-not-allowed ", {
  variants: {
    variant: {
      "no-style": "",
      primary: cn(
        // TODO This is quite the same as the secondary variant, should see when using it
        "flex h-10 w-full rounded-xl px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground font-medium transition-all",
        "disabled:bg-neutral-300 dark:disabled:bg-neutral-600 disabled:text-neutral-500 dark:disabled:text-neutral-300 disabled:opacity-50",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-2 ",
        "text-neutral-700 dark:text-neutral-100 bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-700",
      ),
      secondary: cn(
        // TODO This is quite the same as the primary variant, should see when using it
        "flex h-10 w-full rounded-xl px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground font-medium transition-all",
        "disabled:bg-neutral-300 dark:disabled:bg-neutral-600 disabled:text-neutral-500 dark:disabled:text-neutral-300 disabled:opacity-50",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-2 ",
        "text-neutral-700 dark:text-neutral-100 bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700",
      ),
      neutral: cn(
        "flex h-10 w-full rounded-xl px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground font-medium transition-all",
        "disabled:bg-neutral-300 dark:disabled:bg-neutral-600 disabled:text-neutral-500 dark:disabled:text-neutral-300 disabled:opacity-50",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-2 ",
        "text-neutral-700 dark:text-neutral-100 bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-700/70",
      ),
      "neutral-2": cn(
        "flex h-10 w-full rounded-xl px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground font-medium transition-all",
        "disabled:bg-neutral-300 dark:disabled:bg-neutral-600 disabled:text-neutral-500 dark:disabled:text-neutral-300 disabled:opacity-50",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-2 ",
        "text-neutral-700 dark:text-neutral-100 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-800/70",
      ),
      outline: cn(
        //TODO: Update styles
        "flex h-10 w-full rounded-xl px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground font-medium transition-all",
        "disabled:bg-transparent dark:disabled:bg-transparent disabled:text-neutral-500 dark:disabled:text-neutral-300 disabled:opacity-50",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-2 ",
        "text-neutral-700 dark:text-neutral-100 bg-transparent hover:bg-neutral-300 dark:hover:bg-neutral-700",
      ),
      text: "appearance-none focus:outline-none bg-transparent",
      file: "file:border-0 file:bg-transparent file:text-sm file:font-medium file:cursor-pointer file:py-2 file:px-3 file:rounded-2xl file:shadow-sm file:bg-color-background-2 file:text-muted-foreground file:ring-offset-background file:focus-visible:outline-none file:focus-visible:ring-2 file:focus-visible:ring-color-brand file:focus-visible:ring-offset-2 file:disabled:opacity-50",
    },
  },
  defaultVariants: {
    variant: "neutral",
  },
});

export interface InputProps
  extends ComponentProps<"input">,
    VariantProps<typeof inputVariants> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
