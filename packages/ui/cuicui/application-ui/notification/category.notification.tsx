import { BellDotIcon } from "lucide-react";
import type { CategoryType } from "@/lib/types/component";
import { dynamicIslandNotificationComponent } from "@/cuicui/application-ui/notification/dynamic-island-notification/component.dynamic-island-notification";

export const notificationCategory: CategoryType = {
  slug: "notification",
  name: "Notification",
  description: "Notification components",
  releaseDateCategory: new Date("2024-10-14"),
  icon: BellDotIcon,
  componentList: [dynamicIslandNotificationComponent],
};
