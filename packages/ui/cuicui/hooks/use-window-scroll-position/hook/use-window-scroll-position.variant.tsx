"use client";
import { useWindowScrollPosition } from "@/cuicui/hooks/use-window-scroll-position";

export const PreviewUseWindowScrollPosition = () => {
  const { y } = useWindowScrollPosition({ throttleMs: 200 });

  return (
    <div>
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
      <p className="dark:text-neutral-200 text-neutral-700 text-2xl">
        Scroll Y: {y}
      </p>
    </div>
  );
};

export default PreviewUseWindowScrollPosition;
