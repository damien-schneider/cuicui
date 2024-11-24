// preview.tsx
import { AlertTriangle } from "lucide-react";

export default function AlertCategoryPreview() {
  return (
    <div className="w-40 p-4 bg-neutral-400/15 rounded-xl flex items-center justify-center">
      {/* Alert Icon */}
      <AlertTriangle className="size-6 text-neutral-400/80" />
    </div>
  );
}
