// statisticsCategoryPreview.tsx
import { BarChart2, TrendingUp, Users } from "lucide-react";

export default function StatisticsCategoryPreview() {
  return (
    <div className="w-40 p-4 bg-neutral-400/15 rounded-xl flex flex-col space-y-4">
      {/* Bar Chart Icon */}
      <div className="flex gap-3 items-center">
        <BarChart2 className="size-6 text-neutral-400/80" />
        <div className="w-2/3 h-2 bg-neutral-400/80 rounded" />
      </div>

      {/* Trending Up Icon */}
      <div className="flex gap-3 items-center">
        <TrendingUp className="size-6 text-neutral-400/80" />
        <div className="w-2/3 h-2 bg-neutral-400/80 rounded" />
      </div>

      {/* Users Icon */}
      <div className="flex gap-3 items-center">
        <Users className="size-6 text-neutral-400/80" />
        <div className="w-2/3 h-2 bg-neutral-400/80 rounded" />
      </div>
    </div>
  );
}
