import { PenTool } from "lucide-react";

export default function SignatureCategoryPreview() {
  return (
    <div className="w-48 p-4 bg-neutral-400/15 rounded-xl flex items-center space-x-4">
      {/* Signature Line */}
      <div className="flex-1 h-2 bg-neutral-400/60 rounded-xs" />

      {/* Pen Icon */}
      <PenTool className="size-6 text-neutral-400/80" />
    </div>
  );
}
