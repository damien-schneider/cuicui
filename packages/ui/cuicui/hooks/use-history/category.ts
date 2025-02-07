import type { CategoryMetaType } from "@/lib/types/component";
import { HistoryIcon } from "lucide-react";

export const category: CategoryMetaType = {
  name: "Use History",
  description:
    "A hook to save and manage history with undo and redo functionalities",
  icon: HistoryIcon,
  latestUpdateDate: new Date("2025-02-08"),
};

export default category;
