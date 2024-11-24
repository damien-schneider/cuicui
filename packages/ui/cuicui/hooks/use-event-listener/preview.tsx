import { Radio } from "lucide-react";

export default function UseEventListenerPreview() {
  return (
    <div className="w-fit p-4 bg-neutral-400/15 rounded-xl flex items-center space-x-2">
      {/* Event Source */}
      <div className="w-6 h-6 bg-neutral-400/40 rounded" />
      {/* Radio Icon */}
      <Radio className="size-6 text-neutral-400/80" />
    </div>
  );
}
