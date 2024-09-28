import { Globe2Icon } from "lucide-react";
import type { SingleComponentCategoryType } from "#/src/lib/types/component";
import { PreviewUseGeolocation } from "#/src/ui/cuicui/hooks/use-geolocation/preview-use-geolocation";
export const useGeoLocationCategory: SingleComponentCategoryType = {
  slug: "use-geolocation",
  name: "Use GeoLocation",
  description:
    "A hook that allows you to access and manage the user's geolocation data",
  releaseDateCategory: new Date("2024-09-28"),
  icon: Globe2Icon,
  previewCategory: {
    component: <PreviewUseGeolocation />,
    previewScale: 0.8,
  },
  component: {
    lastUpdatedDateComponent: new Date("2024-09-28"),
    sizePreview: "sm",
    isIframed: false,
    variantList: [
      {
        name: "variant 1",
        component: <PreviewUseGeolocation />,
        slugComponentFile: "use-geolocation",
        slugPreviewFile: "preview-use-geolocation",
      },
    ],
  },
};
