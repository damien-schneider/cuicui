import type { ComponentType } from "#/src/lib/types/component";
import DynamicCardsVariant2 from "#/src/ui/cuicui/other/cursors/dynamic-cards/gradient-card-effect";
import DynamicCardsVariant1 from "#/src/ui/cuicui/other/cursors/dynamic-cards/only-border-card-effect";

export const cardHoverCursorEffectComponent: ComponentType = {
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
      slugPreviewFile: "gradient-card-effect",
      slugComponentFile: "card-hover-cursor-effect.component",
    },
    {
      name: "Border only",
      component: <DynamicCardsVariant1 />,
      slugPreviewFile: "only-border-card-effect",
    },
  ],
  componentBadges: ["prefer-desktop"],
};
