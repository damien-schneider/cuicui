import type { ComponentType } from "#/src/lib/types/component";
import { PreviewDynamicIslandNotification } from "#/src/ui/cuicui/application-ui/notification/dynamic-island-notification/preview.dynamic-island-notification";

export const dynamicIslandNotificationComponent: ComponentType = {
  lastUpdatedDateComponent: new Date("2024-10-14"),
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
