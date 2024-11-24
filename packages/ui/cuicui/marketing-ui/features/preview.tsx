// featuresCategoryPreview.tsx
import { Star, Heart, Settings, Activity } from "lucide-react";

export default function FeaturesCategoryPreview() {
  return (
    <div className="w-fit flex space-x-6 p-4 bg-neutral-400/15 rounded-xl">
      {/* Feature 1 */}
      <Star className="size-6 text-neutral-400/80" />

      {/* Feature 2 */}
      <Heart className="size-6 text-neutral-400/80" />

      {/* Feature 3 */}
      <Settings className="size-6 text-neutral-400/80" />

      {/* Feature 4 */}
      <Activity className="size-6 text-neutral-400/80" />
    </div>
  );
}
