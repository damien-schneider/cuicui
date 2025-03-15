import { Eye } from "lucide-react";

export default function UseInViewPreview() {
  return (
    <div className="relative w-24 h-24 p-4 bg-neutral-400/15 rounded-xl">
      {/* Content Box */}
      <div className="w-full h-full bg-neutral-400/40 rounded-xs" />
      {/* Eye Icon */}
      <Eye className="absolute -top-2 -right-2 size-6 text-neutral-400/80" />
    </div>
  );
}
