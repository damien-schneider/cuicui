"use client";
import { useState } from "react";
import { useEventListener } from "#/src/ui/cuicui/hooks/use-event-listener/use-event-listener";
export const PreviewUseEventListener = () => {
  // Initialize state with current window dimensions
  if (typeof window === "undefined") {
    return;
  }
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Handler function to update state on resize
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  // Use the custom useEventListener hook to listen for 'resize' events on the window
  useEventListener("resize", handleResize);

  return (
    <div>
      <h2>Window Size Demo</h2>
      <div>
        <p>Width: {windowSize.width}px</p>
        <p>Height: {windowSize.height}px</p>
      </div>
    </div>
  );
};
