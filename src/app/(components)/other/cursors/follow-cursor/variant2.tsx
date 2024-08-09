"use client";
import React, { useRef, useEffect, useState } from "react";

export default function FollowCursorVariant2() {
  const { x, y, parentRef } = useMousePosition();

  return (
    <div className="w-full h-full relative" ref={parentRef}>
      {x !== null && y !== null && (
        <div
          className="size-6 bg-neutral-500/15 border border-neutral-500/20 rounded-full absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none transform-gpu"
          style={{
            top: y,
            left: x,
          }}
        />
      )}
    </div>
  );
}

type MousePosition = {
  x: number | null;
  y: number | null;
};

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: null,
    y: null,
  });
  const parentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      if (parentRef.current) {
        const bounds = parentRef.current.getBoundingClientRect();
        const x = event.clientX - bounds.left;
        const y = event.clientY - bounds.top;
        setMousePosition({ x, y });
      }
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return { ...mousePosition, parentRef };
};
