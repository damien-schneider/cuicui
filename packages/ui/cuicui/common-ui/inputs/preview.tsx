import { SearchIcon } from "lucide-react";

export default function InputCategoryPreview() {
  return (
    <div className="space-y-2 w-2/3 p-4 bg-neutral-400/15 rounded-xl">
      {/* Text Input */}
      <div className="w-full h-8 border border-neutral-400/20 rounded p-1 pl-3">
        <div className="w-1 h-full bg-neutral-400/20 rounded" />
      </div>
      {/* Password Input */}
      <div className="w-full h-8 bg-neutral-400/20 rounded" />
      {/* Search Input */}
      <div className="w-full h-8 bg-neutral-400/20 rounded flex items-center px-2">
        <SearchIcon className="size-4 text-neutral-400/40" />
      </div>
    </div>
  );
}
