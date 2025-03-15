export default function () {
  return (
    <div className="w-fit flex space-x-4 p-4 bg-neutral-400/15 rounded-xl">
      {/* Unchecked Checkbox */}
      <div className="size-6 border-2 border-neutral-500/80 rounded-xs" />

      {/* Checked Checkbox */}
      <div className="size-6 border-2 border-neutral-500/80 rounded-xs flex items-center justify-center">
        <div className="w-3 h-3 bg-neutral-400/80 rounded-xs" />
      </div>

      {/* Indeterminate Checkbox */}
      <div className="size-6 border-2 border-neutral-500/80 rounded-xs flex items-center justify-center">
        <div className="w-4 h-1 bg-neutral-400/80 rounded-xs" />
      </div>
    </div>
  );
}
