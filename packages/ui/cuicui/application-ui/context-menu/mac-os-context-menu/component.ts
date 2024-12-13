import { PreviewMacOsContextMenu } from "@/cuicui/application-ui/context-menu/mac-os-context-menu/preview.mac-os-context-menu";
import type { ComponentType } from "@/lib/types/component";

export const macOsContextMenuComponent: ComponentType = {
  slug: "mac-os-context-menu",
  name: "Mac OS Context Menu",
  description: "Mac OS Context Menu",
  sizePreview: "sm",
  variantList: [
    {
      name: "Default",
      component: PreviewMacOsContextMenu,
      slugPreviewFile: "preview.mac-os-context-menu",
      slugComponentFile: "mac-os-context-menu",
    },
  ],
};

export default macOsContextMenuComponent;
