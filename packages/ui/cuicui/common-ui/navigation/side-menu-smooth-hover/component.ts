import PreviewSmoothHoverMenuItem from "@/cuicui/common-ui/navigation/side-menu-smooth-hover/preview";
import type { ComponentType } from "@/lib/types/component";

export const SideMenuSmoothHoverComponent: ComponentType = {
  sizePreview: "sm",
  slug: "side-menu-smooth-hover",
  variantList: [
    {
      name: "Default",
      component: PreviewSmoothHoverMenuItem,
      slugPreviewFile: "preview",
      slugComponentFile: "side-menu-smooth-hover",
    },
  ],
  name: "Side Menu Smooth Hover",
  description:
    "A navigation menu with hover effect handled in javascript to accept smooth transitions.",
};

export default SideMenuSmoothHoverComponent;
