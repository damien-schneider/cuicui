import { cn } from "@/cuicui/utils/cn";
import type { ComponentProps, ReactNode } from "react";

export function MarqueePrimitive({
  children,
  direction = "horizontal",
  durationInMs = 5000,
  ...props
}: {
  children: ReactNode;
  direction?: "vertical" | "horizontal";
  durationInMs?: number;
} & ComponentProps<"div">) {
  return (
    <>
      <style>
        {`
          @keyframes marquee-${direction} {
            100% { transform: translate${direction === "vertical" ? "Y" : "X"}(-50%); }
          }
        `}
      </style>

      <div
        className="w-full overflow-hidden"
        style={{
          maskImage:
            direction === "vertical"
              ? "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)"
              : "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
        {...props}
      >
        <div
          className={cn(
            "flex gap-4 pb-4",
            direction === "vertical"
              ? "flex-col h-[200%]"
              : "flex-row w-[200%]",
          )}
          style={{
            animationName: `marquee-${direction}`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationDuration: `${durationInMs}ms`,
          }}
        >
          {["first-marquee", "second-marquee"].map((key) => (
            <div
              key={key}
              className={cn(
                "flex flex-1 gap-4 *:inline-flex *:flex-1 *:items-center  *:justify-center",
                direction === "vertical"
                  ? "h-1/2 w-full flex-col"
                  : "w-1/2 h-full flex-row",
              )}
            >
              {children}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MarqueePrimitive;
