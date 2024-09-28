"use client";
import { useComponentSize } from "#/src/ui/cuicui/hooks/use-component-size/use-component-size";
import { useRef } from "react";

export const PreviewUseComponentSize = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const { width, height } = useComponentSize(divRef);

  return (
    <div>
      <div
        ref={divRef}
        style={{
          resize: "both",
          overflow: "auto",
          padding: "20px",
          border: "1px solid #ccc",
          width: "200px",
          height: "200px",
        }}
      >
        Resize me!
      </div>
      <p>
        Width: {width}px, Height: {height}px
      </p>
    </div>
  );
};
