import { PipetteIcon } from "lucide-react";

export default function ColorPickerCategoryPreview() {
  return (
    <div className="w-fit p-4 bg-neutral-400/15 rounded-xl flex space-x-2 relative">
      {/* Color Swatch 1 */}
      <div className="size-6 bg-neutral-200 rounded-full" />

      {/* Floating Pipette */}
      <PipetteIcon className="size-6 text-neutral-500 absolute top-0 left-1/2 transform -translate-x-10" />

      {/* Color Swatch 2 (Selected) */}
      <div className="size-6 bg-neutral-300 rounded-full flex items-center justify-center border-2 border-neutral-500/80">
        {/* Selected Indicator */}
        <div className="w-2 h-2 bg-neutral-500 rounded-full" />
      </div>

      {/* Color Swatch 3 */}
      <div className="size-6 bg-neutral-400 rounded-full" />

      {/* Color Swatch 4 */}
      <div className="size-6 bg-neutral-500 rounded-full" />

      {/* Color Swatch 5 */}
      <div className="size-6 bg-neutral-600 rounded-full" />
    </div>
  );
}
