import { SquareMenuIcon } from "lucide-react";
import type { CategoryType } from "@/lib/types/component";
import { macOsContextMenuComponent } from "@/cuicui/application-ui/context-menu/mac-os-context-menu/component";

export const contextMenuCategory: CategoryType = {
  slug: "context-menu",
  name: "Context Menu",
  description: "Context menu components",
  releaseDateCategory: new Date("2024-11-23"),
  icon: SquareMenuIcon,
  componentList: [macOsContextMenuComponent],
};
