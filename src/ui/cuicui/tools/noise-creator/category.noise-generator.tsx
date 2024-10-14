import { AudioLinesIcon } from "lucide-react";
import type { PageCategoryType } from "#/src/lib/types/component";
import { NoiseGenerator } from "#/src/ui/cuicui/tools/noise-creator/page.noise-generator";

export const noiseGeneratorCategory: PageCategoryType = {
  name: "Noise Generator",
  slug: "noise-generator",
  icon: AudioLinesIcon,
  description:
    "Generate noise for your projects. You can use it as a background, texture, or any other creative effect.",
  component: <NoiseGenerator />,
};
