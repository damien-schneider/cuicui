import MarqueeVariant1 from "@/cuicui/marketing-ui/testimonials/marquee/horizontal.variant";
import MarqueeVariant2 from "@/cuicui/marketing-ui/testimonials/marquee/vertical.variant";
import { TestimonialsVariant1 } from "@/cuicui/marketing-ui/testimonials/testimonials-component/default.variant";
import type { CategoryType } from "@/lib/types/component";
import { BookOpenTextIcon } from "lucide-react";

export const testimonialsCategory: CategoryType = {
  slug: "testimonials",
  name: "Testimonials",
  description: "Showcase your product testimonials with style",
  releaseDateCategory: new Date("2024-07-17"),
  icon: BookOpenTextIcon,

  componentList: [
    {
      sizePreview: "md",
      slug: "testimonials-component",
      name: "Testimonials",
      description: "A simple testimonials component with a slider on click",
      variantList: [
        {
          name: "Testimonials Slider",
          slugPreviewFile: "variant1",
          component: TestimonialsVariant1,
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
          component: MarqueeVariant1,
          slugPreviewFile: "variant1",
        },
        {
          name: "Vertical Marquee",
          component: MarqueeVariant2,
          slugPreviewFile: "variant2",
        },
      ],
    },
  ],
};

export default testimonialsCategory;
