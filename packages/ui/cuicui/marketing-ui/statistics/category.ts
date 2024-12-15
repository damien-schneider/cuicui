import type { CategoryMetaType } from "@/lib/types/component";
import { BarChart2Icon } from "lucide-react";

export const statisticsCategory: CategoryMetaType = {
  name: "Statistics",
  description: "Showcase your product statistics with style",
  releaseDateCategory: new Date("2024-08-11"),
  icon: BarChart2Icon,
};

export default statisticsCategory;
