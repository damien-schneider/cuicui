import {
  BoxSelectIcon,
  CheckSquare2Icon,
  CircleUserRoundIcon,
  CreditCard,
  LoaderIcon,
  MenuIcon,
  QuoteIcon,
  SquareArrowRightIcon,
  TagIcon,
  TextCursorInputIcon,
} from "lucide-react";
import type { CategoryType } from "#/src/lib/types/component";
import AdvancedBadgesVariant1 from "#/src/ui/cuicui/common-ui/badges/advanced-badges/variant1";
import ClerkBadgeVariant1 from "#/src/ui/cuicui/common-ui/badges/clerk-badge/variant1";
import { BadgeSimpleVariantAmber } from "#/src/ui/cuicui/common-ui/badges/modern-simple-badges/variant1";
import { BadgeSimpleVariantRed } from "#/src/ui/cuicui/common-ui/badges/modern-simple-badges/variant2";
import ModernSimpleQuoteVariant1 from "#/src/ui/cuicui/common-ui/blockquotes/modern-simple-quote/variant1";
import BeforeEffectButtonVariant1 from "#/src/ui/cuicui/common-ui/buttons/before-effect-button/variant1";
import BeforeEffectButtonVariant2 from "#/src/ui/cuicui/common-ui/buttons/before-effect-button/variant2";
import GrowingButtonVariant1 from "#/src/ui/cuicui/common-ui/buttons/growing-button/variant1";
import ModernAnimatedButtonVariant1 from "#/src/ui/cuicui/common-ui/buttons/modern-animated-button/variant1";
import ShinyRotatingBorderButtonVariant1 from "#/src/ui/cuicui/common-ui/buttons/shiny-rotating-border-button/variant1";
import DynamicSquareBackgroundPreview from "#/src/ui/cuicui/common-ui/cards/dynamic-square-background/dynamic-square-background-preview";
import { ModernInnerShadowCardVariant1 } from "#/src/ui/cuicui/common-ui/cards/modern-inner-shadow/variant1";
import NotificationCardPreview from "#/src/ui/cuicui/common-ui/cards/notification-card/notification-card-preview";
import SimpleCheckboxPreview from "#/src/ui/cuicui/common-ui/checkboxes/simple-checkbox/simple-checkbox-preview";
import FileDropzone from "#/src/ui/cuicui/common-ui/inputs/droppable-file/variant1";

import NineDotGridRandom from "#/src/ui/cuicui/common-ui/loaders/three-dot-simple-loader/nine-dot-grid-random";
import ThreeDotLoaderGrowing from "#/src/ui/cuicui/common-ui/loaders/three-dot-simple-loader/three-dot-loader-growing";
import { ThreeDotSimpleLoader } from "#/src/ui/cuicui/common-ui/loaders/three-dot-simple-loader/three-dot-simple-loader";
import { Dock } from "#/src/ui/cuicui/common-ui/navigation/mac-dock/variant1";
import { VercelNavigationVariant1 } from "#/src/ui/cuicui/common-ui/navigation/vercel-navigation/variant1";
import { VercelNavigationVariant2 } from "#/src/ui/cuicui/common-ui/navigation/vercel-navigation/variant2";
import { ClassicPulseVariant1 } from "#/src/ui/cuicui/common-ui/skeletons/classic-pulse/variant1";
import { ShinyGradientSkeletonVariant1 } from "#/src/ui/cuicui/common-ui/skeletons/shiny-gradient/variant1";
import { ShinyGradientSkeletonVariant2 } from "#/src/ui/cuicui/common-ui/skeletons/shiny-gradient/variant2";

