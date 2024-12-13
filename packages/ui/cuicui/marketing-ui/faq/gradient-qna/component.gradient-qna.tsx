import type { ComponentType } from "@/lib/types/component";
import CustomChevronStyleGradientQnA from "@/cuicui/marketing-ui/faq/gradient-qna/custom-chevron-style.variant";
import DoubleContainerGradientQna from "@/cuicui/marketing-ui/faq/gradient-qna/double-container.variant";
import SimpleContainerGradientQna from "@/cuicui/marketing-ui/faq/gradient-qna/simple-container.variant";

export const gradientQnaComponent: ComponentType = {
  sizePreview: "lg",
  slug: "gradient-qna",
  name: "Gradient Q&A",
  description:
    "A simple marquee component with two variants, horizontal and vertical.",
  variantList: [
    {
      name: "Double Container Q&A",
      component: <DoubleContainerGradientQna />,
      slugPreviewFile: "double-container",
    },
    {
      name: "Simple Container Q&A",
      component: <SimpleContainerGradientQna />,
      slugPreviewFile: "simple-container",
    },
    {
      name: "Custom SVG animation",
      component: <CustomChevronStyleGradientQnA />,
      slugPreviewFile: "custom-chevron-style",
    },
  ],
  componentBadges: ["no-js"],
};
