import { ChevronDown, SparklesIcon } from "lucide-react";
import React from "react";

export default function GrowingButtonVariant1() {
  return (
    <button
      type="button"
      className="px-2 py-1 group hover:bg-neutral-400/15 active:bg-neutral-400/25 rounded-md items-center flex gap-1 transition-colors transform-gpu"
    >
      <SparklesIcon className="size-4 text-neutral-400" aria-hidden="true" />
      <span className="w-fit group-hover:max-w-20 max-w-0 overflow-hidden transition-all duration-500 transform-gpu">
        <span className=" whitespace-nowrap opacity-0 group-hover:opacity-100 duration-500 transition-opacity text-sm text-neutral-400 transform-gpu">
          Feature list
        </span>
      </span>
      <ChevronDown className="size-4 text-neutral-400" aria-hidden="true" />
    </button>
  );
}