export const commonUICategoriesList: CategoryType[] = [
  {
    slug: "avatars",
    name: "Avatars",
    description: "Create simple avatars with different styles",
    comingSoonCategory: true,
    icon: CircleUserRoundIcon,
    componentList: null,
  },
  {
    slug: "badges",
    name: "Badges",
    description: "Badges with various styles and purposes",
    releaseDateCategory: new Date("2024-06-29"),
    icon: TagIcon,
    previewCategory: {
      component: <ClerkBadgeVariant1 />,
      previewScale: 2,
    },
    componentList: [
      {
        sizePreview: "xs",
        slug: "modern-simple-badges",
        variantList: [
          {
            name: "Amber",
            component: <BadgeSimpleVariantAmber />,
            slugPreviewFile: "variant1",
          },
          {
            name: "Red",
            component: <BadgeSimpleVariantRed />,
            slugPreviewFile: "variant2",
          },
        ],
        title: "Badge",
        description:
          "Simple modern badge that can be used in any project with any artistic style.",
      },
      {
        sizePreview: "xs",
        slug: "clerk-badge",
        variantList: [
          {
            name: "default",
            component: <ClerkBadgeVariant1 />,
            slugPreviewFile: "variant1",
          },
        ],
        title: "Clerk Badge",
        description:
          "Simple modern badge that can be used in any project with any artistic style.",
        inspiration: "Clerk",
        inspirationLink: "https://clerk.com/docs",
      },
      {
        sizePreview: "xs",
        slug: "advanced-badges",
        variantList: [
          {
            name: "variant1",
            component: <AdvancedBadgesVariant1 />,
            slugPreviewFile: "variant1",
          },
        ],
        title: "Advanced Badges",
        description:
          "Advanced badges that can be used in any project with any artistic style.",
      },
    ],
  },
  {
    slug: "blockquotes",
    name: "Blockquotes",
    description: "Blockquotes with different styles",
    releaseDateCategory: new Date("2024-08-01"),
    icon: QuoteIcon,
    previewCategory: {
      component: <ModernSimpleQuoteVariant1 />,
      previewScale: 0.75,
    },
    componentList: [
      {
        sizePreview: "sm",
        slug: "modern-simple-quote",
        variantList: [
          {
            name: "On hover effect",
            component: <ModernSimpleQuoteVariant1 />,
            slugPreviewFile: "variant1",
          },
        ],
        title: "Simple modern quote",
        description: "A simple modern quote with a border on the left side.",
      },
    ],
  },
  {
    slug: "buttons",
    name: "Buttons",
    description: "Buttons with various animations and styles",
    releaseDateCategory: new Date("2024-08-09"),
    icon: SquareArrowRightIcon,
    previewCategory: {
      component: <ShinyRotatingBorderButtonVariant1 />,
      previewScale: 1.5,
    },
    componentList: [
      {
        sizePreview: "xs",
        slug: "growing-button",
        variantList: [
          {
            name: "Amber",
            component: <GrowingButtonVariant1 />,
            slugPreviewFile: "variant1",
          },
        ],
        title: "Button",
        description:
          "Simple button with icon which grows on hover. Perfect for small, rarely used buttons replacing an old tooltip.",
        isIframed: false,
      },
      {
        sizePreview: "xs",
        slug: "before-effect-button",
        variantList: [
          {
            name: "Default",
            component: <BeforeEffectButtonVariant1 />,
            slugPreviewFile: "variant1",
          },
          {
            name: "Advanced button",
            component: <BeforeEffectButtonVariant2 />,
            slugPreviewFile: "variant2",
          },
        ],
        title: "Dynamic button hover effect",
        description: "Button with a hover effect that has a 'before' effect.",
        isIframed: false,
      },
      {
        sizePreview: "xs",
        slug: "shiny-rotating-border-button",
        variantList: [
          {
            name: "variant1",
            component: <ShinyRotatingBorderButtonVariant1 />,
            slugPreviewFile: "variant1",
          },
        ],
        title: "Shiny rotating border button",
        description: "Button with a shiny rotating border effect.",
        isIframed: true,
      },
      {
        sizePreview: "xs",
        slug: "modern-animated-button",
        variantList: [
          {
            name: "Shiny rotating border button",
            component: <ModernAnimatedButtonVariant1 />,
            slugPreviewFile: "variant1",
          },
        ],
        title: "Modern Animated Button",
        description: "Button with a modern animated style.",
        isIframed: false,
        inspiration: "Raycast",
        inspirationLink: "https://www.raycast.com/",
      },
    ],
  },
  {
    slug: "cards",
    name: "Cards",
    description: "Cards with various layouts and effects",
    releaseDateCategory: new Date("2024-08-10"),
    icon: CreditCard,
    previewCategory: {
      component: <DynamicSquareBackgroundPreview />,
      previewScale: 0.5,
    },
    componentList: [
      {
        sizePreview: "sm",
        slug: "modern-inner-shadow",
        variantList: [
          {
            name: "Variant 1",
            component: <ModernInnerShadowCardVariant1 />,
            slugPreviewFile: "variant1",
          },
        ],
        title: "Modern inner shadow card",
        description:
          "A card that showcases a set of tools that you use to create your product.",
        isIframed: false,
        componentBadges: ["better-in-dark-mode"],
      },
      {
        sizePreview: "sm",
        slug: "dynamic-square-background",
        variantList: [
          {
            name: "Variant 1",
            component: <DynamicSquareBackgroundPreview />,
            slugPreviewFile: "dynamic-square-background-preview",
            slugComponentFile: "dynamic-square-background",
          },
        ],
        title: "Dynamic Square Background",
        description:
          "A card to announce any new feature or product with a modern dynamic square background.",
        isIframed: false,
        // componentBadges: ["better-in-dark-mode"],
      },
      {
        sizePreview: "sm",
        slug: "notification-card",
        variantList: [
          {
            name: "Variant 1",
            component: <NotificationCardPreview />,
            slugPreviewFile: "notification-card-preview",
            slugComponentFile: "notification-card",
          },
        ],
        title: "Notification Card",
        description:
          "A notification card with a date and time to show the user when the notification was sent.",
        isIframed: false,
        // componentBadges: ["better-in-dark-mode"],
      },
    ],
  },
  {
    slug: "checkboxes",
    name: "Checkboxes",
    description: "Checkboxes with various styles and interactions",
    releaseDateCategory: new Date("2024-08-31"),
    icon: CheckSquare2Icon,
    previewCategory: {
      component: <SimpleCheckboxPreview />,
      previewScale: 2,
    },
    componentList: [
      {
        sizePreview: "sm",
        slug: "simple-checkbox",
        variantList: [
          {
            name: "Default",
            component: <SimpleCheckboxPreview />,
            slugPreviewFile: "simple-checkbox-preview",
            slugComponentFile: "simple-checkbox",
          },
        ],
        title: "Simple checkbox",
        description:
          "A simple checkbox that can be used in any project with simple artistic style.",
        isIframed: false,
      },
    ],
  },
  {
    slug: "inputs",
    name: "Inputs",
    description: "Inputs with various styles and interactions",
    releaseDateCategory: new Date("2024-08-20"),
    icon: TextCursorInputIcon,
    previewCategory: {
      component: <FileDropzone />,
      previewScale: 1,
    },
    componentList: [
      {
        sizePreview: "sm",
        slug: "droppable-file",
        variantList: [
          {
            name: "Droppable Zone",
            component: <FileDropzone />,
            slugPreviewFile: "variant1",
          },
        ],
        title: "Droppable File",
        description:
          "A file dropzone that shows a preview of the file when hovered.",
        isIframed: false,
      },
    ],
  },
  {
    slug: "loaders",
    name: "Loaders",
    description: "Loaders with various styles and effects",
    releaseDateCategory: new Date("2024-08-31"),
    icon: LoaderIcon,
    previewCategory: {
      component: <ThreeDotSimpleLoader />,
      previewScale: 1.5,
    },
    componentList: [
      {
        sizePreview: "sm",
        slug: "three-dot-simple-loader",
        variantList: [
          {
            name: "3 Bouncing",
            component: <ThreeDotSimpleLoader />,
            slugPreviewFile: "three-dot-simple-loader",
          },
          {
            name: "3 Growing",
            component: <ThreeDotLoaderGrowing />,
            slugPreviewFile: "three-dot-loader-growing",
          },
          {
            name: "9 Random grid",
            component: <NineDotGridRandom />,
            slugPreviewFile: "three-dot-loader-growing",
          },
        ],
        title: "Three Dot Simple Loader",
        description: "A simple loader with three dots that bounce up and down.",
        isIframed: false,
      },
    ],
  },
  {
    slug: "navigation",
    name: "Navigation",
    description: "Navigation components with different effects",
    releaseDateCategory: new Date("2024-06-17"),
    icon: MenuIcon,
    previewCategory: {
      component: <Dock />,
      previewScale: 0.75,
    },
    componentList: [
      {
        sizePreview: "sm",
        slug: "vercel-navigation",
        variantList: [
          {
            name: "On hover effect",
            component: <VercelNavigationVariant1 />,
            slugPreviewFile: "variant1",
          },
          {
            name: "On click effect",
            component: <VercelNavigationVariant2 />,
            slugPreviewFile: "variant2",
          },
        ],
        title: "Vercel Navigation",
        description:
          "A smooth and simple navigation bar inspired by Vercel, with modern transitions and animations.",
        isIframed: true,
      },
      {
        sizePreview: "sm",
        slug: "mac-dock",
        variantList: [
          {
            name: "variant1",
            component: <Dock />,
            slugPreviewFile: "variant1",
          },
        ],
        title: "MacOS Dock",
        description:
          "A navigation menu with smooth animation as done on macOS but in a web browser!",
        isIframed: false,
        inspiration: "MacOS Dock",
      },
    ],
  },
  {
    slug: "skeletons",
    name: "Skeletons",
    description: "Skeletons with various effects for loading states",
    releaseDateCategory: new Date("2024-08-01"),
    icon: BoxSelectIcon,
    previewCategory: {
      component: <ShinyGradientSkeletonVariant1 />,
      previewScale: 0.75,
    },
    componentList: [
      {
        sizePreview: "sm",
        slug: "classic-pulse",
        variantList: [
          {
            name: "Classic Pulse",
            component: <ClassicPulseVariant1 />,
            slugPreviewFile: "variant1",
          },
        ],
        title: "Classic Pulse Skeleton",
        description:
          "A simple skeleton with a classic pulse effect for loading states.",
        inspiration: "Shadcn/ui",
        inspirationLink: "https://ui.shadcn.com/docs/components/skeleton",
      },
      {
        sizePreview: "sm",
        slug: "shiny-gradient",
        variantList: [
          {
            name: "Horizontal",
            component: <ShinyGradientSkeletonVariant1 />,
            slugPreviewFile: "variant1",
          },
          {
            name: "Vertical",
            component: <ShinyGradientSkeletonVariant2 />,
            slugPreviewFile: "variant2",
          },
        ],
        title: "Shiny Gradient Skeleton",
        description:
          "An advanced skeleton with a shiny gradient effect for loading states.",
        inspiration: "Delba",
        inspirationLink:
          "https://delba.dev/blog/animated-loading-skeletons-with-tailwind",
      },
    ],
  },
];
