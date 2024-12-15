import { cn } from "@/cuicui/utils/cn";
import type { ComponentProps, ReactNode } from "react";

export function StickyFooter({
  children,
  className,
  heightValue = "100dvh",
  ...props
}: {
  children: ReactNode;
  className?: string;
  heightValue?: string;
} & ComponentProps<"div">) {
  return (
    <div
      className={`relative h-[${heightValue}]`}
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div
        className={cn(`fixed bottom-0 h-[${heightValue}] w-full`, className)}
      >
        {children}
      </div>
    </div>
  );
}
