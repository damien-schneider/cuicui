import { ViewIcon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const useRerenderCategory: CategoryMetaType = {
  name: "Use Rerender",
  description:
    "A hook that throttles the execution of a function, limiting how often it can be invoked",
  releaseDateCategory: new Date("2024-09-28"),
  icon: ViewIcon,
};

export default useRerenderCategory;
