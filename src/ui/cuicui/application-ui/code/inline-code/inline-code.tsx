import { cn } from "#/src/utils/cn";
import type { ReactNode } from "react";

export const InlineCode = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <code
      className={cn(
        "rounded-lg border border-black/5 bg-gradient-to-b from-[rgba(0,0,0,0.00)] to-[rgba(0,0,0,0.02)] px-1.5 py-1 font-mono text-neutral-900 text-sm tracking-tighter dark:border-white/5 dark:from-[rgba(255,255,255,0.05)] dark:to-[rgba(255,255,255,0.08)] dark:text-neutral-100",
        className,
      )}
    >
      {children}
    </code>
  );
};
