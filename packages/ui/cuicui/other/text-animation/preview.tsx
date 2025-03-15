export default function () {
  return (
    <div className="w-fit p-4 bg-neutral-400/15 rounded-xl min-h-36 flex flex-col justify-evenly space-y-3">
      {/* Line + "Cursor" 1 */}
      <div className="flex items-center space-x-2">
        <div className="w-44 h-2 bg-neutral-400/40 rounded-xs" />
        <div className="w-1 h-3 bg-neutral-400/40 rounded-xs" />
      </div>

      {/* Line + "Cursor" 2 */}
      <div className="flex items-center space-x-2">
        <div className="w-36 h-2 bg-neutral-400/40 rounded-xs" />
        <div className="w-1 h-3 bg-neutral-400/40 rounded-xs" />
      </div>

      {/* Line + "Cursor" 3 */}
      <div className="flex items-center space-x-2">
        <div className="w-28 h-2 bg-neutral-400/40 rounded-xs" />
        <div className="w-1 h-3 bg-neutral-400/40 rounded-xs" />
      </div>
    </div>
  );
}
