// preview.tsx - Code Category
import { Code } from "lucide-react";

export default function CodeCategoryPreview() {
  return (
    <div className="w-2/4 p-4 bg-neutral-400/15 rounded-xl flex items-center gap-3">
      {/* Code Icon */}
      <Code className="size-6 text-neutral-400/80" />

      {/* Code Snippet */}
      <div className="w-full space-y-2">
        <div className="w-2/3 h-1 bg-neutral-400/80 rounded-xs" />
        <div className="w-3/4 h-1 bg-neutral-400/80 rounded-xs" />
        <div className="w-1/2 h-1 bg-neutral-400/80 rounded-xs" />
      </div>
    </div>
  );
}
