"use client";
import { ArrowUpRight, ArrowUpRightIcon } from "lucide-react";
import React, { useRef, useEffect, useState, type ReactNode } from "react";
import { cn } from "#/src/utils/cn";
import type { CategoryItem, PreviewComponent } from "../lib/types/component";

export const MainMenuCard = ({
  className,
  item,
}: {
  className?: string;
  item: CategoryItem;
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
      className={cn(
        "relative overflow-hidden rounded-[20px] p-2 h-full group ",
        className,
      )}
    >
      {item.href && (
        <ArrowUpRightIcon className="absolute top-2 right-2 text-neutral-700 dark:text-neutral-300 size-5 group-hover:opacity-100 group-hover:translate-y-0 opacity-0 translate-y-4 transition-all z-10 transform-gpu" />
      )}
      <div
        className={cn(
          "size-40 rounded-full blur-3xl absolute top-[var(--y)] left-[var(--x)] -translate-x-1/2 -translate-y-1/2 group-hover:scale-[5] scale  transition-transform duration-300 transform-gpu",
          (x === null || y === null) && "hidden",
        )}
        style={{
          background:
            "linear-gradient(135deg, #3BC4F2, #7A69F9,#F26378,#F5833F)",
        }}
      />
      <div className="absolute inset-px rounded-[19px] dark:bg-neutral-900/70 bg-neutral-100/90" />

      {item.preview?.component || item.comingSoon ? (
        <div className="relative flex items-center justify-center w-full object-cover rounded-2xl bg-white/50 dark:bg-neutral-950/50 h-48 overflow-hidden">
          {item.comingSoon ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-2xl font-semibold text-neutral-800 dark:text-neutral-300">
                Coming Soon
              </div>
            </div>
          ) : (
            <div
              className=" pointer-events-none select-none flex justify-center items-center w-full h-full transform-gpu"
              style={{
                transform: `scale(${item.preview?.previewScale ?? 0.75})`,
              }}
            >
              {item.preview?.component}
            </div>
          )}
        </div>
      ) : null}
      <div className="relative px-4 pb-2 pt-4">
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-300">
          {item.name}
        </h3>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          {item.description}
        </p>
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
