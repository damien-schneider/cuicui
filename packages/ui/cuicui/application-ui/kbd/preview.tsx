export default function KbdCategoryPreview() {
  return (
    <div className="flex space-x-2 p-4 bg-neutral-400/15 rounded-xl">
      {/* Key 1 */}
      <kbd className="px-2 py-1 bg-neutral-500/80 text-white text-xs rounded-md">
        ⌘
      </kbd>

      {/* Key + */}
      <kbd className="px-2 py-1 bg-neutral-500/80 text-white text-xs rounded-md">
        +
      </kbd>

      {/* Key C */}
      <kbd className="px-2 py-1 bg-neutral-500/80 text-white text-xs rounded-md">
        C
      </kbd>
    </div>
  );
}
