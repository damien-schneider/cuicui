"use client";

import React from "react";
import { cn } from "#/src/utils/cn";

export const ThemeSwitcherButton = () => {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");
  return (
    <button
      type="button"
      onClick={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}
      className="overflow-hidden group px-2 py-1 dark:bg-neutral-800 bg-white hover:bg-neutral-100 border border-neutral-500/10 dark:hover:bg-neutral-700 inline-flex items-center gap-2 rounded-md text-neutral-600 dark:text-neutral-300 tracking-tight font-medium relative"
    >
      <span
        className={cn(
          "relative size-6 scale-75 bg-gradient-to-tr rounded-full",
        )}
      >
        <span
          className={cn(
            "absolute w-full h-full z-10 top-0 left-0 bg-gradient-to-tr rounded-full transition-color transform-gpu duration-500 from-indigo-400 to-sky-200",
            theme === "dark" ? "scale-100" : "scale-90",
          )}
        />
        <span
          className={cn(
            "absolute w-full h-full z-10 top-0 left-0 bg-gradient-to-tr rounded-full transition-color transform-gpu duration-500 from-rose-400 to-amber-300 dark:from-rose-600 dark:to-amber-600",
            theme === "light" ? "opacity-100" : "opacity-0",
          )}
        />
        <span
          className={cn(
            "origin-top-right z-20 rounded-full bg-white group-hover:bg-neutral-100 dark:bg-neutral-800 group-hover:dark:bg-neutral-700 absolute top-0 right-0 size-4 transition-transform transform-gpu duration-500",
            theme === "dark" ? "scale-100" : "scale-0",
          )}
        />
      </span>
      <span className="relative w-12 h-6">
        <span
          className={cn(
            "absolute top-0 left-0 transition-all duration-1000",
            theme === "light"
              ? "-translate-y-4 blur-lg opacity-0"
              : "translate-y-0 opacity-100 blur-0",
          )}
        >
          Dark
        </span>
        <span
          className={cn(
            "absolute top-0 left-0 transition-all duration-1000",
            theme === "dark"
              ? "translate-y-4 blur-lg opacity-0"
              : "translate-y-0 opacity-100 blur-0",
          )}
        >
          Light
        </span>
      </span>
    </button>
  );
};
