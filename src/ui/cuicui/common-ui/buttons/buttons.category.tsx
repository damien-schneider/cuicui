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
};
