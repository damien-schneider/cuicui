"use client";

import { MoonIcon, SunIcon, SunMoonIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

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
    </div>
  );
};
