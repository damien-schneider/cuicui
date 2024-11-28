import { ArrowDown } from "lucide-react";

export default function AutoScrollChatCategoryPreview() {
  return (
    <div className="w-64 p-4 bg-neutral-400/15 rounded-xl flex flex-col space-y-4">
      {/* Incoming Message */}
      <div className="bg-neutral-400/80 p-2 rounded-lg max-w-xs" />

      {/* Outgoing Message */}
      <div className="bg-neutral-400/80 p-2 rounded-lg max-w-xs ml-auto" />

      {/* Auto Scroll Indicator */}
      <div className="flex justify-center">
        <ArrowDown className="size-6 text-neutral-400/80" />
      </div>
    </div>
  );
}
