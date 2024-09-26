import type { CategoryType } from "#/src/lib/types/component";
import DynamicSquareBackgroundPreview from "#/src/ui/cuicui/common-ui/cards/dynamic-square-background/dynamic-square-background-preview";
import HoverEffectCardPreview from "#/src/ui/cuicui/common-ui/cards/hover-effect-card/hover-effect-card-preview";
import { ModernInnerShadowCardVariant1 } from "#/src/ui/cuicui/common-ui/cards/modern-inner-shadow/variant1";
import NotificationCardPreview from "#/src/ui/cuicui/common-ui/cards/notification-card/notification-card-preview";
import { CreditCardIcon } from "lucide-react";

export const cardsCategory: CategoryType = {
  slug: "cards",
  name: "Cards",
  description: "Cards with various layouts and effects",
  releaseDateCategory: new Date("2024-08-10"),
  icon: CreditCardIcon,
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
};
