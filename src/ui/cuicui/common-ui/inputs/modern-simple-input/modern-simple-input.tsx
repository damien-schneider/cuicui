import { type InputHTMLAttributes, forwardRef } from "react";
import { cn } from "#/src/utils/cn";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const ModernSimpleInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        className={cn(
          "flex h-10 w-full rounded-xl border px-3 py-2 text-sm ring-0 focus:ring-0 transition focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          // Colors
          "border-neutral-400/20 bg-white hover:bg-white/50 dark:bg-neutral-800 dark:hover:bg-neutral-800/50",
          " placeholder:text-neutral-400 focus-visible:border-neutral-400/50",
          // File
          "file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm",
          className,
        )}
        ref={ref}
        type={type}
        {...props}
      />
    );
  },
);
ModernSimpleInput.displayName = "Modern Simple Input";

export { ModernSimpleInput };
