import { ChevronRight } from "lucide-react";

export default function () {
  return (
    <div className="w-fit flex items-center space-x-4 p-4 bg-neutral-400/15 rounded-xl">
      {/* Step 1 (Completed) */}
      <div className="size-6 rounded-full bg-neutral-400/60 inline-flex items-center justify-center text-xs text-white">
        1
      </div>

      {/* Step Divider */}
      <ChevronRight className="size-5 text-neutral-400/80" />

      {/* Step 2 (Current) */}
      <div className="size-6 border-2 border-neutral-500/80 rounded-full inline-flex items-center justify-center text-xs">
        2
      </div>

      {/* Step Divider */}
      <ChevronRight className="size-5 text-neutral-400/40" />

      {/* Step 3 (Upcoming) */}
      <div className="size-6 border-2 border-neutral-500/40 rounded-full text-neutral-500/40 inline-flex items-center justify-center text-xs">
        3
      </div>
    </div>
  );
}
