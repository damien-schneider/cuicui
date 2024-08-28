import {
  Code2Icon,
  CommandIcon,
  FingerprintIcon,
  ListOrderedIcon,
  PanelTopIcon,
  SearchIcon,
  SettingsIcon,
  SlidersHorizontalIcon,
} from "lucide-react";
import HalfSidedGlassMorphismAuthentication from "#/src/app/(components)/application-ui/authentication/half-sided-glassmorphism/variant1";
import FloatingGrowingBannerVariant1 from "#/src/app/(components)/application-ui/banners/floating-growing-banner/variant1";
import PreviewCommandVariant1 from "#/src/app/(components)/application-ui/code/command/preview-variant1";
import Modern3dKbdVariant1 from "#/src/app/(components)/application-ui/kbd/modern-3d-kbd/variant1";
import ModernDetailedKbdVariant1 from "#/src/app/(components)/application-ui/kbd/modern-detailed-kbd/variant1";
import GrowingSearchVariant1, {
  SearchBar,
} from "#/src/app/(components)/application-ui/search-bars/growing-search/variant1";
import DynamicSettingsVariant1 from "#/src/app/(components)/application-ui/settings/dynamic-settings/variant1";
import { ElasticSliderVariant1 } from "#/src/app/(components)/application-ui/sliders/elastic-slider/variant1";
import { StepWithStickyColorVariant1 } from "#/src/app/(components)/application-ui/static-steppers/code/variant1";
import AuthenticationPreviewImage from "#/src/assets/components-preview/authentication.jpeg";
import type { CategoryType } from "#/src/lib/types/component";

export const applicationUICategoriesList: CategoryType[] = [
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
    slug: "code",
    name: "Code",
    description: "Code components with special interactions",
    releaseDateCategory: new Date("2024-08-20"),
    icon: Code2Icon,
    previewCategory: {
      component: <PreviewCommandVariant1 />,
      previewScale: 0.8,
    },
    componentList: [
      {
        isIframed: false,
        sizePreview: "xs",
        slug: "command",
        variantList: [
          {
            name: "variant1",
            component: <PreviewCommandVariant1 />,
            slugPreviewFile: "preview-variant1",
            slugComponentFile: "variant1",
          },
        ],
        title: "Command",
        description: "A command component with a copy to clipboard button.",
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
];

//TODO: Write a test to check the file tree, and check if the slug is corresponding to the file path of each component
