import { MousePointerClickIcon } from "lucide-react";
import type { CategoryType } from "@/lib/types/component";
import { cardHoverCursorEffectComponent } from "@/cuicui/other/cursors/dynamic-cards/component";
import { followCursorComponent } from "@/cuicui/other/cursors/follow-cursor/component";

export const cursorCategory: CategoryType = {
  slug: "cursors",
  name: "Cursors",
  description: "Create cursor effects",
  releaseDateCategory: new Date("2024-07-21"),
  icon: MousePointerClickIcon,
  componentList: [followCursorComponent, cardHoverCursorEffectComponent],
};

export default cursorCategory;
