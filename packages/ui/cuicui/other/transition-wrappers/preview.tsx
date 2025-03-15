import { ArrowRight } from "lucide-react";

export default function TransitionWrappersCategoryPreview() {
  return (
    <div className="w-fit p-4 bg-neutral-400/15 rounded-xl flex items-center space-x-2">
      {/* First Box */}
      <div className="w-8 h-8 bg-neutral-400/40 rounded-xs" />
      {/* Arrow Icon */}
      <ArrowRight className="size-6 text-neutral-400/80" />
      {/* Second Box */}
      <div className="w-8 h-8 bg-neutral-400/60 rounded-xs" />
    </div>
  );
}
