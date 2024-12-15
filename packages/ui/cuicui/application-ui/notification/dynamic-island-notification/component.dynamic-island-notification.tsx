import type { ComponentType } from "@/lib/types/component";
import { PreviewDynamicIslandNotification } from "@/cuicui/application-ui/notification/dynamic-island-notification/dynamic-island-notification.variant";

export const dynamicIslandNotificationComponent: ComponentType = {
  sizePreview: "md",
  slug: "dynamic-island-notification",
  variantList: [
    {
      name: "Dynamic Island Notification",
      component: <PreviewDynamicIslandNotification />,
      slugPreviewFile: "preview.dynamic-island-notification",
      slugComponentFile: "dynamic-island-notification",
    },
  ],
  name: "Dynamic Island Notification",
  description:
    "Notification that appears from the bottom right corner of the screen.",
};
