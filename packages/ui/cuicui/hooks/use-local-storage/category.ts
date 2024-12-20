import { DatabaseIcon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const useLocalStorageCategory: CategoryMetaType = {
  name: "Use Local Storage",
  description:
    "A hook that allows you to manage and persist state using localStorage",
  latestUpdateDate: new Date("2024-09-28"),
  icon: DatabaseIcon,
};

export default useLocalStorageCategory;
