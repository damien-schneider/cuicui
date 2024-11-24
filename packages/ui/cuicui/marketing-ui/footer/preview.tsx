// footerCategoryPreview.tsx
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function FooterCategoryPreview() {
  return (
    <div className="w-48 p-4 bg-neutral-400/15 rounded-xl flex flex-col space-y-4">
      {/* Link Placeholders */}
      <div className="w-3/4 h-2 bg-neutral-400/80 rounded-full" />
      <div className="w-1/2 h-2 bg-neutral-400/80 rounded-full" />
      <div className="w-2/3 h-2 bg-neutral-400/80 rounded-full" />

      {/* Social Media Icons */}
      <div className="flex space-x-3 mt-2">
        <Facebook className="size-4 text-neutral-400/80" />
        <Twitter className="size-4 text-neutral-400/80" />
        <Instagram className="size-4 text-neutral-400/80" />
      </div>
    </div>
  );
}
