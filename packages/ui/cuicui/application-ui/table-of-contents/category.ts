import { TableOfContentsIcon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const tableOfContentCategory: CategoryMetaType = {
  name: "Table of Contents",
  description: "Table of contents components",
  releaseDateCategory: new Date("2024-08-28"),
  icon: TableOfContentsIcon,
};

export default tableOfContentCategory;
