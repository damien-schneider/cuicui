import { Volume2 } from "lucide-react";

export default function UseTextToSpeechPreview() {
  return (
    <div className="w-fit p-4 bg-neutral-400/15 rounded-xl flex items-center space-x-2">
      {/* Text Placeholder */}
      <div className="w-24 h-4 bg-neutral-400/40 rounded" />
      {/* Speaker Icon */}
      <Volume2 className="size-6 text-neutral-400/80" />
    </div>
  );
}
