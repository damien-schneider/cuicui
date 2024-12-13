import { CodeXmlIcon } from "lucide-react";
import type { SectionType } from "@/lib/types/component";
import { cnCategory } from "@/cuicui/utils/cn/category";
import { sleepCategory } from "@/cuicui/utils/sleep/category";
import { catchErrorCategory } from "@/cuicui/utils/catch-error/category";

export const utilsSection: SectionType = {
  type: "single-component",
  name: "Utils",
  slug: "utils",
  description: "A collection of utility components for your projects.",
  icon: CodeXmlIcon,
  categoriesList: [cnCategory, sleepCategory, catchErrorCategory],
};

export default utilsSection;
