// CarouselCategoryPreview.tsx
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CarouselCategoryPreview() {
  return (
    <div className="w-2/3 h-full flex flex-col items-center p-2 bg-neutral-400/15 rounded-xl">
      {/* Carousel Slide */}
      <div className="w-full h-full bg-neutral-400/40 rounded-md relative">
        {/* Left Arrow */}
        <ChevronLeft className="absolute left-2 top-1/2 transform -translate-y-1/2 size-5 text-neutral-400 cursor-pointer" />

        {/* Right Arrow */}
        <ChevronRight className="absolute right-2 top-1/2 transform -translate-y-1/2 size-5 text-neutral-400 cursor-pointer" />
      </div>

      {/* Dots */}
      <div className="flex justify-center space-x-2 mt-2">
        <div className="w-2 h-2 bg-neutral-400/30 rounded-full" />
        <div className="w-2 h-2 bg-neutral-400 rounded-full" />
        <div className="w-2 h-2 bg-neutral-400/30 rounded-full" />
      </div>
    </div>
  );
}
