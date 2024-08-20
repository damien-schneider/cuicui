import {
  BarChart2Icon,
  BookOpenTextIcon,
  BoxSelectIcon,
  BringToFrontIcon,
  CircleUserRoundIcon,
  ClipboardCopyIcon,
  Code2Icon,
  CommandIcon,
  CreditCard,
  DollarSignIcon,
  GalleryHorizontalIcon,
  GripIcon,
  ListOrderedIcon,
  MenuIcon,
  MonitorSmartphoneIcon,
  MousePointerClickIcon,
  PictureInPictureIcon,
  QuoteIcon,
  SearchIcon,
  SettingsIcon,
  SlidersHorizontalIcon,
  SparkleIcon,
  SquareArrowRightIcon,
  TagIcon,
  TextCursorInputIcon,
} from "lucide-react";

import PreviewCommandVariant1 from "../app/(components)/application-ui/code/command/preview-variant1";
import Modern3dKbdVariant1 from "../app/(components)/application-ui/kbd/modern-3d-kbd/variant1";
import { SearchBar } from "../app/(components)/application-ui/search-bars/growing-search/variant1";
import DynamicSettingsVariant1 from "../app/(components)/application-ui/settings/dynamic-settings/variant1";
import { ElasticSliderVariant1 } from "../app/(components)/application-ui/sliders/elastic-slider/variant1";
import { StepWithStickyColorVariant1 } from "../app/(components)/application-ui/static-steppers/code/variant1";
import ClerkBadgeVariant1 from "../app/(components)/common-ui/badges/clerk-badge/variant1";
import ModernSimpleQuoteVariant1 from "../app/(components)/common-ui/blockquotes/modern-simple-quote/variant1";
import ShinyRotatingBorderButtonVariant1 from "../app/(components)/common-ui/buttons/shiny-rotating-border-button/variant1";
import { ModernInnerShadowCardVariant1 } from "../app/(components)/common-ui/cards/modern-inner-shadow/variant1";
import FileDropzone from "../app/(components)/common-ui/inputs/droppable-file/variant1";
import Dock from "../app/(components)/common-ui/navigation/mac-dock/variant1";
import { ShinyGradientSkeletonVariant1 } from "../app/(components)/common-ui/skeletons/shiny-gradient/variant1";
import PreviewCopyToClipboard from "../app/(components)/hooks/use-copy-to-clipboard/hook/preview-copy-to-clipboard";
import { CarouselCylindricalVariant1 } from "../app/(components)/marketing-ui/carousels/cylindric-3d-carousel/variant1";
import { Variant1FeatureFourImages } from "../app/(components)/marketing-ui/features/feature-four-images/variant1";
import ManyOffersVariant1 from "../app/(components)/marketing-ui/pricing-tables/many-offers/variant1";
import { AnimatedNumberVariant1 } from "../app/(components)/marketing-ui/statistics/animated-on-scroll/variant1";
import MarqueeVariant1 from "../app/(components)/marketing-ui/testimonials/marquee/variant1";
import FollowCursorVariant1 from "../app/(components)/other/cursors/follow-cursor/variant1";
import { GooglePixelVariant1 } from "../app/(components)/other/mock-ups/smartphone/variant1";
import { IPhone14ProVariant2 } from "../app/(components)/other/mock-ups/smartphone/variant2";
import { DotsPatternVariant1 } from "../app/(components)/other/patterns/dots-pattern/variant1";
import BlurAppearVariant1 from "../app/(components)/other/transition-wrappers/blur-appear/variant1";
import type { CategoryItem } from "./types/component";

