import { MousePointerClickIcon } from "lucide-react";
import type { CategoryType } from "@/lib/types/component";
import { cardHoverCursorEffectComponent } from "@/cuicui/other/cursors/dynamic-cards/card-hover-cursor-effect.component";
import { followCursorComponent } from "@/cuicui/other/cursors/follow-cursor/follow-cursor.component";
import FollowCursorWithCursor from "@/cuicui/other/cursors/follow-cursor/with-cursor";

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
