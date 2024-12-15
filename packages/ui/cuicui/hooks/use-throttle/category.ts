import { ViewIcon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const useThrottleCategory: CategoryMetaType = {
  name: "Use Throttle",
  description:
    "A hook that throttles the execution of a function, limiting how often it can be invoked",
  releaseDateCategory: new Date("2024-09-28"),
  icon: ViewIcon,
};

export default useThrottleCategory;
