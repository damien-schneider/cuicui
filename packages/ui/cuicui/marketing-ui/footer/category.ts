import type { CategoryMetaType } from "@/lib/types/component";
import { PanelBottomIcon } from "lucide-react";

export const footerCategory: CategoryMetaType = {
  name: "Footer",
  description:
    "Customize the footer section of your website with various styles and components.",
  latestUpdateDate: new Date("2024-11-22"),
  icon: PanelBottomIcon, // Updated icon to represent footer
};

export default footerCategory;
