export default function CreativeEffectsCategoryPreview() {
  return (
    <div className="relative w-32 h-20 p-4 bg-neutral-400/15 rounded-xl overflow-hidden">
      {/* Rotating Square */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 bg-neutral-400/40 transform rotate-45" />
      </div>
      {/* Blurred Circle */}
      <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-neutral-400/60 rounded-full transform -translate-x-1/2 -translate-y-1/2 filter blur-lg" />
    </div>
  );
}
