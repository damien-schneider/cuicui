import { Mic } from "lucide-react";

export default function UseSpeechToTextPreview() {
  return (
    <div className="w-fit p-4 bg-neutral-400/15 rounded-xl flex items-center space-x-2">
      {/* Microphone Icon */}
      <Mic className="size-6 text-neutral-400/80" />
      {/* Text Placeholder */}
      <div className="w-24 h-4 bg-neutral-400/40 rounded" />
    </div>
  );
}
