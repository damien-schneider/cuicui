import { Settings2 } from "lucide-react";

export default function SettingsPreview() {
  return (
    <div className="flex items-center p-4 bg-neutral-400/15 rounded-xl">
      {/* Settings Icon */}
      <Settings2 className="size-6 text-neutral-500/80" />

      {/* Gear Rotation Indicator */}
      <div className="ml-2 w-4 h-4 border-t-2 border-neutral-500/80 rounded-full animate-spin" />
    </div>
  );
}
