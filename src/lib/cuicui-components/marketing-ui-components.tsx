import {
  BarChart2Icon,
  BookOpenTextIcon,
  DollarSignIcon,
  GalleryHorizontalIcon,
  SparkleIcon,
} from "lucide-react";

import PricingPreviewImage from "#/src/assets/components-preview/pricing.png";
import type { CategoryType } from "#/src/lib/types/component";
import { CarouselCylindricalVariant1 } from "#/src/ui/cuicui/marketing-ui/carousels/cylindric-3d-carousel/variant1";
import { SimpleCarouselPreview } from "#/src/ui/cuicui/marketing-ui/carousels/simple-carousel/simple-carousel-preview";
import { AnimatedCardVariant1 } from "#/src/ui/cuicui/marketing-ui/features/animated-cards/variant1";
import { Variant1FeatureFourImages } from "#/src/ui/cuicui/marketing-ui/features/feature-four-images/variant1";
import { Variant2FeatureFourImages } from "#/src/ui/cuicui/marketing-ui/features/feature-four-images/variant2";
import ManyOffersVariant1 from "#/src/ui/cuicui/marketing-ui/pricing-tables/many-offers/variant1";
import AnimatedCounterPreview from "#/src/ui/cuicui/marketing-ui/statistics/animated-counter/animated-counter-preview";
import { AnimatedNumberVariant1 } from "#/src/ui/cuicui/marketing-ui/statistics/animated-on-scroll/variant1";
import IncreaseToValueVariant1 from "#/src/ui/cuicui/marketing-ui/statistics/increase-to-value/variant1";
import GradientQnAVariant1 from "#/src/ui/cuicui/marketing-ui/testimonials/gradiant-qna/variant1";
import GradientQnAVariant2 from "#/src/ui/cuicui/marketing-ui/testimonials/gradiant-qna/variant2";
import MarqueeVariant1 from "#/src/ui/cuicui/marketing-ui/testimonials/marquee/variant1";
import MarqueeVariant2 from "#/src/ui/cuicui/marketing-ui/testimonials/marquee/variant2";
import { TestimonialsVariant1 } from "#/src/ui/cuicui/marketing-ui/testimonials/testimonials-component/variant1";

