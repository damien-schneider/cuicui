import * as React from "react";
import { cn } from "#/src/utils/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const ModernSimpleInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-xl px-3 py-2 text-sm focus-visible:outline-none ring-0 disabled:cursor-not-allowed disabled:opacity-50 border transition transform-gpu",
          // Colors
          "dark:hover:bg-neutral-800/50 hover:bg-white/50 border-neutral-400/20 dark:bg-neutral-800 bg-white",
          " placeholder:text-neutral-400 focus-visible:border-neutral-400/50",
          // File
          "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
ModernSimpleInput.displayName = "Modern Simple Input";

export { ModernSimpleInput };
