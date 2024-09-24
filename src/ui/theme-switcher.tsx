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
    <div className="flex gap-0.5 rounded-lg border border-neutral-500/15 bg-neutral-500/5 stroke-neutral-800 p-px ">
      {/* <ThemeSwitch onThemeSwitch={setTheme} themeMode={themeMode} /> */}
      <button
        className=" rounded-md p-1 transition-colors hover:bg-neutral-500/10"
        onClick={() => setTheme("dark")}
        type="button"
      >
        <MoonIcon className="size-5 dark:stroke-neutral-400" />
      </button>
      <button
        className=" rounded-md p-1 transition-colors hover:bg-neutral-500/20"
        onClick={() => setTheme("light")}
        type="button"
      >
        <SunIcon className="size-5 dark:stroke-neutral-400" />
      </button>
      <button
        className=" rounded-md p-1 transition-colors hover:bg-neutral-500/20"
        onClick={() => setTheme("system")}
        type="button"
      >
        <SunMoonIcon className="size-5 dark:stroke-neutral-400" />
      </button>
    </div>
  );
};
