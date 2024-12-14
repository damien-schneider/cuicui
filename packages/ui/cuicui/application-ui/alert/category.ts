import type { CategoryMetaType } from "@/lib/types/component";

import { AlertCircleIcon } from "lucide-react";

export const alertCategory: CategoryMetaType = {
  name: "Alert",
  description: "Alert components",
  releaseDateCategory: new Date("2024-08-29"),
  icon: AlertCircleIcon,
};

export default alertCategory;
