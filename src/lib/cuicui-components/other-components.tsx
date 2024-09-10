import {
  BringToFrontIcon,
  GripIcon,
  MonitorSmartphoneIcon,
  MousePointerClickIcon,
} from "lucide-react";

import type { CategoryType } from "#/src/lib/types/component";
import DynamicCardsVariant1 from "#/src/ui/cuicui/other/cursors/dynamic-cards/variant1";
import DynamicCardsVariant2 from "#/src/ui/cuicui/other/cursors/dynamic-cards/variant2";
import FollowCursorVariant1 from "#/src/ui/cuicui/other/cursors/follow-cursor/variant1";
import FollowCursorVariant2 from "#/src/ui/cuicui/other/cursors/follow-cursor/variant2";
import { Airpods } from "#/src/ui/cuicui/other/mock-ups/airpods/airpods";
import { AirpodsPro } from "#/src/ui/cuicui/other/mock-ups/airpods/airpods-pro";
import MacbookVariant1 from "#/src/ui/cuicui/other/mock-ups/laptops/variant1";
import { GooglePixelVariant1 } from "#/src/ui/cuicui/other/mock-ups/smartphone/variant1";
import { IPhone14ProVariant2 } from "#/src/ui/cuicui/other/mock-ups/smartphone/variant2";
import { DotsPatternPreview } from "#/src/ui/cuicui/other/patterns/dots-pattern/dots-pattern-preview";
import MovingBandsPreview from "#/src/ui/cuicui/other/patterns/moving-bands/moving-bands-preview";
import BlurAppearVariant1 from "#/src/ui/cuicui/other/transition-wrappers/blur-appear/variant1";

