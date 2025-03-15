export default function ButtonCategoryPreview() {
  return (
    <div className="flex space-x-2 p-4 w-3/4 bg-neutral-400/15 rounded-xl">
      {/* Primary Button */}
      <div className="h-7 bg-neutral-400/80 rounded-xs w-full" />
      {/* Secondary Button */}
      <div className="h-7 bg-neutral-400/40 rounded-xs border border-neutral-400/80 w-full" />
      {/* Disabled Button */}
      <div className="h-7 bg-neutral-400/20 rounded-xs w-full" />
    </div>
  );
}
