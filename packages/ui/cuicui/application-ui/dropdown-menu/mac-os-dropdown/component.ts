import { PreviewMacOSDropdownMenu } from "@/cuicui/application-ui/dropdown-menu/mac-os-dropdown/preview.mac-os-dropdown";
import type { ComponentType } from "@/lib/types/component";

export const macOsDropdownComponent: ComponentType = {
  sizePreview: "sm",
  slug: "mac-os-dropdown",
  variantList: [
    {
      name: "Default",
      component: PreviewMacOSDropdownMenu,
      slugPreviewFile: "preview.mac-os-dropdown",
      slugComponentFile: "mac-os-dropdown",
    },
  ],
  name: "Mac OS Dropdown",
  description: "Mac OS dropdown menu",
};
