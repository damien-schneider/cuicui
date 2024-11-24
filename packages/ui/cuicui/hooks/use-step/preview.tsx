import { ChevronRight } from "lucide-react";

export default function UseStepPreview() {
  return (
    <div className="w-fit flex items-center space-x-2 p-4 bg-neutral-400/15 rounded-xl">
      {/* Step 1 */}
      <div className="size-6 rounded-full bg-neutral-400/60 flex items-center justify-center text-xs text-white">
        1
      </div>
      {/* Chevron Icon */}
      <ChevronRight className="size-5 text-neutral-400/80" />
      {/* Step 2 */}
      <div className="size-6 border-2 border-neutral-500/80 rounded-full flex items-center justify-center text-xs">
        2
      </div>
    </div>
  );
}
