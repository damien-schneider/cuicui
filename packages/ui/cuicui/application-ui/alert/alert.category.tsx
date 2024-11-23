import type { CategoryType } from "@/lib/types/component";

import { AlertCircleIcon } from "lucide-react";
import PreviewModernGlassyAlert from "@/cuicui/application-ui/alert/modern-glassy-alert/preview-modern-glassy-alert";
import SimpleAlert from "@/cuicui/application-ui/alert/simple-alert/simple-alert";

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
      name: "Simple Alert",
      description: "A simple alert component.",
    },
    {
      isIframed: true,
      sizePreview: "sm",
      slug: "modern-glassy-alert",
      variantList: [
        {
          name: "Default",
          component: <PreviewModernGlassyAlert />,
          slugPreviewFile: "preview-modern-glassy-alert",
          slugComponentFile: "modern-glassy-alert",
        },
      ],
      name: "Modern Glassy Alert",
      description: "A modern glassy alert component.",
    },
  ],
};
