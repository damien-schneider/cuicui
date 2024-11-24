export default function () {
  return (
    <div className="w-fit p-4 bg-neutral-400/15 rounded-xl">
      {/* Slider Track */}
      <div className="relative w-48 h-2 bg-neutral-400/40 rounded-full">
        {/* Slider Filled Track */}
        <div className="absolute left-0 top-0 h-full w-1/2 bg-neutral-400/80 rounded-full" />
        {/* Slider Thumb */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-neutral-400 rounded-full" />
      </div>
    </div>
  );
}
