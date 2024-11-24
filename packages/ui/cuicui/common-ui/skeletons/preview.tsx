export default function SkeletonCategoryPreview() {
  return (
    <div className="space-y-2 p-4 w-3/4 bg-neutral-400/15 rounded-xl">
      {/* Skeleton Lines */}
      <div className="w-full h-4 bg-neutral-400/30 rounded animate-pulse" />
      <div className="w-3/4 h-4 bg-neutral-400/30 rounded animate-pulse" />
      <div className="w-full h-4 bg-neutral-400/30 rounded animate-pulse" />
      <div className="w-2/4 h-4 bg-neutral-400/30 rounded animate-pulse" />
    </div>
  );
}
