"use client";
import React from "react";

export default function BeforeEffectButtonVariant2() {
  return (
    <button
      type="button"
      className="px-3 relative py-2 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-neutral-500/5 before:rounded-lg before:scale-90 before:hover:scale-100 before:opacity-0 before:hover:opacity-100 before:transition-all  before:-z-10 text-neutral-600  transition-colors dark:text-neutral-400 before:ease-out before:duration-200 before:active:bg-neutral-500/10 before:border before:border-neutral-500/5 before:dark:border-neutral-600/10"
    >
      <div className="flex items-center gap-2">
        <div className="size-6 rounded-full bg-neutral-300 border dark:bg-neutral-600 border-neutral-500/30" />
        <p className="font-medium">Damien Schneider</p>
      </div>

      <p className="text-sm mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <p className=" font-medium text-xs mt-1 text-start hover:opacity-70 transition-opacity">
        See more
      </p>
    </button>
  );
}
