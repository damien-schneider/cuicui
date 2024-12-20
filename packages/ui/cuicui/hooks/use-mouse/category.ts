import { MousePointer2Icon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const useMouseCategory: CategoryMetaType = {
  name: "Use Mouse",
  icon: MousePointer2Icon,
  latestUpdateDate: new Date("2024-09-24"),
  description: "A simple hook to get the mouse position.",
};

export default useMouseCategory;
