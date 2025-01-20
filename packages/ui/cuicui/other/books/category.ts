import type { CategoryMetaType } from "@/lib/types/component";
import { BookIcon } from "lucide-react";

export const Category: CategoryMetaType = {
  name: "Books",
  description: "Some creative effects to showcase books",
  latestUpdateDate: new Date("2025-01-20"),
  icon: BookIcon,
};

export default Category;
