import { Wifi } from "lucide-react";

export default function UseNetworkStatusPreview() {
  return (
    <div className="w-fit p-4 bg-neutral-400/15 rounded-xl">
      {/* Wi-Fi Icon */}
      <Wifi className="size-6 text-neutral-400/80" />
    </div>
  );
}