export const componentCategories: {
  name: string;
  slug: string | null;
  noAlphabeticalSort?: boolean;
  items: CategoryItem[];
}[] = [
  {
    name: "Info",
    slug: null,
    noAlphabeticalSort: true,
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
        name: "Contribute",
        href: "https://cuicui.featurebase.app/",
        slug: "contribute",
        description:
          "Help us make CuiCui better. Contribute to the project with your ideas or directly on GitHub.",
      },
      {
        name: "Roadmap",
        href: "https://cuicui.featurebase.app/roadmap",
        slug: "roadmap",
        description:
          "See what's coming next in CuiCui. We have a lot of cool stuff planned.",
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
        name: "Avatars",
        slug: "avatars",
        description: "Create simple avatars with different styles",
        // releaseDate: new Date("2024-08-01"),
        comingSoon: true,
        icon: CircleUserRoundIcon,
      },
      {
        name: "Badges",
        slug: "badges",
        description: "Create simple badges with different styles",
        releaseDate: new Date("2024-06-29"),
        icon: TagIcon,
        preview: {
          component: <ClerkBadgeVariant1 />,
          previewScale: 2,
        },
      },
      {
        name: "Blockquotes",
        slug: "blockquotes",
        description: "Create simple blockquotes with different styles",
        releaseDate: new Date("2024-08-01"),
        icon: QuoteIcon,
        preview: {
          component: <ModernSimpleQuoteVariant1 />,
          previewScale: 0.75,
        },
      },
      {
        name: "Buttons",
        slug: "buttons",
        description: "Create simple buttons with different styles",
        releaseDate: new Date("2024-08-9"),
        icon: SquareArrowRightIcon,
        preview: {
          component: <ShinyRotatingBorderButtonVariant1 />,
          previewScale: 1.5,
        },
      },
      {
        name: "Cards",
        slug: "cards",
        description: "Create simple cards with different styles",
        releaseDate: new Date("2024-08-10"),
        icon: CreditCard,
        preview: {
          component: <ModernInnerShadowCardVariant1 />,
          previewScale: 0.5,
        },
      },
      {
        name: "Inputs",
        slug: "inputs",
        description: "Create simple inputs with different styles",
        releaseDate: new Date("2024-08-20"),
        icon: TextCursorInputIcon,
        preview: {
          component: <FileDropzone />,
          previewScale: 1,
        },
      },
      {
        name: "Navigation",
        slug: "navigation",
        description: "Create simple navigation components",
        releaseDate: new Date("2024-06-17"),
        icon: MenuIcon,
        preview: {
          component: <Dock />,
          previewScale: 0.75,
        },
      },
      {
        name: "Skeletons",
        slug: "skeletons",
        description: "Create simple skeletons for loading states",
        releaseDate: new Date("2024-08-01"),
        icon: BoxSelectIcon,
        preview: {
          component: <ShinyGradientSkeletonVariant1 />,
          previewScale: 0.75,
        },
      },
    ],
  },
  {
    name: "Marketing UI",
    slug: "marketing-ui",
    items: [
      {
        name: "Carousels",
        slug: "carousels",
        description: "Showcase your product testimonials with style",
        releaseDate: new Date("2024-08-10"),
        icon: GalleryHorizontalIcon,
        preview: {
          component: <CarouselCylindricalVariant1 />,
          previewScale: 0.75,
        },
      },
      {
        name: "Features",
        slug: "features",
        description: "Showcase your product features with style",
        releaseDate: new Date("2024-06-17"),
        icon: SparkleIcon,
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
        icon: DollarSignIcon,
        preview: {
          component: <ManyOffersVariant1 />,
          previewScale: 0.2,
        },
      },
      {
        name: "Statistics",
        slug: "statistics",
        description: "Showcase your product statistics with style",
        icon: BarChart2Icon,
        releaseDate: new Date("2024-08-11"),
        preview: {
          component: <AnimatedNumberVariant1 />,
          previewScale: 0.5,
        },
      },
      {
        name: "Testimonials",
        slug: "testimonials",
        description: "Showcase your product testimonials with style",
        icon: BookOpenTextIcon,
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
        name: "Code",
        slug: "code",
        description: "Create simple code snippets with different styles",
        releaseDate: new Date("2024-08-20"),
        icon: Code2Icon,
        preview: {
          component: <PreviewCommandVariant1 />,
          previewScale: 0.8,
        },
      },
      {
        name: "Kbd",
        slug: "kbd",
        description: "Create simple accessible kbd shortcut",
        releaseDate: new Date("2024-08-13"),
        icon: CommandIcon,
        preview: {
          component: <Modern3dKbdVariant1 />,
          previewScale: 1,
        },
      },
      {
        name: "Search Bars",
        slug: "search-bars",
        description: "Create simple search bars with different styles",
        releaseDate: new Date("2024-08-19"),
        icon: SearchIcon,
        preview: {
          component: <SearchBar />,
          previewScale: 1,
        },
      },
      {
        name: "Settings",
        slug: "settings",
        description: "Create simple settings components",
        releaseDate: new Date("2024-06-30"),
        icon: SettingsIcon,
        preview: {
          component: <DynamicSettingsVariant1 />,
          previewScale: 1.25,
        },
      },
      {
        name: "Sliders",
        slug: "sliders",
        description: "Create simple sliders with different styles",
        releaseDate: new Date("2024-08-10"),
        icon: SlidersHorizontalIcon,
        preview: {
          component: <ElasticSliderVariant1 />,
          previewScale: 1,
        },
      },
      {
        name: "Static Steppers",
        slug: "static-steppers",
        description: "Create simple steppers with different styles",
        releaseDate: new Date("2024-08-01"),
        icon: ListOrderedIcon,
        preview: {
          component: <StepWithStickyColorVariant1 />,
          previewScale: 0.75,
        },
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
        icon: MousePointerClickIcon,
        preview: {
          component: <FollowCursorVariant1 />,
          previewScale: 1,
        },
      },
      {
        name: "Mock-ups",
        slug: "mock-ups",
        description:
          "Create mock-ups without images, just with CSS and HTML for better performance, SEO and accessibility & also more micro-interactions",
        releaseDate: new Date("2024-08-14"),
        icon: MonitorSmartphoneIcon,
        preview: {
          component: <IPhone14ProVariant2 />,
          previewScale: 0.2,
        },
      },
      {
        name: "Patterns",
        slug: "patterns",
        description:
          "Create patterns without images, just with CSS and HTML for better performance, SEO and accessibility & also more micro-interactions",
        releaseDate: new Date("2024-08-10"),
        icon: GripIcon,
        preview: {
          component: <DotsPatternVariant1 />,
          previewScale: 1,
        },
      },
      {
        name: "Transition wrappers",
        slug: "transition-wrappers",
        description:
          "Create transition wrappers to animate any without changing your code components",
        releaseDate: new Date("2024-07-29"),
        icon: BringToFrontIcon,
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
        icon: PictureInPictureIcon,
        comingSoon: true,
      },
      {
        name: "Copy to Clipboard",
        slug: "use-copy-to-clipboard",
        description: "Copy text to the clipboard",
        icon: ClipboardCopyIcon,
        releaseDate: new Date("2024-08-20"),
        preview: {
          component: <PreviewCopyToClipboard />,
          previewScale: 0.8,
        },
      },
    ],
  },
];
