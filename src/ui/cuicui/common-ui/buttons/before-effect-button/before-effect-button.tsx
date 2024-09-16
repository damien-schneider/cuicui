import type { ButtonHTMLAttributes } from "react";
import { cn } from "#/src/utils/cn";

type BeforeEffectButtonProps = {
  children: React.ReactNode;
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
      type="button"
      className={cn(
        "px-2 relative py-1 before:absolute before:top-0 before:left-0 before:w-full  active:before:border-neutral-400/20 text-neutral-600 hover:text-neutral-600/90 transition-colors active:text-neutral-600/80  transform-gpu",
        // Before
        hoverOnly
          ? "before:hover:scale-100 before:opacity-0 before:hover:opacity-100 before:scale-0"
          : "before:scale-100 before:opacity-100 hover:before:bg-neutral-500/30",
        "before:h-full before:bg-neutral-500/10 before:rounded-md before:transition-all before:border before:-z-10 before:ease-out before:duration-200 before:transform-gpu before:active:bg-neutral-500/20 before:border-neutral-500/5 before:dark:border-neutral-600/10 ",
        // Dark mode
        "dark:text-neutral-400 dark:hover:text-neutral-400/90 dark:active:text-neutral-400/80",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
