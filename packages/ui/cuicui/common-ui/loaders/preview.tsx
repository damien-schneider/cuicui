export default function () {
  return (
    <div className="flex gap-2">
      <div className="w-fit p-4 bg-neutral-400/15 rounded-xl flex flex-col space-y-6">
        {/* Spinner */}
        <div className="size-8 border-4 border-neutral-400/40 border-t-neutral-400/90 rounded-full" />
      </div>

      <div className="flex space-x-1 p-4 items-center bg-neutral-400/15 rounded-xl">
        {/* Dot 1 */}
        <div className="w-2 h-2 bg-neutral-400/80 rounded-full" />
        {/* Dot 2 */}
        <div className="w-2 h-2 bg-neutral-400/60 rounded-full" />
        {/* Dot 3 */}
        <div className="w-2 h-2 bg-neutral-400/40 rounded-full" />
      </div>
    </div>
  );
}
