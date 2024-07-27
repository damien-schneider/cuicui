"use client";
import React, { useRef, useEffect, useState } from "react";

export default function DynamicCardsVariant1() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

const Card = () => {
  const { x, y, parentRef } = useMousePosition();

  return (
    <div
      ref={parentRef}
      className="relative overflow-hidden before:absolute before:inset-0 before:bg-[radial-gradient(var(--spotlight-size)_circle_at_var(--x)_var(--y),var(--spotlight-color-stops))] rounded-[--radius] bg-white/10 p-2 [--radius:theme(borderRadius.2xl)]"
      style={{
        //@ts-ignore : This is a valid css variable
        "--x": `${x}px`,
        "--y": `${y}px`,
        "--spotlight-color-stops": "#ffffff99,transparent",
        "--spotlight-size": "350px",
        "--radius": "1rem",
      }}
    >
      <div className="absolute inset-px rounded-[calc(var(--radius)-1px)] bg-[#1D1D20]" />

      <div className="relative px-4 pb-2 pt-4">
        <h3 className="text-lg font-semibold text-white">Sparkles</h3>
        <p className="mt-2"> Animated floating particles component.</p>
      </div>
    </div>
  );
};

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
