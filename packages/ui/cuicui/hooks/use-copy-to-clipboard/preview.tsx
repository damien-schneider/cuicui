import { Clipboard } from "lucide-react";

export default function UseCopyToClipboardPreview() {
  return (
    <div className="w-fit p-4 bg-neutral-400/15 rounded-xl flex items-center space-x-2">
      {/* Document Icon */}
      <div className="w-6 h-8 bg-neutral-400/40 rounded-sm" />
      {/* Clipboard Icon */}
      <Clipboard className="size-6 text-neutral-400/80" />
    </div>
  );
}
