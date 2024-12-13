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
        isHovered
          ? "border-neutral-400/30 scale-105"
          : "border-neutral-400/0 scale-100",
      )}
      style={{
        transition: "border-color, transform",
        transitionDuration: isHovered
          ? "0ms"
          : `${transitionDelayInMs + 300}ms`,
      }}
    >
      <div
        className={cn("px-3 py-1.5", isHovered ? "bg-neutral-400/20" : "")}
        style={{
          transition: "background-color",
          transitionDuration: isHovered
            ? "0ms"
            : `${transitionDelayInMs + 300}ms`,
        }}
      >
        <span className="text-sm font-medium">{children}</span>
      </div>
    </div>
  );
};
