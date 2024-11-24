import { WifiOff, Wifi } from "lucide-react";

export default function UseOnlineStatusPreview() {
  return (
    <div className="w-fit p-4 bg-neutral-400/15 rounded-xl flex items-center space-x-2">
      {/* Online Icon */}
      <Wifi className="size-6 text-neutral-400/80" />
      {/* Offline Icon */}
      <WifiOff className="size-6 text-neutral-400/60" />
    </div>
  );
}
