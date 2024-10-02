import type { CategoryType } from "#/src/lib/types/component";
import PreviewBeforeEffectButtonAdvancedButton from "#/src/ui/cuicui/common-ui/buttons/before-effect-button/preview-advanced-button";
import PreviewBeforeEffectButtonDefault from "#/src/ui/cuicui/common-ui/buttons/before-effect-button/preview-default";
import PreviewBeforeEffectButtonHoverOnly from "#/src/ui/cuicui/common-ui/buttons/before-effect-button/preview-hover-only";
import GrowingButtonVariant1 from "#/src/ui/cuicui/common-ui/buttons/growing-button/variant1";
import ModernAnimatedButtonVariant1 from "#/src/ui/cuicui/common-ui/buttons/modern-animated-button/variant1";
import ShinyRotatingBorderButtonVariant1 from "#/src/ui/cuicui/common-ui/buttons/shiny-rotating-border-button/variant1";
import { SquareArrowRightIcon } from "lucide-react";

export const buttonsCategory: CategoryType = {
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
      slug: "growing-button",
      name: "Button",
      description:
        "Simple button with icon which grows on hover. Perfect for small, rarely used buttons replacing an old tooltip.",
      sizePreview: "xs",
      variantList: [
        {
          name: "Amber",
          component: <GrowingButtonVariant1 />,
          slugPreviewFile: "variant1",
        },
      ],
      lastUpdatedDateComponent: new Date("2024-08-10"),
    },
    {
      slug: "before-effect-button",
      name: "Dynamic button hover effect",
      description: "Button with a hover effect that has a 'before' effect.",
      sizePreview: "xs",
      variantList: [
        {
          name: "Hover only",
          component: <PreviewBeforeEffectButtonHoverOnly />,
          slugPreviewFile: "preview-hover-only",
          slugComponentFile: "before-effect-button",
        },
        {
          name: "Simple",
          component: <PreviewBeforeEffectButtonDefault />,
          slugPreviewFile: "preview-default",
          slugComponentFile: "before-effect-button",
        },
        {
          name: "Advanced button",
          component: <PreviewBeforeEffectButtonAdvancedButton />,
          slugPreviewFile: "preview-advanced-button",
          slugComponentFile: "before-effect-button",
        },
      ],
      isIframed: false,
      lastUpdatedDateComponent: new Date("2024-08-10"),
    },
    {
      slug: "shiny-rotating-border-button",
      name: "Shiny rotating border button",
      description: "Button with a shiny rotating border effect.",
      sizePreview: "xs",
      variantList: [
        {
          name: "Default",
          component: <ShinyRotatingBorderButtonVariant1 />,
          slugPreviewFile: "variant1",
        },
      ],
      isIframed: true,
      lastUpdatedDateComponent: new Date("2024-08-10"),
    },
    {
      slug: "modern-animated-button",
      name: "Modern Animated Button",
      description: "Button with a modern animated style.",
      sizePreview: "xs",
      variantList: [
        {
          name: "Shiny rotating border button",
          component: <ModernAnimatedButtonVariant1 />,
          slugPreviewFile: "variant1",
        },
      ],

      inspiration: "Raycast",
      inspirationLink: "https://www.raycast.com/",
      lastUpdatedDateComponent: new Date("2024-08-10"),
    },
  ],
};
