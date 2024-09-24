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

import GrowingButtonVariant1 from "#/src/ui/cuicui/common-ui/buttons/growing-button/variant1";
import ModernAnimatedButtonVariant1 from "#/src/ui/cuicui/common-ui/buttons/modern-animated-button/variant1";
import ShinyRotatingBorderButtonVariant1 from "#/src/ui/cuicui/common-ui/buttons/shiny-rotating-border-button/variant1";
import DynamicSquareBackgroundPreview from "#/src/ui/cuicui/common-ui/cards/dynamic-square-background/dynamic-square-background-preview";
import { ModernInnerShadowCardVariant1 } from "#/src/ui/cuicui/common-ui/cards/modern-inner-shadow/variant1";
import NotificationCardPreview from "#/src/ui/cuicui/common-ui/cards/notification-card/notification-card-preview";
import SimpleCheckboxPreview from "#/src/ui/cuicui/common-ui/checkboxes/simple-checkbox/simple-checkbox-preview";
import FileDropzone from "#/src/ui/cuicui/common-ui/inputs/droppable-file/variant1";

import PreviewBeforeEffectButtonAdvancedButton from "#/src/ui/cuicui/common-ui/buttons/before-effect-button/preview-advanced-button";
import PreviewBeforeEffectButtonDefault from "#/src/ui/cuicui/common-ui/buttons/before-effect-button/preview-default";
import PreviewBeforeEffectButtonHoverOnly from "#/src/ui/cuicui/common-ui/buttons/before-effect-button/preview-hover-only";
import HoverEffectCardPreview from "#/src/ui/cuicui/common-ui/cards/hover-effect-card/hover-effect-card-preview";
import { PreviewModernSimpleInput } from "#/src/ui/cuicui/common-ui/inputs/modern-simple-input/preview-simple-modern-input";
import { CircularBarsSpinnerLoader } from "#/src/ui/cuicui/common-ui/loaders/spinner-loader/circular-bars-spinner-loader";
import { DualRingSpinnerLoader } from "#/src/ui/cuicui/common-ui/loaders/spinner-loader/dual-ring-spinner-loader";
import { SpinnerLoader } from "#/src/ui/cuicui/common-ui/loaders/spinner-loader/spinner-loader";
import NineDotGridRandom from "#/src/ui/cuicui/common-ui/loaders/three-dot-simple-loader/nine-dot-grid-random";
import ThreeDotLoaderGrowing from "#/src/ui/cuicui/common-ui/loaders/three-dot-simple-loader/three-dot-loader-growing";
import { ThreeDotSimpleLoader } from "#/src/ui/cuicui/common-ui/loaders/three-dot-simple-loader/three-dot-simple-loader";
import { Dock } from "#/src/ui/cuicui/common-ui/navigation/mac-dock/variant1";
import { VercelNavigationVariant1 } from "#/src/ui/cuicui/common-ui/navigation/vercel-navigation/variant1";
import { VercelNavigationVariant2 } from "#/src/ui/cuicui/common-ui/navigation/vercel-navigation/variant2";
import { ClassicPulseVariant1 } from "#/src/ui/cuicui/common-ui/skeletons/classic-pulse/variant1";
import { ShinyGradientSkeletonHorizontal } from "#/src/ui/cuicui/common-ui/skeletons/shiny-gradient/skeleton-shiny-gradient-horizontal";
import { ShinyGradientSkeletonVertical } from "#/src/ui/cuicui/common-ui/skeletons/shiny-gradient/skeleton-shiny-gradient-vertical";

export const commonUiCategoriesList: CategoryType[] = [
  {
    slug: "avatars",
    name: "Avatars",
    description: "Create simple avatars with different styles",
    comingSoonCategory: true,
    icon: CircleUserRoundIcon,
    releaseDateCategory: new Date(),
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
            name: "Default",
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
            name: "Default",
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
            name: "Hover only",
            component: <PreviewBeforeEffectButtonHoverOnly />,
            slugPreviewFile: "preview-hover-only",
          },
          {
            name: "Simple",
            component: <PreviewBeforeEffectButtonDefault />,
            slugPreviewFile: "preview-default",
          },
          {
            name: "Advanced button",
            component: <PreviewBeforeEffectButtonAdvancedButton />,
            slugPreviewFile: "preview-advanced-button",
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
            name: "Default",
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
      {
        sizePreview: "sm",
        slug: "hover-effect-card",
        lastUpdatedDateComponent: new Date("2024-09-10"),
        variantList: [
          {
            name: "Variant 1",
            component: <HoverEffectCardPreview />,
            slugPreviewFile: "hover-effect-card-preview",
            slugComponentFile: "hover-effect-card",
          },
        ],
        title: "Hover Effect Card",
        description:
          "A card with a hover effect that rotates on hover. Only CSS.",
        isIframed: true,
        componentBadges: ["no-js"],
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
        lastUpdatedDateComponent: new Date("2024-08-20"),
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
      {
        sizePreview: "sm",
        slug: "modern-simple-input",
        lastUpdatedDateComponent: new Date("2024-09-16"),
        variantList: [
          {
            name: "Variant 1",
            component: <PreviewModernSimpleInput />,
            slugPreviewFile: "preview-simple-modern-input",
            slugComponentFile: "modern-simple-input",
          },
        ],
        title: "Modern Simple Input",
        description:
          "A simple input that can be used in any project with any artistic style.",
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
      {
        sizePreview: "sm",
        slug: "spinner-loader",
        variantList: [
          {
            name: "Spinner",
            component: <SpinnerLoader />,
            slugPreviewFile: "spinner-loader",
          },
          {
            name: "Circular Bars",
            component: <CircularBarsSpinnerLoader />,
            slugPreviewFile: "circular-bars-spinner-loader",
          },
          {
            name: "Dual Ring",
            component: <DualRingSpinnerLoader />,
            slugPreviewFile: "dual-ring-spinner-loader",
          },
        ],
        title: "Spinner Loader",
        description: "A simple circular loader",
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
            name: "Default",
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
      component: <ShinyGradientSkeletonHorizontal />,
      previewScale: 0.75,
    },
    componentList: [
      {
        sizePreview: "sm",
        slug: "classic-pulse",
        lastUpdatedDateComponent: new Date("2024-08-01"),
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
        lastUpdatedDateComponent: new Date("2024-09-21"),
        variantList: [
          {
            name: "Horizontal",
            component: <ShinyGradientSkeletonHorizontal />,
            slugPreviewFile: "skeleton-shiny-gradient-horizontal",
            slugComponentFile: "skeleton-shiny-gradient",
          },
          {
            name: "Vertical",
            component: <ShinyGradientSkeletonVertical />,
            slugPreviewFile: "skeleton-shiny-gradient-vertical",
            slugComponentFile: "skeleton-shiny-gradient",
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
