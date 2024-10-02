import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "#/src/utils/cn";

type BeforeEffectButtonProps = {
  children: ReactNode;
  className?: string;
  hoverOnly?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const BeforeEffectButton = ({
  children,
  className,
  hoverOnly = true,
  ...props
}: BeforeEffectButtonProps) => {
  return (
    <button
      className={cn(
        "relative before:transform-gpu px-2 py-1 text-neutral-600 transition-colors before:absolute before:top-0 before:left-0 before:w-full hover:text-neutral-600/90 active:text-neutral-600/80 active:before:border-neutral-400/20",
        // Before
        hoverOnly
          ? "before:scale-0 before:opacity-0 before:hover:scale-100 before:hover:opacity-100"
          : "before:scale-100 before:opacity-100 hover:before:bg-neutral-500/30",
        "before:-z-10 before:h-full before:transform-gpu before:rounded-md before:border before:border-neutral-500/5 before:bg-neutral-500/10 before:transition-all before:duration-200 before:ease-out before:active:bg-neutral-500/20 before:dark:border-neutral-600/10 ",
        // Dark mode
        "dark:text-neutral-400 dark:active:text-neutral-400/80 dark:hover:text-neutral-400/90",
        className,
      )}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};
