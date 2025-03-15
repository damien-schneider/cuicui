export default function () {
  return (
    <div className="w-60 h-20 flex space-x-4 p-4 bg-neutral-400/15 rounded-xl">
      {/* Vertical bar */}
      <div className="w-1 h-full bg-neutral-400/40 rounded-xs" />

      {/* Content lines */}
      <div className="flex flex-col w-full space-y-2">
        <div className="w-3/4 h-full bg-neutral-400/40 rounded-xs" />
        <div className="w-5/6 h-full bg-neutral-400/40 rounded-xs" />
        <div className="w-2/3 h-full bg-neutral-400/40 rounded-xs" />
      </div>
    </div>
  );
}
