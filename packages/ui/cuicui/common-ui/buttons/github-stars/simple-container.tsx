import { cn } from "@/cuicui/utils/cn/cn";
import type { ComponentProps, HTMLProps, ReactNode } from "react";

export function ModernGradientContainerRoot({
  children,
  className,
  animationDurationInSeconds = 10,
  ...props
}: {
  children?: ReactNode;
  animationDurationInSeconds?: number;
} & ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "group relative dark:bg-neutral-800 bg-neutral-200 rounded-[12px] p-px",
        className,
      )}
      {...props}
    >
      <span
        className="absolute inset-0 rounded-[12px] overflow-hidden"
        style={{ transform: "translateZ(0)" }}
      >
        <span
          className="inset-0 absolute pointer-events-none select-none"
          style={{
            animationDuration: `${animationDurationInSeconds}s`,
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
            animationDirection: "alternate",
            animationName: "border-translate",
          }}
        >
          <span
            className="block -translate-x-1/2 -translate-y-1/3  size-24 blur-xl"
            style={{
              background: "linear-gradient(135deg, #7A69F9, #F26378, #F5833F)",
            }}
          />
        </span>
      </span>
      <span
        className="inset-0 absolute pointer-events-none select-none"
        style={{
          animationDuration: `${animationDurationInSeconds}s`,
          animationTimingFunction: "ease-in-out",
          animationIterationCount: "infinite",
          animationDirection: "alternate",
          animationName: "border-glow-translate",
        }}
      >
        <span
          className="block z-0 h-full w-12 blur-xl -translate-x-1/2 rounded-full"
          style={{
            animationDuration: `${animationDurationInSeconds}s`,
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
            animationDirection: "alternate",
            animationName: "border-glow-scale",
            background: "linear-gradient(135deg, #7A69F9, #F26378, #F5833F)",
          }}
        />
      </span>

      {children}
    </div>
  );
}

export function ModernGradientContainerContent({
  children,
  ...props
}: ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "flex items-center justify-center gap-1 relative z-[1] dark:bg-neutral-950/90 bg-neutral-50/90 rounded-[11px] w-full",
        props.className,
      )}
    >
      {children}
    </span>
  );
}
