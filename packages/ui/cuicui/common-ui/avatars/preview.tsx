import { User } from "lucide-react";

export default function AvatarCategoryPreview() {
  return (
    <div className="flex space-x-2 p-4 bg-neutral-400/15 rounded-xl">
      {/* Avatar 1 */}
      <div className="w-8 h-8 bg-neutral-400/80 rounded-full" />
      {/* Avatar 2 */}
      <div className="w-8 h-8 bg-neutral-400/60 rounded-full" />
      {/* Avatar with Placeholder */}
      <div className="w-8 h-8 bg-neutral-400/40 rounded-full flex items-center justify-center">
        <User className="size-4 text-neutral-400/80" />
      </div>
    </div>
  );
}
