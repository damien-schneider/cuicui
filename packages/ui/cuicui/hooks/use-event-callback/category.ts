import { SquareFunctionIcon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const useEventCallbackCategory: CategoryMetaType = {
  name: "Use Event Callback",
  description: "A hook that returns a memoized event callback",
  releaseDateCategory: new Date("2024-09-28"),
  icon: SquareFunctionIcon,
};

export default useEventCallbackCategory;
