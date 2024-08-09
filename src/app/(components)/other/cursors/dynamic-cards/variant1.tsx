"use client";
import React, { useRef, useEffect, useState } from "react";

export default function DynamicCardsVariant1() {
  return (
    <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
      <Card
        title="CuiCui"
        content="This is the best library for creating dynamic cards"
      />
      <Card title="Just crazy" content="How fast is it now to create cards" />

      <Card
        title="Amazing"
        content="I just have to copy paste the code and it instantly works"
      />
      <Card
        title="Unbelievable"
        content="I can't believe how easy it is to use"
      />
    </div>
  );
}

const Card = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  const { x, y, parentRef } = useMousePosition();

  return (
    <div
      ref={parentRef}
      className="relative overflow-hidden before:absolute before:inset-0 before:bg-[radial-gradient(var(--spotlight-size)_circle_at_var(--x)_var(--y),var(--spotlight-color-stops))] rounded-[--radius] bg-white/10 p-2 [--radius:theme(borderRadius.2xl)] transform-gpu"
      style={{
        //@ts-ignore : This is a valid css variable
        "--x": `${x}px`,
        "--y": `${y}px`,
        "--spotlight-color-stops": "#d4d4d4,transparent",
        "--spotlight-size": "350px",
        "--radius": "1rem",
      }}
    >
      <div className="absolute inset-px rounded-[calc(var(--radius)-1px)] dark:bg-neutral-800 bg-neutral-100 transform-gpu" />

      <div className="relative rounded-[calc(var(--radius)-4px)] bg-neutral-200 dark:bg-neutral-900 h-40" />
      <div className="relative px-4 pb-2 pt-4">
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-300">
          {title}
        </h3>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">{content}</p>
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
