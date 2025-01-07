"use client";
import { useRef } from "react";

import { cn } from "@/cuicui/utils/cn";
import { VariableFontCursorProximity } from "@/cuicui/other/font-effects/variable-font-cursor/variable-font-proximity";

export function PreviewVariableFontCursor() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="dark:text-neutral-50 text-neutral-700 *:block"
      ref={containerRef}
    >
      <VariableFontCursorProximity
        className={cn("text-2xl md:text-3xl lg:text-4xl")}
        radiusZoomingZone={200}
        containerRef={containerRef}
      >
        This is
      </VariableFontCursorProximity>
      <VariableFontCursorProximity
        className={cn("text-3xl md:text-4xl lg:text-5xl")}
        radiusZoomingZone={200}
        containerRef={containerRef}
      >
        inspired by
      </VariableFontCursorProximity>
      <VariableFontCursorProximity
        className={cn("text-4xl md:text-5xl lg:text-6xl")}
        radiusZoomingZone={200}
        containerRef={containerRef}
      >
        Fancy components
      </VariableFontCursorProximity>
    </div>
  );
}

export default PreviewVariableFontCursor;
