import { Battery } from "lucide-react";

export default function UseBatteryPreview() {
  return (
    <div className="w-fit p-4 bg-neutral-400/15 rounded-xl flex items-center">
      {/* Battery Icon */}
      <Battery className="size-6 text-neutral-400/80" />
    </div>
  );
}
