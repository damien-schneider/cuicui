"use client";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { cn } from "#/src/utils/cn";
import type { CategoryType } from "../lib/types/component";

export const MainMenuCard = ({
  className,
  category,
  target,
  nameIfNotCategory: name,
  descriptionIfNotCategory: description,
}: {
  className?: string;
  category?: CategoryType;
  target?: "_blank" | "_self";
  nameIfNotCategory?: string;
  descriptionIfNotCategory?: string;
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
      {target === "_blank" && (
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

      {category?.previewCategory?.component || category?.comingSoonCategory ? (
        <div className="relative flex items-center justify-center w-full object-cover rounded-2xl bg-white/50 dark:bg-neutral-950/50 h-48 overflow-hidden">
          {category.comingSoonCategory ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-2xl font-semibold text-neutral-800 dark:text-neutral-300">
                Coming Soon
              </div>
            </div>
          ) : category.previewCategory?.previewImage ? (
            <Image
              className="object-cover w-full h-full"
              width={600}
              height={400}
              alt={`${category.name} preview`}
              src={category.previewCategory.previewImage}
            />
          ) : (
            <div
              className={cn(
                "pointer-events-none select-none flex justify-center items-center w-full h-full",
              )}
              style={{
                transform: `scale(${
                  category.previewCategory?.previewScale ?? 0.75
                })`,
              }}
            >
              {category.previewCategory?.component}
            </div>
          )}
        </div>
      ) : null}
      <div className="relative px-4 pb-2 pt-4">
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-300">
          {category?.name ?? name}
        </h3>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          {category?.description ?? description}
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
