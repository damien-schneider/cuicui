import { RulerIcon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const useMeasureCategory: CategoryMetaType = {
  name: "Use Measure",
  description:
    "A hook that allows you to measure the size of an element in your application",
  releaseDateCategory: new Date("2024-10-15"),
  icon: RulerIcon,
};

export default useMeasureCategory;
