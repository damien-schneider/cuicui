import { Gauge } from "lucide-react";

export default function UseThrottlePreview() {
  return (
    <div className="w-fit p-4 bg-neutral-400/15 rounded-xl">
      {/* Gauge Icon */}
      <Gauge className="size-6 text-neutral-400/80" />
    </div>
  );
}
