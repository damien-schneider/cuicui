import {
  AlertCircleIcon,
  BatteryChargingIcon,
  Code2Icon,
  CommandIcon,
  FingerprintIcon,
  FolderTreeIcon,
  ListOrderedIcon,
  PanelTopIcon,
  SearchIcon,
  SettingsIcon,
  SlidersHorizontalIcon,
  SunMoonIcon,
  TableOfContentsIcon,
} from "lucide-react";

import AuthenticationPreviewImage from "#/src/assets/components-preview/authentication.jpeg";
import TableOfContentPreviewImage from "#/src/assets/components-preview/table-of-content.png";
import type { CategoryType } from "#/src/lib/types/component";
import ModernGlassyAlert from "#/src/ui/cuicui/application-ui/alert/modern-glassy-alert/modern-glassy-alert";
import PreviewModernGlassyAlert from "#/src/ui/cuicui/application-ui/alert/modern-glassy-alert/preview-modern-glassy-alert";
import SimpleAlert from "#/src/ui/cuicui/application-ui/alert/simple-alert/simple-alert";
import HalfSidedGlassMorphismAuthentication from "#/src/ui/cuicui/application-ui/authentication/half-sided-glassmorphism/variant1";
import FloatingGrowingBannerVariant1 from "#/src/ui/cuicui/application-ui/banners/floating-growing-banner/variant1";
import { PreviewBatteryIndicator } from "#/src/ui/cuicui/application-ui/battery/battery-indicator/preview-battery-indicator";
import CodeEditor from "#/src/ui/cuicui/application-ui/code/code-card/code-card";
import { CodeCardPreview } from "#/src/ui/cuicui/application-ui/code/code-card/code-card-preview";
import PreviewCommandVariant1 from "#/src/ui/cuicui/application-ui/code/code-snippet/preview-variant1";
import Modern3dKbdVariant1 from "#/src/ui/cuicui/application-ui/kbd/modern-3d-kbd/variant1";
import ModernDetailedKbdVariant1 from "#/src/ui/cuicui/application-ui/kbd/modern-detailed-kbd/variant1";
import GrowingSearchVariant1 from "#/src/ui/cuicui/application-ui/search-bars/growing-search/variant1";
import DynamicSettingsVariant1 from "#/src/ui/cuicui/application-ui/settings/dynamic-settings/variant1";
import { ElasticSliderVariant1 } from "#/src/ui/cuicui/application-ui/sliders/elastic-slider/variant1";
import SimpleModernSlider from "#/src/ui/cuicui/application-ui/sliders/simple-modern-slider/simple-modern-slider";
import SimpleModernSliderWithMax from "#/src/ui/cuicui/application-ui/sliders/simple-modern-slider/simple-modern-slider-with-max";
import { StepWithStickyColorVariant1 } from "#/src/ui/cuicui/application-ui/static-steppers/code/variant1";
import TableOfContentPreview from "#/src/ui/cuicui/application-ui/table-of-contents/modul-inspired/following-header-preview";
import TableOfContent from "#/src/ui/cuicui/application-ui/table-of-contents/modul-inspired/following-headers";
import { ThemeSwitcherButton } from "#/src/ui/cuicui/application-ui/theme/theme-switcher/theme-switcher-button";
import { PreviewRecursiveTree } from "#/src/ui/cuicui/application-ui/tree/recursive-tree/preview-recursive-tree";

