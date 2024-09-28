import { BatteryCharging } from "lucide-react";
import type { SingleComponentCategoryType } from "#/src/lib/types/component";
import { PreviewUseBattery } from "#/src/ui/cuicui/hooks/use-battery/preview-use-battery";

export const useBatteryCategory: SingleComponentCategoryType = {
  slug: "use-battery",
  name: "Use Battery",
  description: "A hook to get battery informations",
  releaseDateCategory: new Date("2024-09-16"),
  icon: BatteryCharging,
  previewCategory: {
    component: <PreviewUseBattery />,
    previewScale: 1,
  },
  component: {
    rerenderButton: true,
    lastUpdatedDateComponent: new Date("2024-09-16"),
    sizePreview: "lg",
    isIframed: false,
    variantList: [
      {
        name: "variant 1",
        component: <PreviewUseBattery />,
        slugComponentFile: "use-battery",
        slugPreviewFile: "preview-use-battery",
      },
    ],
  },
};
