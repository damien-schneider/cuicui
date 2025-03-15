import { ChevronDown } from "lucide-react";

export default function DropdownMenuCategoryPreview() {
  return (
    <div className="relative w-40 p-4 bg-neutral-400/15 rounded-xl">
      {/* Dropdown Button */}
      <div className="w-full flex gap-2 items-center justify-between px-3 py-2 bg-neutral-400/50 rounded-xs">
        {/* Placeholder for Selected Item */}
        <div className="bg-neutral-400 h-4 rounded-full w-full" />
        {/* Chevron Icon */}
        <ChevronDown className="size-6 text-neutral-600 dark:text-neutral-300" />
      </div>
    </div>
  );
}
