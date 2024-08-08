"use client";
import React from "react";

export default function BeforeEffectButtonVariant1() {
  return (
    <button
      type="button"
      className="px-2 relative py-1 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-neutral-500/15 before:rounded-md before:scale-0 before:hover:scale-100 before:opacity-0 before:hover:opacity-100 before:transition-all  before:-z-10 text-neutral-600 hover:text-neutral-500 transition-colors dark:text-neutral-400 before:ease-out before:duration-200 active:text-neutral-400 before:active:bg-neutral-500/20"
    >
      Button
    </button>
  );
}
