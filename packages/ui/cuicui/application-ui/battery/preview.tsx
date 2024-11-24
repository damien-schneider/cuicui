// preview.tsx - Battery Category
import { Battery } from "lucide-react";

export default function BatteryCategoryPreview() {
  return (
    <div className=" p-4 bg-neutral-400/15 rounded-xl flex items-center">
      {/* Battery Icon */}
      <Battery className="size-6 text-neutral-400/80" />

      {/* Battery Level */}
      <div className="relative w-14 h-4 bg-neutral-400/40 rounded-full ml-2">
        <div className="absolute top-0 left-0 h-full bg-neutral-400/80 rounded-full w-3/4" />
      </div>
    </div>
  );
}
