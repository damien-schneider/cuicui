import { MousePointer } from "lucide-react";

export default function CursorsCategoryPreview() {
  return (
    <div className="relative w-32 h-20 p-4 bg-neutral-400/15 rounded-xl">
      {/* Background Box */}
      <div className="w-full h-full bg-neutral-400/40 rounded-xs" />
      {/* Cursor Icon */}
      <MousePointer className="absolute top-1/2 left-1/2 size-6 text-neutral-400/80 transform -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
}
