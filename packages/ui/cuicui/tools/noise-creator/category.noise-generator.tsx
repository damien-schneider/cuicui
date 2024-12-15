import { AudioLinesIcon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const noiseGeneratorCategory: CategoryMetaType = {
  releaseDateCategory: new Date("2024-09-28"),
  name: "Noise Generator",
  icon: AudioLinesIcon,
  description:
    "Generate noise for your projects. You can use it as a background, texture, or any other creative effect.",
  // component: <NoiseGenerator />,
};