export const applicationUICategoriesList: CategoryType[] = [
  {
    slug: "alert",
    name: "Alert",
    description: "Alert components",
    releaseDateCategory: new Date("2024-08-29"),
    icon: AlertCircleIcon,
    previewCategory: {
      component: <SimpleAlert />,
      previewScale: 1,
    },
    componentList: [
      {
        lastUpdatedDateComponent: new Date("2024-08-29"),
        isIframed: true,
        sizePreview: "sm",
        slug: "simple-alert",
        variantList: [
          {
            name: "variant1",
            component: <SimpleAlert />,
            slugPreviewFile: "simple-alert",
          },
        ],
        title: "Simple Alert",
        description: "A simple alert component.",
      },
      {
        isIframed: true,
        sizePreview: "sm",
        slug: "modern-glassy-alert",
        lastUpdatedDateComponent: new Date("2024-09-16"),
        variantList: [
          {
            name: "variant1",
            component: <PreviewModernGlassyAlert />,
            slugPreviewFile: "preview-modern-glassy-alert",
            slugComponentFile: "modern-glassy-alert",
          },
        ],
        title: "Modern Glassy Alert",
        description: "A modern glassy alert component.",
      },
    ],
  },
  {
    slug: "authentication",
    name: "Authentication",
    description: "Authentication components",
    releaseDateCategory: new Date("2024-08-21"),
    icon: FingerprintIcon,
    previewCategory: {
      component: <HalfSidedGlassMorphismAuthentication />,
      previewScale: 1,
      previewImage: AuthenticationPreviewImage,
    },
    componentList: [
      {
        isIframed: true,
        sizePreview: "lg",
        slug: "half-sided-glassmorphism",
        variantList: [
          {
            name: "variant1",
            component: <HalfSidedGlassMorphismAuthentication />,
            slugPreviewFile: "variant1",
          },
        ],
        title: "Half Sided Glassmorphism Authentication",
        description: "A half-sided glassmorphism authentication component.",
      },
    ],
  },
  {
    slug: "banners",
    name: "Banners",
    description: "Banner components",
    releaseDateCategory: new Date("2024-08-21"),
    icon: PanelTopIcon,
    previewCategory: {
      component: <FloatingGrowingBannerVariant1 />,
      previewScale: 0.8,
    },
    componentList: [
      {
        isIframed: true,
        sizePreview: "sm",
        slug: "floating-growing-banner",
        variantList: [
          {
            name: "variant1",
            component: <FloatingGrowingBannerVariant1 />,
            slugPreviewFile: "variant1",
          },
        ],
        title: "Floating Growing Banner",
        description: "A floating growing banner component.",
      },
    ],
  },
  {
    slug: "battery",
    name: "Battery",
    description: "Battery components",
    releaseDateCategory: new Date("2024-08-21"),
    icon: BatteryChargingIcon,
    previewCategory: {
      component: <PreviewBatteryIndicator />,
      previewScale: 1,
    },
    componentList: [
      {
        isIframed: false,
        sizePreview: "sm",
        slug: "battery-indicator",
        variantList: [
          {
            name: "Battery Indicator",
            component: <PreviewBatteryIndicator />,
            slugPreviewFile: "preview-battery-indicator",
            slugComponentFile: "battery-indicator",
          },
        ],
        title: "Battery Indicator",
        description: "A battery indicator component.",
      },
    ],
  },
  {
    slug: "code",
    name: "Code",
    description: "Code components with special interactions",
    releaseDateCategory: new Date("2024-08-20"),
    icon: Code2Icon,
    previewCategory: {
      component: <CodeCardPreview />,
      previewScale: 0.8,
    },
    componentList: [
      {
        isIframed: false,
        sizePreview: "xs",
        slug: "code-snippet",
        variantList: [
          {
            name: "variant1",
            component: <PreviewCommandVariant1 />,
            slugPreviewFile: "preview-variant1",
            slugComponentFile: "variant1",
          },
        ],
        title: "Code Snippet",
        description:
          "A code snippet component with a copy to clipboard button.",
      },
      {
        isIframed: false,
        sizePreview: "md",
        slug: "code-card",
        lastUpdatedDateComponent: new Date("2024-08-29"),
        variantList: [
          {
            name: "variant1",
            component: <CodeCardPreview />,
            slugPreviewFile: "code-card-preview",
            slugComponentFile: "code-card",
          },
        ],
        title: "Code Card",
        description: "A code card component with a copy to clipboard button.",
      },
    ],
  },
  {
    slug: "kbd",
    name: "Keyboard",
    description: "Keyboard components with various styles",
    releaseDateCategory: new Date("2024-08-13"),
    icon: CommandIcon,
    previewCategory: {
      component: <Modern3dKbdVariant1 />,
      previewScale: 1,
    },
    componentList: [
      {
        sizePreview: "xs",
        slug: "modern-detailed-kbd",
        variantList: [
          {
            name: "variant1",
            component: <ModernDetailedKbdVariant1 />,
            slugPreviewFile: "variant1",
          },
        ],
        title: "Simple keyboard Kbd",
        description:
          "A simple keyboard Kbd with an effect on hover and on press.",
      },
      {
        sizePreview: "xs",
        slug: "modern-3d-kbd",
        variantList: [
          {
            name: "variant1",
            component: <Modern3dKbdVariant1 />,
            slugPreviewFile: "variant1",
          },
        ],
        title: "3D keyboard Kbd",
        description: "A 3D keyboard Kbd with an effect on hover and on press.",
      },
    ],
  },
  {
    slug: "search-bars",
    name: "Search Bars",
    description: "Search bar components",
    releaseDateCategory: new Date("2024-08-19"),
    icon: SearchIcon,
    previewCategory: {
      component: <GrowingSearchVariant1 />,
      previewScale: 1,
    },
    componentList: [
      {
        sizePreview: "xs",
        slug: "growing-search",
        variantList: [
          {
            name: "With press effect",
            component: <GrowingSearchVariant1 />,
            slugPreviewFile: "variant1",
          },
        ],
        title: "Growing Search",
        description: "Search bar that grows when focused.",
      },
    ],
  },
  {
    slug: "settings",
    name: "Settings",
    description: "Settings components with animations",
    releaseDateCategory: new Date("2024-06-30"),
    icon: SettingsIcon,
    previewCategory: {
      component: <DynamicSettingsVariant1 />,
      previewScale: 1.25,
    },
    componentList: [
      {
        sizePreview: "sm",
        slug: "dynamic-settings",
        variantList: [
          {
            name: "variant1",
            component: <DynamicSettingsVariant1 />,
            slugPreviewFile: "variant1",
          },
        ],
        title: "Dynamic Settings",
        description: "Settings with lots of micro-interactions and animations.",
        componentBadges: ["updated"],
        inspiration: "UI Labs",
        inspirationLink: "https://www.uilabs.dev/",
      },
    ],
  },
  {
    slug: "sliders",
    name: "Sliders",
    description: "Slider components with animations",
    releaseDateCategory: new Date("2024-08-10"),
    icon: SlidersHorizontalIcon,
    previewCategory: {
      component: <ElasticSliderVariant1 />,
      previewScale: 1,
    },
    componentList: [
      {
        sizePreview: "xs",
        slug: "elastic-slider",
        variantList: [
          {
            name: "variant1",
            component: <ElasticSliderVariant1 />,
            slugPreviewFile: "variant1",
          },
        ],
        title: "Elastic Slider",
        description: "Smooth slider with scale effect.",
        inspiration: "Build UI",
        inspirationLink: "https://buildui.com/recipes/elastic-slider",
      },
      {
        sizePreview: "xs",
        slug: "simple-modern-slider",
        variantList: [
          {
            name: "Smooth",
            component: <SimpleModernSlider />,
            slugPreviewFile: "simple-modern-slider",
          },
          {
            name: "Min & max steps",
            component: <SimpleModernSliderWithMax />,
            slugPreviewFile: "simple-modern-slider-with-max",
          },
        ],
        title: "Simple Modern Slider",
        description: "Simple modern slider with micro animations.",
      },
    ],
  },
  {
    slug: "static-steppers",
    name: "Static Steppers",
    description: "Components to display a list of steps",
    releaseDateCategory: new Date("2024-08-01"),
    icon: ListOrderedIcon,
    previewCategory: {
      component: <StepWithStickyColorVariant1 />,
      previewScale: 0.75,
    },
    componentList: [
      {
        sizePreview: "sm",
        slug: "code",
        variantList: [
          {
            name: "variant1",
            component: <StepWithStickyColorVariant1 />,
            slugPreviewFile: "variant1",
          },
        ],
        title: "Simple static stepper",
        description:
          "A simple static stepper component to display a list of steps.",
        componentBadges: ["updated"],
        inspiration: "Hooks Scriptkavi manual installation",
        inspirationLink: "https://hooks.scriptkavi.com/docs/hooks/battery",
      },
    ],
  },
  {
    slug: "table-of-contents",
    name: "Table of Contents",
    description: "Table of contents components",
    releaseDateCategory: new Date("2024-08-28"),
    icon: TableOfContentsIcon,
    previewCategory: {
      component: <StepWithStickyColorVariant1 />,
      previewImage: TableOfContentPreviewImage,
      previewScale: 0.75,
    },
    componentList: [
      {
        sizePreview: "md",
        slug: "modul-inspired",
        lastUpdatedDateComponent: new Date("2024-08-28"),
        variantList: [
          {
            name: "variant1",
            component: <TableOfContentPreview />,
            slugPreviewFile: "following-header-preview",
            slugComponentFile: "following-headers",
          },
        ],
        isResizable: false,
        isIframed: false,
        title: "Modul inspired table of contents",
        description:
          "An advanced animated table of contents component highlighting every sections on the screen.",
        inspiration: "Modul",
        inspirationLink: "https://www.modul.day",
      },
    ],
  },
  {
    slug: "theme",
    name: "Theme",
    description: "Theme components",
    releaseDateCategory: new Date("2024-08-29"),
    icon: SunMoonIcon,
    previewCategory: {
      component: <ThemeSwitcherButton />,
      previewScale: 1,
    },
    componentList: [
      {
        isIframed: false,
        sizePreview: "xs",
        slug: "theme-switcher",
        variantList: [
          {
            name: "variant1",
            component: <ThemeSwitcherButton />,
            slugPreviewFile: "theme-switcher-button",
          },
        ],
        title: "Theme Switcher",
        description: "A theme switcher button.",
      },
    ],
  },
  {
    slug: "tree",
    name: "Tree",
    description: "Tree components",
    releaseDateCategory: new Date("2024-09-18"),
    icon: FolderTreeIcon,
    previewCategory: {
      component: <PreviewRecursiveTree />,
      previewScale: 1,
    },
    componentList: [
      {
        isIframed: false,
        sizePreview: "lg",
        slug: "recursive-tree",
        variantList: [
          {
            name: "variant1",
            component: <PreviewRecursiveTree />,
            slugPreviewFile: "preview-recursive-tree",
            slugComponentFile: "recursive-tree",
          },
        ],
        title: "Recursive Tree",
        description:
          "A tree component with recursive children. Without any limit with animated collapse and without needing to know the depth or to specify parent component.",
      },
    ],
  },
];
