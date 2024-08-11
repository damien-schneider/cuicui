"use client";
import React, { useRef, useEffect, useState } from "react";
import { cn } from "#/src/utils/cn";

export default function DynamicCardsVariant2() {
  return (
    <div className="relative w-5/6 p-12">
      <div className="grid gap-2 md:grid-cols-2 grid-cols-1">
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
      style={{
        //@ts-ignore : This is a valid css variable
        "--x": `${x}px`,
        "--y": `${y}px`,
      }}
      className="relative overflow-hidden rounded-[20px] bg-white/10 p-2 transform-gpu"
    >
      <div
        className={cn(
          "size-40 rounded-full blur-3xl absolute top-[var(--y)] left-[var(--x)] -translate-x-1/2 -translate-y-1/2",
          (x === null || y === null) && "hidden",
        )}
        style={{
          background:
            "linear-gradient(135deg, #3BC4F2, #7A69F9,#F26378,#F5833F)",
        }}
      />
      <div className="absolute inset-px rounded-[19px] dark:bg-neutral-800/70 bg-neutral-100/70" />
      <div className="relative  bg-white dark:bg-neutral-900/50 h-40 backdrop-blur-xl rounded-[15px]" />
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
