import { Zap, ArrowRight } from "lucide-react";

export default function UseEventCallbackPreview() {
  return (
    <div className="w-fit p-4 bg-neutral-400/15 rounded-xl flex items-center space-x-2">
      {/* Event Icon */}
      <Zap className="size-6 text-neutral-400/80" />
      {/* Arrow Icon */}
      <ArrowRight className="size-6 text-neutral-400/60" />
      {/* Function Placeholder */}
      <div className="w-6 h-6 bg-neutral-400/40 rounded-xs" />
    </div>
  );
}
