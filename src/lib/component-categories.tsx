import type { StaticImageData } from "next/image";
import type { ReactNode } from "react";
import BadgesPreview from "#/src/assets/components-preview/badges.png";
import DynamicSettingsVariant1 from "../app/(components)/application-ui/settings/dynamic-settings/variant1";
import { StepWithStickyColorVariant1 } from "../app/(components)/application-ui/static-steppers/code/variant1";
import ClerkBadgeVariant1 from "../app/(components)/common-ui/badges/clerk-badge/variant1";
import ShinyRotatingBorderButtonVariant1 from "../app/(components)/common-ui/buttons/shiny-rotating-border-button/variant1";
import { VercelNavigationVariant1 } from "../app/(components)/common-ui/navigation/vercel-navigation/variant1";
import { ShinyGradientSkeletonVariant1 } from "../app/(components)/common-ui/skeletons/shiny-gradient/variant1";
import { Variant1FeatureFourImages } from "../app/(components)/marketing-components/features/feature-four-images/variant1";
import ManyOffersVariant1 from "../app/(components)/marketing-components/pricing-tables/many-offers/variant1";
import MarqueeVariant1 from "../app/(components)/marketing-components/testimonials/marquee/variant1";
import FollowCursorVariant1 from "../app/(components)/other/cursors/follow-cursor/variant1";
import BlurAppearVariant1 from "../app/(components)/other/transition-wrappers/blur-appear/variant1";
import type { CategoryItem, PreviewComponent } from "./types/component";

export const componentCategories: {
  name: string;
  slug: string | null;
  items: CategoryItem[];
}[] = [
  {
    name: "Info",
    slug: null,
    items: [
      {
        name: "Why another library?",
        slug: "about",
        description:
          "CuiCui is a collection of components that I use in my projects. I wanted to share them with the world.",
      },
      {
        name: "Getting Started",
        slug: "getting-started",
        description:
          "Learn how to use CuiCui in your project. It's easy and simple.",
      },
      {
        name: "Contribute | Roadmap",
        href: "https://cuicui.featurebase.app/",
        slug: "contribute",
        description:
          "Help us make CuiCui better. Contribute to the project on GitHub. We have a roadmap for the future.",
      },
      {
        name: "Changelog",
        href: "https://cuicui.featurebase.app/changelog",
        slug: "changelog",
        description: "See the latest changes in CuiCui.",
      },
    ],
  },

  {
    name: "Common UI",
    slug: "common-ui",
    items: [
      {
        name: "Badges",
        slug: "badges",
        description: "Create simple badges with different styles",
        releaseDate: new Date("2024-06-29"),
        preview: {
          component: <ClerkBadgeVariant1 />,
          previewScale: 2,
        },
      },
      {
        name: "Navigation",
        slug: "navigation",
        description: "Create simple navigation components",
        releaseDate: new Date("2024-06-17"),
        preview: {
          component: <VercelNavigationVariant1 />,
          previewScale: 0.75,
        },
      },
      {
        name: "Buttons",
        slug: "buttons",
        description: "Create simple buttons with different styles",
        releaseDate: new Date("2024-07-29"),
        preview: {
          component: <ShinyRotatingBorderButtonVariant1 />,
          previewScale: 1.5,
        },
      },
      {
        name: "Skeletons",
        slug: "skeletons",
        description: "Create simple skeletons for loading states",
        releaseDate: new Date("2024-08-01"),

        preview: {
          component: <ShinyGradientSkeletonVariant1 />,
          previewScale: 0.75,
        },
      },
      {
        name: "Avatars",
        slug: "avatars",
        description: "Create simple avatars with different styles",
        // releaseDate: new Date("2024-08-01"),
        comingSoon: true,
      },
    ],
  },
  {
    name: "Marketing components",
    slug: "marketing-components",
    items: [
      {
        name: "Features",
        slug: "features",
        description: "Showcase your product features with style",
        releaseDate: new Date("2024-06-17"),

        preview: {
          component: <Variant1FeatureFourImages />,
          previewScale: 0.3,
        },
      },
      {
        name: "Pricing Tables",
        slug: "pricing-tables",
        description: "Showcase your product pricing with style",
        releaseDate: new Date("2024-08-01"),

        preview: {
          component: <ManyOffersVariant1 />,
          previewScale: 0.75,
        },
      },
      {
        name: "Testimonials",
        slug: "testimonials",
        description: "Showcase your product testimonials with style",
        releaseDate: new Date("2024-07-17"),

        preview: {
          component: <MarqueeVariant1 />,
          previewScale: 0.75,
        },
      },
    ],
  },
  {
    name: "Application UI",
    slug: "application-ui",
    items: [
      {
        name: "Settings",
        slug: "settings",
        description: "Create simple settings components",
        releaseDate: new Date("2024-06-30"),

        preview: {
          component: <DynamicSettingsVariant1 />,
          previewScale: 1.25,
        },
      },
      {
        name: "Static Steppers",
        slug: "static-steppers",
        description: "Create simple steppers with different styles",
        releaseDate: new Date("2024-08-01"),
        preview: {
          component: <StepWithStickyColorVariant1 />,
          previewScale: 0.75,
        },
      },
      {
        name: "Kbd",
        slug: "kbd",
        description: "Create simple accessible kbd shortcut",
        comingSoon: true,
      },
    ],
  },
  {
    name: "Other",
    slug: "other",
    items: [
      {
        name: "Cursors",
        slug: "cursors",
        description: "Create cursor effects",
        releaseDate: new Date("2024-07-21"),
        preview: {
          component: <FollowCursorVariant1 />,
          previewScale: 1.5,
        },
      },
      {
        name: "Transition wrappers",
        slug: "transition-wrappers",
        description:
          "Create transition wrappers to animate any without changing your code components",
        releaseDate: new Date("2024-07-29"),
        preview: {
          component: <BlurAppearVariant1 />,
          previewScale: 0.75,
        },
      },
    ],
  },
  {
    name: "Hooks",
    slug: "hooks",
    items: [
      {
        name: "Picture in Picture",
        slug: "picture-in-picture",
        description: "Create a picture in picture mode for your videos",
        comingSoon: true,
      },
    ],
  },
];
