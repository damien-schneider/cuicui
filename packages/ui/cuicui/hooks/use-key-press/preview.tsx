import { Keyboard } from "lucide-react";

export default function UseKeyPressPreview() {
  return (
    <div className="w-fit p-4 bg-neutral-400/15 rounded-xl flex items-center">
      {/* Keyboard Icon */}
      <Keyboard className="size-6 text-neutral-400/80" />
    </div>
  );
}
