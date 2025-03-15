export default function () {
  return (
    <div className="w-fit p-4 bg-neutral-400/15 rounded-xl min-h-32 flex flex-col space-y-4">
      {/* Action Button */}
      <div className="w-8 h-8 bg-neutral-400/40 rounded-full mb-4" />

      {/* Menu Items */}
      <div className="flex flex-col space-y-2">
        <div className="w-full h-4 bg-neutral-400/40 rounded-xs" />
        <div className="w-3/4 h-4 bg-neutral-400/40 rounded-xs" />
        <div className="w-1/2 h-4 bg-neutral-400/40 rounded-xs" />
      </div>
    </div>
  );
}
