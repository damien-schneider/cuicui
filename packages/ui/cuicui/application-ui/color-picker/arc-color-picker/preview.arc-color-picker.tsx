"use client";
import { ArcColorPicker } from "@/cuicui/application-ui/color-picker/arc-color-picker/arc-color-picker";
import { useState } from "react";

export default function PreviewArcColorPicker() {
  const [selectedColor, setSelectedColor] = useState("#f6d365");
  const [grainIntensity, setGrainIntensity] = useState(50);

  return (
    <ArcColorPicker
      selectedColor={selectedColor}
      setSelectedColor={setSelectedColor}
      grainIntensity={grainIntensity}
      setGrainIntensity={setGrainIntensity}
    />
  );
}
