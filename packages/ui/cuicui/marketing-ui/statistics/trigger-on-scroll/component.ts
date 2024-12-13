import PreviewTriggerOnScroll from "@/cuicui/marketing-ui/statistics/trigger-on-scroll/preview";
import type { ComponentType } from "@/lib/types/component";

export const triggerOnScrollComponent: ComponentType = {
  sizePreview: "sm",
  slug: "trigger-on-scroll",
  // isIframed: true,
  rerenderButton: true,
  name: "Number trigger on scroll",
  description: "Show numbers that animate when they appear on the screen.",
  variantList: [
    {
      name: "Animated Number",
      component: PreviewTriggerOnScroll,
      slugPreviewFile: "preview",
      slugComponentFile: "trigger-on-scroll",
    },
  ],
};

export default triggerOnScrollComponent;
