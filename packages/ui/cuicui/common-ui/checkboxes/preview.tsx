export default function () {
  return (
    <div className="w-fit flex space-x-4 p-4 bg-neutral-400/15 rounded-xl">
      {/* Unchecked Checkbox */}
      <div className="size-6 border-2 border-neutral-500/80 rounded" />

      {/* Checked Checkbox */}
      <div className="size-6 border-2 border-neutral-500/80 rounded flex items-center justify-center">
        <div className="w-3 h-3 bg-neutral-400/80 rounded" />
      </div>

      {/* Indeterminate Checkbox */}
      <div className="size-6 border-2 border-neutral-500/80 rounded flex items-center justify-center">
        <div className="w-4 h-1 bg-neutral-400/80 rounded" />
      </div>
    </div>
  );
}
