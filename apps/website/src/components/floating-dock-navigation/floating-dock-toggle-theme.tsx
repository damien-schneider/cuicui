"use client";
import { cn } from "@/cuicui/utils/cn";
import { MoonIcon, SunIcon } from "lucide-react";

import { useTheme } from "next-themes";

export const FloatingDockToggleTheme = () => {
  const { setTheme, theme, resolvedTheme } = useTheme();

  const handleSwitchTheme = () => {
    if (resolvedTheme === "dark") {
      setTheme("light");
    }
    if (resolvedTheme === "light") {
      setTheme("dark");
    }
  };
  return (
    <button
      type="button"
      onClick={handleSwitchTheme}
      className={cn(
        "group relative h-14 w-10 overflow-hidden transition rounded-full bg-neutral-50 dark:bg-neutral-900 p-2 border border-neutral-500/20",
        "hover:scale-110 transform-gpu transition duration-150",
      )}
    >
      <SunIcon
        className={cn(
          "size-5 text-neutral-600 transition-all dark:text-neutral-300 z-50 duration-300 absolute -translate-x-1/2 left-1/2 top-2 transform-gpu",
          resolvedTheme === "light"
            ? "opacity-100 translate-y-0 scale-100 group-hover:scale-75 group-hover:opacity-90"
            : "opacity-50 -translate-y-8 scale-90  group-hover:-translate-y-3",
        )}
      />

      <MoonIcon
        className={cn(
          "size-5 text-neutral-600 transition-all dark:text-neutral-300 z-50 duration-300 absolute -translate-x-1/2 left-1/2 bottom-2 transform-gpu",
          resolvedTheme === "dark"
            ? "opacity-100 translate-y-0 scale-100 group-hover:scale-75 group-hover:opacity-90"
            : "opacity-50 translate-y-8 scale-75 group-hover:translate-y-3",
        )}
      />
    </button>
  );
};
