import { XIcon } from "lucide-react";
import { cn } from "#/src/utils/cn";

import type { HTMLAttributes } from "react";

interface ModernGlassyAlertProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  badge?: string;
  children?: React.ReactNode;
  href?: string;
}

export default function ModernGlassyAlert({
  className,
  badge,
  children,
  href,
  ...props
}: Readonly<ModernGlassyAlertProps>) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-10 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
      <div
        className={cn(
          "pointer-events-auto flex items-center justify-between gap-x-6 bg-black/25 px-6 py-2.5 backdrop-blur-md sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5",
          className,
        )}
        {...props}
      >
        <p className="text-sm leading-6 text-white">
          <a href={href}>
            {children}
            {badge && (
              <span className="ml-1 cursor-pointer rounded-full bg-white px-2 py-0.5 text-sm font-medium text-black">
                {badge}
              </span>
            )}
          </a>
        </p>
        <button type="button" className="-m-1.5 flex-none p-1.5">
          <span className="sr-only">Dismiss</span>
          <XIcon className="size-5 text-white" />
        </button>
      </div>
    </div>
  );
}
