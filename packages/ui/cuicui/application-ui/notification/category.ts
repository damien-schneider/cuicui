import { BellDotIcon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const notificationCategory: CategoryMetaType = {
  name: "Notification",
  description: "Notification components",
  releaseDateCategory: new Date("2024-10-14"),
  icon: BellDotIcon,
};

export default notificationCategory;
