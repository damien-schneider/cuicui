import type { CategoryMetaType } from "@/lib/types/component";
import { ChevronsLeftRightEllipsisIcon } from "lucide-react";

export const Category: CategoryMetaType = {
  name: "Create Error",
  description: "Utilities to create normalized errors accross the application",
  icon: ChevronsLeftRightEllipsisIcon,
  latestUpdateDate: new Date("2024-12-30"),
};

export default Category;
