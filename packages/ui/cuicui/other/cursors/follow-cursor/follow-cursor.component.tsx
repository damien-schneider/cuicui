import type { ComponentType } from "@/lib/types/component";
import FollowCursorHideCursor from "@/cuicui/other/cursors/follow-cursor/replace-cursor";
import FollowCursorWithCursor from "@/cuicui/other/cursors/follow-cursor/with-cursor";

export const followCursorComponent: ComponentType = {
  sizePreview: "sm",
  slug: "follow-cursor",
  isResizable: false,

  name: "Cursor following effect",
  description:
    "A cursor following effect that can be used in any project with any artisitic style",
  variantList: [
    {
      name: "Replace cursor",
      component: <FollowCursorHideCursor />,
      slugPreviewFile: "replace-cursor",
    },
    {
      name: "Keeping cursor",
      component: <FollowCursorWithCursor />,
      slugPreviewFile: "with-cursor",
    },
  ],
  componentBadges: ["prefer-desktop"],
};
