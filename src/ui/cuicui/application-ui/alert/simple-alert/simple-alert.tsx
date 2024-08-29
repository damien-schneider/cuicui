import { AlertCircleIcon, XIcon } from "lucide-react";
import React from "react";

export default function SimpleAlert() {
  return (
    <div className="group flex flex-col gap-2 z-50 group">
      <div className="flex items-center gap-2 justify-between py-1.5 sm:py-2.5 rounded-lg transition-all bg-white border border-neutral-500/10 dark:hover:bg-neutral-800/70 transform-gpu dark:bg-neutral-800 px-3">
        <div className="flex gap-2 items-center">
          <div className="text-rose-500 dark:bg-neutral-400/10 bg-white p-1 rounded-lg border border-neutral-500/10 inline-flex items-center justify-center">
            <AlertCircleIcon className="size-5" />
          </div>
          <div>
            <p className="dark:text-neutral-300 text-neutral-600 text-xs sm:text-sm sm:font-normal font-medium tracking-tight">
              Please try again
            </p>
            <p className="dark:text-neutral-500 text-neutral-400 text-xs ">
              This is the description part
            </p>
          </div>
        </div>
        <button
          type="button"
          className="dark:text-neutral-600 text-neutral-400 hover:bg-neutral-500/10 p-1 rounded-md transition-colors ease-linear"
        >
          <XIcon className="size-5" />
        </button>
      </div>
    </div>
  );
}
