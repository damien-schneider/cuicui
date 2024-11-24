import { Server, Monitor } from "lucide-react";

export default function UseIsomorphicLayoutEffectPreview() {
  return (
    <div className="w-fit p-4 bg-neutral-400/15 rounded-xl flex space-x-2">
      {/* Server Icon */}
      <Server className="size-6 text-neutral-400/80" />
      {/* Monitor Icon */}
      <Monitor className="size-6 text-neutral-400/80" />
    </div>
  );
}
