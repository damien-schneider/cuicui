"use client";

import { cn } from "@/cuicui/utils/cn";
import { LaptopMinimalIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useRef, useEffect } from "react";

export const NewThemeSwitch = ({
  className,
}: {
  className?: string;
}) => {
  const { setTheme, theme: activeTheme } = useTheme();
  const listOfThemes = ["light", "dark", "system"] as const;
  const [hoveredTheme, setHoveredTheme] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ left: 0, width: 0 });

  // Update position when active theme changes or on initial render
  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const activeButton = containerRef.current.querySelector(
      `[data-theme="${activeTheme}"]`,
    );
    if (activeButton instanceof HTMLElement) {
      const rect = activeButton.getBoundingClientRect();
      // const containerRect = containerRef.current.getBoundingClientRect();

      setPosition({
        left: activeButton.offsetLeft,
        width: rect.width,
      });
    }
  }, [activeTheme]);

  // Update position on hover
  useEffect(() => {
    if (!(containerRef.current && hoveredTheme)) {
      return;
    }

    const hoveredButton = containerRef.current.querySelector(
      `[data-theme="${hoveredTheme}"]`,
    );
    if (hoveredButton instanceof HTMLElement) {
      const rect = hoveredButton.getBoundingClientRect();

      setPosition({
        left: hoveredButton.offsetLeft,
        width: rect.width,
      });
    }
  }, [hoveredTheme]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative group flex border items-center gap-1 p-0.5 rounded-full border-neutral-400/10",
        className,
      )}
      onMouseLeave={() => setHoveredTheme(activeTheme ?? null)}
    >
      <div
        className="absolute bg-neutral-400/20 rounded-full transition-all duration-300 ease-out"
        style={{
          left: position.left,
          width: position.width,
          height: "28px",
          top: "2px",
        }}
      />

      {listOfThemes.map((themeInList) => {
        return (
          <button
            type="button"
            key={themeInList}
            data-theme={themeInList}
            onClick={() => {
              setTheme(themeInList);
            }}
            onMouseEnter={() => setHoveredTheme(themeInList)}
            className={cn(
              "relative text-neutral-500 size-7 inline-grid place-content-center transition-all duration-300 z-10",
              activeTheme === themeInList &&
                "text-neutral-700 dark:text-neutral-300",
            )}
          >
            {themeInList === "system" && (
              <LaptopMinimalIcon className={cn("size-4")} />
            )}
            {themeInList === "dark" && <MoonIcon className={cn("size-4")} />}
            {themeInList === "light" && <SunIcon className={cn("size-4")} />}
          </button>
        );
      })}
    </div>
  );
};
