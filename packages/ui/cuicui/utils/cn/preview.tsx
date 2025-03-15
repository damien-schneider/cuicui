import { Plus, ArrowRight } from "lucide-react";

export default function ClassNamesCategoryPreview() {
  return (
    <div className="w-fit flex items-center space-x-2 p-4 bg-neutral-400/15 rounded-xl">
      {/* First Class Box */}
      <div className="w-4 h-4 bg-neutral-400/60 rounded-xs" />
      {/* Plus Icon */}
      <Plus className="size-4 text-neutral-400/80" />
      {/* Second Class Box */}
      <div className="w-4 h-4 bg-neutral-400/60 rounded-xs" />
      {/* Arrow Icon */}
      <ArrowRight className="size-4 text-neutral-400/80" />
      {/* Combined Class Box */}
      <div className="w-6 h-6 bg-neutral-400/80 rounded-xs" />
    </div>
  );
}