export const otherCategoriesList: CategoryType[] = [
  {
    slug: "cursors",
    name: "Cursors",
    description: "Create cursor effects",
    releaseDateCategory: new Date("2024-07-21"),
    icon: MousePointerClickIcon,
    previewCategory: {
      component: <FollowCursorVariant1 />,
      previewScale: 1,
    },
    componentList: [
      {
        sizePreview: "sm",
        slug: "follow-cursor",
        isResizable: false,
        isIframed: false,
        isChildUsingHeightFull: true,
        title: "Cursor following effect",
        description:
          "A cursor following effect that can be used in any project with any artisitic style",
        variantList: [
          {
            name: "Replace cursor",
            component: <FollowCursorVariant1 />,
            slugPreviewFile: "variant1",
          },
          {
            name: "Keeping cursor",
            component: <FollowCursorVariant2 />,
            slugPreviewFile: "variant1",
          },
        ],
        componentBadges: ["prefer-desktop"],
      },
      {
        sizePreview: "md",
        slug: "dynamic-cards",
        isIframed: false,
        title: "Grid with cursor following border",
        description: "A grid of cards with a cursor following border effect",

        isResizable: false,
        variantList: [
          {
            name: "Gradient background",
            component: <DynamicCardsVariant2 />,
            slugPreviewFile: "variant2",
          },
          {
            name: "Border only",
            component: <DynamicCardsVariant1 />,
            slugPreviewFile: "variant1",
          },
        ],
        componentBadges: ["prefer-desktop"],
      },
    ],
  },
  {
    slug: "mock-ups",
    name: "Mock-ups",
    description:
      "Create mock-ups without images, just with CSS and HTML for better performance, SEO and accessibility & also more micro-interactions",
    releaseDateCategory: new Date("2024-08-14"),
    icon: MonitorSmartphoneIcon,
    previewCategory: {
      component: <IPhone14ProVariant2 />,
      previewScale: 0.2,
    },
    componentList: [
      {
        sizePreview: "lg",
        slug: "smartphone",
        isIframed: true,
        isChildUsingHeightFull: true,
        title: "Smartphone mock-up",
        description:
          "Create a smartphone mock-up with CSS and HTML for better performance, SEO and accessibility & also more micro-interactions",
        variantList: [
          {
            name: "Iphone 14",
            component: <IPhone14ProVariant2 />,
            slugPreviewFile: "variant2",
          },
          {
            name: "Google Pixel",
            component: <GooglePixelVariant1 />,
            slugPreviewFile: "variant1",
          },
        ],
        inspiration: "Devices CSS",
        inspirationLink:
          "https://devicescss.xyz/phones.html#google-pixel-6-pro",
      },
      {
        sizePreview: "lg",
        slug: "laptops",
        isIframed: true,
        isChildUsingHeightFull: true,
        title: "Laptop mock-up",
        description:
          "Create a laptop mock-up with CSS and HTML for better performance",
        variantList: [
          {
            name: "Macbook Pro",
            component: <MacbookVariant1 />,
            slugPreviewFile: "variant1",
          },
        ],
        inspiration: "Devices CSS",
        inspirationLink: "https://devicescss.xyz/laptops.html#macbook-pro",
      },
      {
        sizePreview: "lg",
        slug: "airpods",
        isIframed: true,
        lastUpdatedDateComponent: new Date("2024-09-10"),
        isChildUsingHeightFull: true,
        title: "Airpods mock-up",
        description:
          "Create a airpods mock-up with CSS and HTML for better performance",
        variantList: [
          {
            name: "Airpods Pro",
            component: <AirpodsPro />,
            slugPreviewFile: "airpods-pro",
          },
          {
            name: "Airpods",
            component: <Airpods />,
            slugPreviewFile: "airpods",
          },
        ],
        inspiration: "Spacious74 on Uiverse",
        inspirationLink: "https://uiverse.io/Spacious74/wicked-rat-71",
      },
    ],
  },
  {
    slug: "patterns",
    name: "Patterns",
    description:
      "Create patterns without images, just with CSS and HTML for better performance, SEO and accessibility & also more micro-interactions",
    releaseDateCategory: new Date("2024-08-10"),
    icon: GripIcon,
    previewCategory: {
      component: <MovingBandsPreview />,
      previewScale: 1,
    },
    componentList: [
      {
        sizePreview: "sm",
        slug: "dots-pattern",
        isIframed: false,
        isChildUsingHeightFull: true,
        title: "Simple dots pattern",
        description:
          "Create a simple dots pattern without images, just with CSS and HTML for better performance, SEO and accessibility & also more micro-interactions",
        variantList: [
          {
            name: "Variant 1",
            component: <DotsPatternPreview />,
            slugPreviewFile: "dots-pattern-preview",
            slugComponentFile: "dots-pattern",
          },
        ],
        inspiration: "Magic UI",
        inspirationLink: "https://magicui.design/docs/components/dot-pattern",
      },
      {
        sizePreview: "sm",
        slug: "moving-bands",
        isIframed: false,
        isChildUsingHeightFull: true,
        lastUpdatedDateComponent: new Date("2024-09-10"),
        title: "Moving bands pattern",
        description:
          "Create a moving bands pattern without images, just with CSS and HTML for better performance.",
        variantList: [
          {
            name: "Variant 1",
            component: <MovingBandsPreview />,
            slugComponentFile: "moving-bands",
            slugPreviewFile: "moving-bands-preview",
          },
        ],
        // inspiration: "Magic UI",
        // inspirationLink: "https://magicui.design/docs/components/dot-pattern",
      },
    ],
  },
  {
    slug: "transition-wrappers",
    name: "Transition wrappers",
    description:
      "Create transition wrappers to animate any component without changing your code",
    releaseDateCategory: new Date("2024-07-29"),
    icon: BringToFrontIcon,
    previewCategory: {
      component: <BlurAppearVariant1 />,
      previewScale: 0.75,
    },
    componentList: [
      {
        title: "Blur appear",
        description:
          "A transition wrapper that makes a component appear with a blur effect",
        isIframed: false,
        sizePreview: "sm",
        slug: "blur-appear",
        variantList: [
          {
            name: "Blur appear",
            component: <BlurAppearVariant1 />,
            slugPreviewFile: "variant1",
          },
        ],
        rerenderButton: true,
      },
    ],
  },
];
