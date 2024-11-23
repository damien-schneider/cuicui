import { gradientQnaComponent } from "@/cuicui/marketing-ui/faq/gradient-qna/component.gradient-qna";
import MarqueeVariant1 from "@/cuicui/marketing-ui/testimonials/marquee/variant1";
import MarqueeVariant2 from "@/cuicui/marketing-ui/testimonials/marquee/variant2";
import { TestimonialsVariant1 } from "@/cuicui/marketing-ui/testimonials/testimonials-component/variant1";
import type { CategoryType } from "@/lib/types/component";
import { BookOpenTextIcon } from "lucide-react";

export const testimonialsCategory: CategoryType = {
  slug: "testimonials",
  name: "Testimonials",
  description: "Showcase your product testimonials with style",
  releaseDateCategory: new Date("2024-07-17"),
  icon: BookOpenTextIcon,
  previewCategory: {
    component: <MarqueeVariant1 />,
    previewScale: 0.75,
  },
  componentList: [
    {
      isResizable: true,

      sizePreview: "md",
      slug: "testimonials-component",
      name: "Testimonials",
      description: "A simple testimonials component with a slider on click",
      variantList: [
        {
          name: "Testimonials Slider",
          slugPreviewFile: "variant1",
          component: <TestimonialsVariant1 />,
        },
      ],
    },
    {
      sizePreview: "sm",
      slug: "marquee",
      name: "Marquee",
      description:
        "A simple marquee component with two variants, horizontal and vertical.",
      variantList: [
        {
          name: "Horizontal Marquee",
          component: <MarqueeVariant1 />,
          slugPreviewFile: "variant1",
        },
        {
          name: "Vertical Marquee",
          component: <MarqueeVariant2 />,
          slugPreviewFile: "variant2",
        },
      ],
    },
  ],
};
