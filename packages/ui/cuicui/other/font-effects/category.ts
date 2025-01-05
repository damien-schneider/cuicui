import type { CategoryMetaType } from "@/lib/types/component";
import { CaseSensitiveIcon } from "lucide-react";

export const Category: CategoryMetaType = {
  name: "Font Effects",
  description:
    "An all bunch of creative effects that can be used in any project with any artisitic style",
  latestUpdateDate: new Date("2025-01-05"),
  icon: CaseSensitiveIcon,
};

export default Category;
