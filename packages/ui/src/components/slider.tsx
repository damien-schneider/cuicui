"use client";

import * as SliderPrimitive from "@radix-ui/react-slider";
import * as React from "react";

import { cn } from "../utils/cn";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
    classNameRange?: string;
    classNameTrack?: string;
    classNameThumb?: string;
    orientation?: "horizontal" | "vertical";
  }
>(
  (
    {
      className,
      classNameRange,
      classNameThumb,
      classNameTrack,
      orientation = "horizontal",
      ...props
    },
    ref,
  ) => (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        orientation === "vertical" ? "h-full" : "w-full",
        "relative flex touch-none justify-center select-none items-center",
        className,
      )}
      orientation={orientation}
      {...props}
    >
      <SliderPrimitive.Track
        className={cn(
          orientation === "vertical" ? "w-2 h-full" : "w-full h-2",
          "relative overflow-hidden rounded-full grow bg-secondary",
          classNameTrack,
        )}
      >
        <SliderPrimitive.Range
          className={cn(
            orientation === "vertical" ? " w-full" : "h-full",
            "absolute bg-primary",
            classNameRange,
          )}
        />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className={cn(
          "block w-5 h-5 transition-colors border-2 rounded-full border-primary bg-background ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          classNameThumb,
        )}
      />
    </SliderPrimitive.Root>
  ),
);
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
