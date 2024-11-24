// preview.tsx - Authentication Category
import { Lock, User } from "lucide-react";

export default function AuthenticationCategoryPreview() {
  return (
    <div className="w-40 p-4 bg-neutral-400/15 rounded-xl flex items-center space-x-4">
      {/* Lock Icon */}
      <Lock className="size-6 text-neutral-400/80" />

      {/* User Icon */}
      <User className="size-6 text-neutral-400/80" />
    </div>
  );
}
