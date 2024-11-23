import { PreviewWavyLine } from "@/cuicui/other/creative-effects/wavy-line/preview.wavy-line";
import type { ComponentType } from "@/lib/types/component";

export const WavyLineComponent: ComponentType = {
  slug: "wavy-line",
  name: "Wavy Line",
  description: "A wavy line that follows the mouse movement",
  // Define the component to be lazy loaded
  variantList: [
    {
      name: "Wavy Line",
      component: <PreviewWavyLine />,
      slugComponentFile: "wavy-line",
      slugPreviewFile: "preview.wavy-line",
    },
  ],
};
