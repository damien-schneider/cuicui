import { CarouselCylindricalVariant1 } from "@/cuicui/marketing-ui/carousels/cylindric-3d-carousel/variant1";
import { SimpleCarouselPreview } from "@/cuicui/marketing-ui/carousels/simple-carousel/simple-carousel-preview";
import type { CategoryType } from "@/lib/types/component";
import { GalleryHorizontalIcon } from "lucide-react";

export const carouselsCategory: CategoryType = {
  slug: "carousels",
  name: "Carousels",
  description: "Showcase your product testimonials with style",
  releaseDateCategory: new Date("2024-08-10"),
  icon: GalleryHorizontalIcon,
  componentList: [
    {
      name: "Simple Carousel",
      description:
        "A simple carousel that allows you to navigate through multiple images or products.",
      sizePreview: "md",
      slug: "simple-carousel",

      variantList: [
        {
          name: "Simple Carousel",
          component: SimpleCarouselPreview,
          slugPreviewFile: "simple-carousel-preview",
          slugComponentFile: "simple-carousel",
        },
      ],
    },
    {
      name: "Cylindric 3D Carousel",

      description:
        "A 3D carousel that rotates in a cylindrical way. It's perfect for showcasing multiple images or products.",
      sizePreview: "md",
      slug: "cylindric-3d-carousel",
      variantList: [
        {
          name: "Cylindrical Carousel",
          component: CarouselCylindricalVariant1,
          slugPreviewFile: "variant1",
        },
      ],
    },
  ],
};

export default carouselsCategory;
