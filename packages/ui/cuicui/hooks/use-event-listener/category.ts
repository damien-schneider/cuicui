import { EarIcon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const useEventListenerCategory: CategoryMetaType = {
  name: "Use Event Listener",
  description:
    "A hook that allows you to manage event listeners on DOM elements",
  releaseDateCategory: new Date("2024-09-28"),
  icon: EarIcon,
};

export default useEventListenerCategory;
