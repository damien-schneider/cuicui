import { Clock } from "lucide-react";

export default function UseDebouncePreview() {
  return (
    <div className="w-fit p-4 bg-neutral-400/15 rounded-xl flex items-center space-x-2">
      {/* Input Field */}
      <div className="w-24 h-6 bg-neutral-400/40 rounded" />
      {/* Clock Icon */}
      <Clock className="size-6 text-neutral-400/80" />
    </div>
  );
}
