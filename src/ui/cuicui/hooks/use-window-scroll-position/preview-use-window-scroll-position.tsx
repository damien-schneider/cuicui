"use client";
import { useWindowScrollPosition } from "#/src/ui/cuicui/hooks/use-window-scroll-position/use-window-scroll-position";

export const PreviewUseWindowScrollPosition = () => {
  const { y } = useWindowScrollPosition({ throttleMs: 200 });

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${Math.min(y / 5, 100)}%`,
        height: "5px",
        backgroundColor: "#3498db",
        transition: "width 0.2s ease-out",
        zIndex: 1000,
      }}
    />
  );
};
