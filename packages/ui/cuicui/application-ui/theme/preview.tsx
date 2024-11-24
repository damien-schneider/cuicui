import { Moon, Sun } from "lucide-react";

export default function () {
  return (
    <div className="w-fit flex items-center space-x-4 p-4 bg-neutral-400/15 rounded-xl">
      {/* Light Theme Icon */}
      <div className="size-6 p-1 rounded-full bg-neutral-400/40 inline-flex items-center justify-center">
        <Sun className="size-5 text-neutral-400" />
      </div>

      {/* Divider */}
      <div className="w-4 h-0.5 bg-neutral-400/60 rounded" />

      {/* Dark Theme Icon */}
      <div className="size-6 p-1 rounded-full bg-neutral-700 dark:bg-neutral-300 inline-flex items-center justify-center">
        <Moon className="size-5 text-neutral-200 dark:text-neutral-700" />
      </div>
    </div>
  );
}
