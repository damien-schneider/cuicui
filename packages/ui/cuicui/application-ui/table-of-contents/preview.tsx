export default function TableOfContentCategoryPreview() {
  return (
    <div className="w-40 p-4 bg-neutral-400/15 rounded-xl space-y-3">
      {/* TOC List */}
      <div className="space-y-2">
        {/* Level 1 */}
        <div className="h-3 bg-neutral-400/80 rounded w-3/4" />
        {/* Level 2 */}
        <div className="ml-4 h-3 bg-neutral-400/60 rounded w-2/3" />
        {/* Level 2 */}
        <div className="ml-4 h-3 bg-neutral-400/60 rounded w-2/5" />
        {/* Level 1 */}
        <div className="h-3 bg-neutral-400/80 rounded w-3/4" />
        {/* Level 2 */}
        <div className="ml-4 h-3 bg-neutral-400/60 rounded w-1/2" />
      </div>
    </div>
  );
}