export const marketingUIComponentList: CategoryType[] = [
  {
    slug: "carousels",
    name: "Carousels",
    description: "Showcase your product testimonials with style",
    releaseDateCategory: new Date("2024-08-10"),
    icon: GalleryHorizontalIcon,
    previewCategory: {
      component: <SimpleCarouselPreview />,
      previewScale: 0.5,
    },
    componentList: [
      {
        title: "Simple Carousel",
        description:
          "A simple carousel that allows you to navigate through multiple images or products.",
        sizePreview: "md",
        slug: "simple-carousel",
        lastUpdatedDateComponent: new Date("2024-09-10"),
        isIframed: false,
        variantList: [
          {
            name: "Simple Carousel",
            component: <SimpleCarouselPreview />,
            slugPreviewFile: "simple-carousel-preview",
            slugComponentFile: "simple-carousel",
          },
        ],
      },
      {
        title: "Cylindric 3D Carousel",
        description:
          "A 3D carousel that rotates in a cylindrical way. It's perfect for showcasing multiple images or products.",
        sizePreview: "md",
        slug: "cylindric-3d-carousel",
        variantList: [
          {
            name: "Cylindrical Carousel",
            component: <CarouselCylindricalVariant1 />,
            slugPreviewFile: "variant1",
          },
        ],
      },
    ],
  },
  {
    slug: "features",
    name: "Features",
    description: "Showcase your product features with style",
    releaseDateCategory: new Date("2024-06-17"),
    icon: SparkleIcon,
    previewCategory: {
      component: <AnimatedCardVariant1 />,
      previewScale: 0.8,
    },
    componentList: [
      {
        title: "Feature Four Images",
        description:
          "An auto-scrolling feature section with four images and text. It could be also used with videos or other content. Perfect to shocase in details multiple features of a product or service.",
        sizePreview: "md",
        slug: "feature-four-images",
        isIframed: true,
        variantList: [
          {
            name: "Sober colors",
            slugPreviewFile: "variant1",
            component: <Variant1FeatureFourImages />,
          },
          {
            name: "Less animations with colors",
            slugPreviewFile: "variant2",
            component: <Variant2FeatureFourImages />,
          },
        ],
      },
      {
        title: "Simple feature cards",
        description:
          "Simple feature cards with icons, text, and buttons. Perfect for micro-interactions and lists of features.",
        sizePreview: "sm",
        slug: "animated-cards",
        inspiration: "Inspiration from UI Labs",
        inspirationLink: "https://www.uilabs.dev/",
        variantList: [
          {
            name: "Simple Feature Cards",
            component: <AnimatedCardVariant1 />,
            slugPreviewFile: "variant1",
          },
        ],
      },
    ],
  },
  {
    slug: "pricing-tables",
    name: "Pricing Tables",
    description: "Showcase your product pricing with style",
    releaseDateCategory: new Date("2024-08-01"),
    icon: DollarSignIcon,
    previewCategory: {
      component: <ManyOffersVariant1 />,
      previewImage: PricingPreviewImage,
      previewScale: 0.2,
    },
    componentList: [
      {
        sizePreview: "lg",
        slug: "many-offers",
        title: "Pricing with many offers",
        description: "A pricing table with a lot of offers",
        inspiration: "Artlist",
        inspirationLink: "https://artlist.io/pricing",
        isIframed: true,
        variantList: [
          {
            name: "Many Offers Table",
            component: <ManyOffersVariant1 />,
            slugPreviewFile: "variant1",
          },
        ],
      },
    ],
  },
  {
    slug: "statistics",
    name: "Statistics",
    description: "Showcase your product statistics with style",
    releaseDateCategory: new Date("2024-08-11"),
    icon: BarChart2Icon,
    previewCategory: {
      component: <AnimatedNumberVariant1 />,
      previewScale: 0.5,
    },
    componentList: [
      {
        sizePreview: "sm",
        slug: "animated-on-scroll",
        isIframed: true,
        rerenderButton: true,
        title: "Animated numbers",
        description:
          "Show numbers that animate when they appear on the screen.",
        variantList: [
          {
            name: "Animated Number",
            component: <AnimatedNumberVariant1 />,
            slugPreviewFile: "variant1",
          },
        ],
      },
      {
        sizePreview: "sm",
        slug: "increase-to-value",
        rerenderButton: true,
        title: "Increase to value",
        description:
          "Show numbers that animate when they appear on the screen.",
        variantList: [
          {
            name: "Increase To Value",
            component: <IncreaseToValueVariant1 />,
            slugPreviewFile: "variant1",
          },
        ],
      },
      {
        sizePreview: "sm",
        slug: "animated-counter",
        rerenderButton: true,
        title: "Animated Counter",
        description: "Show numbers that animate automatically when updated.",
        lastUpdatedDateComponent: new Date("2024-09-10"),
        variantList: [
          {
            name: "Increase To Value",
            component: <AnimatedCounterPreview />,
            slugPreviewFile: "animated-counter-preview",
            slugComponentFile: "animated-counter",
          },
        ],
        inspiration: "Build UI",
        inspirationLink: "https://buildui.com/recipes/animated-counter",
      },
    ],
  },
  {
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
        sizePreview: "md",
        slug: "testimonials-component",
        title: "Testimonials",
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
        title: "Marquee",
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
      {
        sizePreview: "lg",
        slug: "gradiant-qna",
        title: "Gradient Q&A",
        description:
          "A simple marquee component with two variants, horizontal and vertical.",
        variantList: [
          {
            name: "Double Container Q&A",
            component: <GradientQnAVariant1 />,
            slugPreviewFile: "variant1",
          },
          {
            name: "Simple Container Q&A",
            component: <GradientQnAVariant2 />,
            slugPreviewFile: "variant2",
          },
        ],
        componentBadges: ["no-js"],
      },
    ],
  },
];
