export default function MockUpsCategoryPreview() {
  return (
    <div className="w-32 h-20 p-2 bg-neutral-400/15 rounded-xl flex items-center justify-center">
      {/* Device Frame */}
      <div className="w-full h-full bg-neutral-400/40 rounded-lg relative">
        {/* Screen Content */}
        <div className="absolute inset-1 bg-neutral-400/20 rounded" />
      </div>
    </div>
  );
}
