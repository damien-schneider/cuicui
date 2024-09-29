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
      slugComponentFile: "gradient-card",
    },
    {
      name: "Border only",
      component: <DynamicCardsVariant1 />,
      slugPreviewFile: "only-border-card-effect",
      slugComponentFile: "card-mouse-highlighting-border",
    },
  ],
  componentBadges: ["prefer-desktop"],
  lastUpdatedDateComponent: new Date("2024-09-27"),
};
