import { AppWindowMacIcon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const useWindowSizeCategory: CategoryMetaType = {
  name: "Use Window Size",
  description: "A hook that allows you to track the size of the browser window",
  latestUpdateDate: new Date("2024-08-28"),
  icon: AppWindowMacIcon,
};

export default useWindowSizeCategory;
