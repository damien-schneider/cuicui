import type { CategoryType } from "#/src/lib/types/component";

import { AlertCircleIcon } from "lucide-react";
import PreviewModernGlassyAlert from "#/src/ui/cuicui/application-ui/alert/modern-glassy-alert/preview-modern-glassy-alert";
import SimpleAlert from "#/src/ui/cuicui/application-ui/alert/simple-alert/simple-alert";

export const alertCategory: CategoryType = {
  slug: "alert",
  name: "Alert",
  description: "Alert components",
  releaseDateCategory: new Date("2024-08-29"),
  icon: AlertCircleIcon,
  previewCategory: {
    component: <SimpleAlert />,
    previewScale: 1,
  },
  componentList: [
    {
      lastUpdatedDateComponent: new Date("2024-08-29"),
      isIframed: true,
      sizePreview: "sm",
      slug: "simple-alert",
      variantList: [
        {
          name: "Default",
          component: <SimpleAlert />,
          slugPreviewFile: "simple-alert",
        },
      ],
      title: "Simple Alert",
      description: "A simple alert component.",
    },
    {
      isIframed: true,
      sizePreview: "sm",
      slug: "modern-glassy-alert",
      lastUpdatedDateComponent: new Date("2024-09-16"),
      variantList: [
        {
          name: "Default",
          component: <PreviewModernGlassyAlert />,
          slugPreviewFile: "preview-modern-glassy-alert",
          slugComponentFile: "modern-glassy-alert",
        },
      ],
      title: "Modern Glassy Alert",
      description: "A modern glassy alert component.",
    },
  ],
};
