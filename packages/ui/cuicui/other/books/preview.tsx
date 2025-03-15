export default function () {
  return (
    <div className="inline-flex relative w-32 h-full rounded-xs">
      {/* Book cover */}

      {/* Book spine */}
      <div className="w-6 h-full bg-neutral-400/50 rounded-l-sm" />

      {/* Pages effect */}
      <div className="w-1 h-full bg-neutral-400/30" />

      {/* Book shadow */}
      <div className="absolute bottom-0 right-0 left-0 h-2 bg-neutral-400/20 blur-xs rounded-full" />

      <div className=" right-0 w-28 h-full bg-neutral-400/40 rounded-r-lg" />
    </div>
  );
}
