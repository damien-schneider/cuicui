// QandACategoryPreview.tsx
import { ChevronDown, ChevronUp } from "lucide-react";

export default function QandACategoryPreview() {
  return (
    <div className="w-72 p-4 bg-neutral-400/15 rounded-xl space-y-4">
      {/* Question 1 */}
      <div className="flex items-center justify-between">
        <div className="w-3/4 h-4 bg-neutral-400 rounded-xs" />
        <ChevronDown className="size-4 text-neutral-400 cursor-pointer" />
      </div>
      {/* Answer Placeholder */}
      <div className="w-full h-3 bg-neutral-400/60 rounded-xs" />

      {/* Question 2 */}
      <div className="flex items-center justify-between">
        <div className="w-3/4 h-4 bg-neutral-400 rounded-xs" />
        <ChevronUp className="size-4 text-neutral-400 cursor-pointer" />
      </div>
      {/* Answer Placeholder */}
      <div className="w-full h-3 bg-neutral-400/60 rounded-xs" />
    </div>
  );
}
