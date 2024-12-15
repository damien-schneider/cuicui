import { ListEndIcon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const useStepCategory: CategoryMetaType = {
  name: "Use Step",
  description: "Create a step component",
  releaseDateCategory: new Date("2024-09-26"),
  icon: ListEndIcon,
};

export default useStepCategory;
