import { MousePointer } from "lucide-react";

export default function UseMousePreview() {
  return (
    <div className="w-fit p-4 bg-neutral-400/15 rounded-xl">
      {/* Mouse Pointer Icon */}
      <MousePointer className="size-6 text-neutral-400/80" />
    </div>
  );
}
