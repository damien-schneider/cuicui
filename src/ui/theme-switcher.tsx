"use client";

import { MoonIcon, SunIcon, SunMoonIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

export default () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-0.5 bg-neutral-500/5  border border-neutral-500/15  p-px rounded-lg stroke-neutral-800 ">
      {/* <ThemeSwitch onThemeSwitch={setTheme} themeMode={themeMode} /> */}
      <button
        type="button"
        className=" transition-colors hover:bg-neutral-500/10 rounded-md p-1"
        onClick={() => setTheme("dark")}
      >
        <MoonIcon className="dark:stroke-neutral-400 size-5" />
      </button>
      <button
        type="button"
        className=" transition-colors hover:bg-neutral-500/20 rounded-md p-1"
        onClick={() => setTheme("light")}
      >
        <SunIcon className="dark:stroke-neutral-400 size-5" />
      </button>
      <button
        type="button"
        className=" transition-colors hover:bg-neutral-500/20 rounded-md p-1"
        onClick={() => setTheme("system")}
      >
        <SunMoonIcon className="dark:stroke-neutral-400 size-5" />
      </button>
      {/* <div>
        The current theme is: {theme}
        <br />
        <button type="button" onClick={() => setTheme("light")}>
          Light Mode
        </button>
        <button type="button" onClick={() => setTheme("dark")}>
          Dark Mode
        </button>
      </div> */}
    </div>
  );
};
