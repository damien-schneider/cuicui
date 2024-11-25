import { LocateFixedIcon } from "lucide-react";
import type { SingleComponentCategoryType } from "@/lib/types/component";
import { PreviewUseLocation } from "@/cuicui/hooks/use-location/preview-use-location";

export const useLocationCategory: SingleComponentCategoryType = {
  slug: "use-location",
  name: "Use Location",
  description:
    "A hook that allows you to access and manage the current location in your application",
  releaseDateCategory: new Date("2024-09-28"),
  icon: LocateFixedIcon,
  component: {
    isResizable: true,

    sizePreview: "xl",
    variantList: [
      {
        name: "variant 1",
        component: <PreviewUseLocation />,
        slugComponentFile: "use-location",
        slugPreviewFile: "preview-use-location",
      },
    ],
  },
};
