import { LocateFixedIcon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const useLocationCategory: CategoryMetaType = {
  name: "Use Location",
  description:
    "A hook that allows you to access and manage the current location in your application",
  latestUpdateDate: new Date("2024-09-28"),
  icon: LocateFixedIcon,
};

export default useLocationCategory;
