export default function ToggleCategoryPreview() {
  return (
    <div className="flex space-x-4 p-4 bg-neutral-400/15 rounded-xl">
      {/* Toggle Off */}
      <div className="w-10 h-6 bg-neutral-400/40 rounded-full relative">
        <div className="w-4 h-4 bg-neutral-400/80 rounded-full absolute left-1 top-1" />
      </div>
      {/* Toggle On */}
      <div className="w-10 h-6 bg-neutral-400/80 rounded-full relative">
        <div className="w-4 h-4 bg-neutral-400/40 rounded-full absolute right-1 top-1" />
      </div>
    </div>
  );
}
