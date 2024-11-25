import { WifiIcon } from "lucide-react";
import type { SingleComponentCategoryType } from "@/lib/types/component";
import { PreviewUseOnlineStatus } from "@/cuicui/hooks/use-online-status/preview-use-online-status";

export const useOnlineStatusCategory: SingleComponentCategoryType = {
  slug: "use-online-status",
  name: "Use Online Status",
  description:
    "A hook that allows you to monitor the online/offline status of the user's device",
  releaseDateCategory: new Date("2024-09-28"),
  icon: WifiIcon,
  component: {
    sizePreview: "sm",
    variantList: [
      {
        name: "default variant",
        component: <PreviewUseOnlineStatus />,
        slugComponentFile: "use-online-status",
        slugPreviewFile: "preview-use-online-status",
      },
    ],
  },
};
