import { Globe2Icon } from "lucide-react";
import type { SingleComponentCategoryType } from "@/lib/types/component";
import { PreviewUseGeolocation } from "@/cuicui/hooks/use-geolocation/preview-use-geolocation";
export const useGeoLocationCategory: SingleComponentCategoryType = {
  slug: "use-geolocation",
  name: "Use GeoLocation",
  description:
    "A hook that allows you to access and manage the user's geolocation data",
  releaseDateCategory: new Date("2024-09-28"),
  icon: Globe2Icon,
  component: {
    sizePreview: "sm",

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
