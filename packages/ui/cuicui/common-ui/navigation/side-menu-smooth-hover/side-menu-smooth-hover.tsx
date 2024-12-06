"use client";
import { cn } from "@/cuicui/utils/cn/cn";
import { type ReactNode, useState } from "react";

export const SmoothHoverMenuItem = ({
  children,
  transitionDelayInMs = 300,
}: { children: ReactNode; transitionDelayInMs?: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "rounded-lg border overflow-hidden cursor-pointer",
        isHovered ? "border-neutral-400/30" : "border-neutral-400/0",
      )}
      style={{
        transition: isHovered
          ? ""
          : `border-color ${transitionDelayInMs + 300}ms`,
        animationDuration: isHovered ? `${transitionDelayInMs + 300}ms` : "0ms",
      }}
    >
      <div
        className={cn("px-3 py-1.5", isHovered ? "bg-neutral-400/20" : "")}
        style={{
          transition: isHovered
            ? ""
            : `background-color ${transitionDelayInMs}ms`,
          animationDuration: isHovered ? `${transitionDelayInMs}ms` : "0ms",
        }}
      >
        <span className="text-sm font-medium">{children}</span>
      </div>
    </div>
  );
};
