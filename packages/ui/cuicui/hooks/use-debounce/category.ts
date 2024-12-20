import { TimerIcon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const useDebounceCategory: CategoryMetaType = {
  name: "Use debounce",
  description: "A hook that allows you to debounce the value of an input",
  latestUpdateDate: new Date("2024-09-16"),
  icon: TimerIcon,
};

export default useDebounceCategory;
