export default function ContextMenuCategoryPreview() {
  return (
    <div className="w-40 p-4 bg-neutral-400/15 rounded-xl flex flex-col space-y-2">
      {/* Menu Item 1 */}
      <div className="flex items-center space-x-3">
        <div className="w-4 h-4 bg-neutral-400/80 rounded-full" />
        <div className="w-24 h-3 bg-neutral-400/80 rounded" />
      </div>

      {/* Menu Item 2 */}
      <div className="flex items-center space-x-3">
        <div className="w-4 h-4 bg-neutral-400/80 rounded-full" />
        <div className="w-24 h-3 bg-neutral-400/80 rounded" />
      </div>

      {/* Menu Item 3 */}
      <div className="flex items-center space-x-3">
        <div className="w-4 h-4 bg-neutral-400/80 rounded-full" />
        <div className="w-24 h-3 bg-neutral-400/80 rounded" />
      </div>
    </div>
  );
}
