import type { ComponentType } from "#/src/lib/types/component";
import { PreviewSlideInOnScroll } from "#/src/ui/cuicui/other/transition-wrappers/slide-in-on-scroll/preview-slide-in-on-scroll";

export const SlideInOnScrollComponent: ComponentType = {
  slug: "slide-in-on-scroll",
  title: "Slide in on scroll",
  description:
    "A transition wrapper that makes a component appear with a slide effect with css only !",
  isIframed: true,
  sizePreview: "md",
  variantList: [
    {
      name: "Slide in on scroll",
      component: <PreviewSlideInOnScroll />,
      slugPreviewFile: "slide-in-on-scroll",
    },
  ],
  // supportedBrowers: ["chromium"],
};
