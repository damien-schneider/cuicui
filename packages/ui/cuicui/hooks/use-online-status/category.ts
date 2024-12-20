import { WifiIcon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const useOnlineStatusCategory: CategoryMetaType = {
  name: "Use Online Status",
  description:
    "A hook that allows you to monitor the online/offline status of the user's device",
  latestUpdateDate: new Date("2024-09-28"),
  icon: WifiIcon,
};

export default useOnlineStatusCategory;
