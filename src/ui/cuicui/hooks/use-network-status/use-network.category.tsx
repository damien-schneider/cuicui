import { NetworkIcon } from "lucide-react";
import type { CategoryType } from "#/src/lib/types/component";
import PreviewUseNetworkStatus from "#/src/ui/cuicui/hooks/use-network-status/hook/preview-use-network-status";

export const useNetworkCategory: CategoryType = {
  slug: "use-network-status",
  name: "Use Network Status",
  description: "A hook to get the network status",
  releaseDateCategory: new Date("2024-09-16"),
  icon: NetworkIcon,
  previewCategory: {
    component: <PreviewUseNetworkStatus />,
    previewScale: 1,
  },
  componentList: [
    {
      rerenderButton: true,
      lastUpdatedDateComponent: new Date("2024-09-16"),
      sizePreview: "lg",
      slug: "hook",
      isIframed: false,
      title: "Use Network Status",
      description: "A hook to get the network status",
      variantList: [
        {
          name: "variant 1",
          component: <PreviewUseNetworkStatus />,
          slugComponentFile: "use-network-status",
          slugPreviewFile: "preview-use-network-status",
        },
      ],
    },
  ],
};
