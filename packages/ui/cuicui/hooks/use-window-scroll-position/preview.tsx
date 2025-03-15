export default function UseWindowScrollPositionPreview() {
  return (
    <div className="w-24 h-32 p-4 bg-neutral-400/15 rounded-xl">
      {/* Window */}
      <div className="w-full h-full bg-neutral-400/40 rounded-xs relative">
        {/* Scroll Indicator */}
        <div className="absolute right-0 top-0 w-1 h-8 bg-neutral-400/80 rounded-xs" />
      </div>
    </div>
  );
}
