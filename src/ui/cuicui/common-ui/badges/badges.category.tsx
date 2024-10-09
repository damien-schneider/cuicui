import { TagIcon } from "lucide-react";
import type { CategoryType } from "#/src/lib/types/component";
import AdvancedBadgesVariant1 from "#/src/ui/cuicui/common-ui/badges/advanced-badges/variant1";
import ClerkBadgeVariant1 from "#/src/ui/cuicui/common-ui/badges/clerk-badge/variant1";
import { BadgeSimpleVariantAmber } from "#/src/ui/cuicui/common-ui/badges/modern-simple-badges/variant1";
import { BadgeSimpleVariantRed } from "#/src/ui/cuicui/common-ui/badges/modern-simple-badges/variant2";

export const badgesCategory: CategoryType = {
  slug: "badges",
  name: "Badges",
  description: "Badges with various styles and purposes",
  releaseDateCategory: new Date("2024-06-29"),
  icon: TagIcon,
  previewCategory: {
    component: <ClerkBadgeVariant1 />,
    previewScale: 3,
  },
  componentList: [
    {
      lastUpdatedDateComponent: new Date("2024-06-29"),
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
      name: "Badge",
      description:
        "Simple modern badge that can be used in any project with any artistic style.",
    },
    {
      lastUpdatedDateComponent: new Date("2024-06-29"),
      sizePreview: "xs",
      slug: "clerk-badge",
      variantList: [
        {
          name: "Default",
          component: <ClerkBadgeVariant1 />,
          slugPreviewFile: "variant1",
        },
      ],
      name: "Clerk Badge",
      description:
        "Simple modern badge that can be used in any project with any artistic style.",
      inspiration: "Clerk",
      inspirationLink: "https://clerk.com/docs",
    },
    {
      lastUpdatedDateComponent: new Date("2024-07-29"),
      sizePreview: "xs",
      slug: "advanced-badges",
      variantList: [
        {
          name: "Default",
          component: <AdvancedBadgesVariant1 />,
          slugPreviewFile: "variant1",
        },
      ],
      name: "Advanced Badges",
      description:
        "Advanced badges that can be used in any project with any artistic style.",
    },
  ],
};
