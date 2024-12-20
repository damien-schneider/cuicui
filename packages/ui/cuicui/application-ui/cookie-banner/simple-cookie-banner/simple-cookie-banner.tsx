import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/cuicui/utils/cn";

export function SimpleCookieBanner({
  children,
  className,
  ...props
}: {
  children?: ReactNode;
  className?: string;
} & ComponentProps<"dialog">) {
  return (
    <dialog
      aria-describedby="cookie-banner-description"
      aria-labelledby="cookie-banner-title"
      className={cn(
        "shadow-3xl z-50 flex flex-col gap-y-4 rounded-2xl border border-neutral-100 bg-white dark:bg-neutral-950 dark:text-neutral-500 dark:border-neutral-800 p-4 text-sm text-neutral-500 md:max-w-96",
        className,
      )}
      {...props}
    >
      <p id="cookie-banner-description">{children}</p>
      <div className="flex flex-row items-center gap-x-4">
        <button className="text-blue-500 dark:text-neutral-50" type="button">
          Accept
        </button>
        <button className="" type="button">
          Decline
        </button>
      </div>
    </dialog>
  );
}

export default SimpleCookieBanner;
