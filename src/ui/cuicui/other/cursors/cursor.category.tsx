import { MousePointerClickIcon } from "lucide-react";
import type { CategoryType } from "#/src/lib/types/component";
import { cardHoverCursorEffectComponent } from "#/src/ui/cuicui/other/cursors/dynamic-cards/card-hover-cursor-effect.component";
import { followCursorComponent } from "#/src/ui/cuicui/other/cursors/follow-cursor/follow-cursor.component";
import FollowCursorWithCursor from "#/src/ui/cuicui/other/cursors/follow-cursor/with-cursor";

export const cursorCategory: CategoryType = {
  slug: "cursors",
  name: "Cursors",
  description: "Create cursor effects",
  releaseDateCategory: new Date("2024-07-21"),
  icon: MousePointerClickIcon,
  previewCategory: {
    component: <FollowCursorWithCursor />,
    previewScale: 1,
  },
  componentList: [followCursorComponent, cardHoverCursorEffectComponent],
};
