export default function () {
  return (
    <div className="w-fit min-h-36 p-4 min-w-40 bg-neutral-400/15 rounded-xl flex flex-col items-center justify-center space-y-4">
      {/* Exclamation Mark */}
      <div className="flex flex-col items-center">
        <div className="w-2 h-8 bg-neutral-400/40 rounded-xs" />
        <div className="w-2 h-2 bg-neutral-400/40 rounded-xs mt-1" />
      </div>

      {/* Error-like lines */}
      <div className="w-3/4 h-2 bg-neutral-400/40 rounded-xs" />
      <div className="w-2/3 h-2 bg-neutral-400/40 rounded-xs" />
      <div className="w-1/2 h-2 bg-neutral-400/40 rounded-xs" />
    </div>
  );
}
