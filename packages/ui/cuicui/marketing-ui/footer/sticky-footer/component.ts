import type { ComponentType } from "@/lib/types/component";
import { PreviewStickyFooter } from "@/cuicui/marketing-ui/footer/sticky-footer/preview.sticky-footer";

export const footerComponent: ComponentType = {
  sizePreview: "md",
  slug: "sticky-footer",
  name: "Sticky Footer",
  description: "A sticky footer that stays at the bottom of the page.",
  isIframed: true,
  variantList: [
    {
      name: "Fixed positionned",
      component: PreviewStickyFooter,
      slugPreviewFile: "preview.sticky-footer",
    },
  ],
};

export default footerComponent;
