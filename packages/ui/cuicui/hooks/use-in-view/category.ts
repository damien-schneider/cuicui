import { ViewIcon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const useInViewCategory: CategoryMetaType = {
  name: "Use in View",
  description:
    "A hook that allows you to know if an element is in the viewport",
  latestUpdateDate: new Date("2024-08-28"),
  icon: ViewIcon,
};

export default useInViewCategory;
