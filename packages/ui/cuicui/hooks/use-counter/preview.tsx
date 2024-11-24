import { Plus } from "lucide-react";

export default function UseCounterPreview() {
  return (
    <div className="w-fit p-4 bg-neutral-400/15 rounded-xl flex items-center space-x-2">
      {/* Counter Display */}
      <div className="w-8 h-8 bg-neutral-400/40 rounded flex items-center justify-center">
        <div className="w-2 h-2 bg-neutral-400/80 rounded-full" />
      </div>
      {/* Plus Icon */}
      <Plus className="size-6 text-neutral-400/80" />
    </div>
  );
}
