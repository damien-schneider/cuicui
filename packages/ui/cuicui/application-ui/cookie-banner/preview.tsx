import { Cookie, Check } from "lucide-react";

export default function CookieBannerCategoryPreview() {
  return (
    <div className="w-64 p-4 bg-neutral-400/15 rounded-xl flex items-center space-x-4">
      {/* Cookie Icon */}
      <Cookie className="size-6 text-neutral-400/80" />

      {/* Placeholder for Message */}
      <div className="flex-1 h-3 bg-neutral-400/60 rounded-xs" />

      {/* Accept Button */}
      <div className="w-8 h-8 bg-neutral-400/30 rounded-xs flex items-center justify-center">
        <Check className="size-4 text-neutral-400" />
      </div>
    </div>
  );
}
