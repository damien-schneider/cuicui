import { AlertCircleIcon, XIcon } from "lucide-react";

export default function SimpleAlert() {
  return (
    <div className="group group z-50 flex flex-col gap-2">
      <div className="flex transform-gpu items-center justify-between gap-2 rounded-lg border border-neutral-500/10 bg-white px-3 py-1.5 transition-all sm:py-2.5 dark:bg-neutral-800 dark:hover:bg-neutral-800/70">
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center justify-center rounded-lg border border-neutral-500/10 bg-white p-1 text-rose-500 dark:bg-neutral-400/10">
            <AlertCircleIcon className="size-5" />
          </div>
          <div>
            <p className="font-medium text-neutral-600 text-xs tracking-tight sm:font-normal sm:text-sm dark:text-neutral-300">
              Please try again
            </p>
            <p className="text-neutral-400 text-xs dark:text-neutral-500 ">
              This is the description part
            </p>
          </div>
        </div>
        <button
          className="rounded-md p-1 text-neutral-400 transition-colors ease-linear hover:bg-neutral-500/10 dark:text-neutral-600"
          type="button"
        >
          <XIcon className="size-5" />
        </button>
      </div>
    </div>
  );
}
