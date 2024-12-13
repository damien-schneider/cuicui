import { TagIcon } from "lucide-react";
import type { CategoryType } from "@/lib/types/component";
import AdvancedBadgesVariant1 from "@/cuicui/common-ui/badges/advanced-badges/default.variant";
import ClerkBadgeVariant1 from "@/cuicui/common-ui/badges/clerk-badge/default.variant";
import { BadgeSimpleVariantAmber } from "@/cuicui/common-ui/badges/modern-simple-badges/amber.variant";
import { BadgeSimpleVariantRed } from "@/cuicui/common-ui/badges/modern-simple-badges/red.variant";

export const badgesCategory: CategoryType = {
  slug: "badges",
  name: "Badges",
  description: "Badges with various styles and purposes",
  releaseDateCategory: new Date("2024-06-29"),
  icon: TagIcon,
  componentList: [
    {
      sizePreview: "xs",
      slug: "modern-simple-badges",
      variantList: [
        {
          name: "Amber",
          component: BadgeSimpleVariantAmber,
          slugPreviewFile: "variant1",
        },
        {
          name: "Red",
          component: BadgeSimpleVariantRed,
          slugPreviewFile: "variant2",
        },
      ],
      name: "Badge",
      description:
        "Simple modern badge that can be used in any project with any artistic style.",
    },
    {
      sizePreview: "xs",
      slug: "clerk-badge",
      variantList: [
        {
          name: "Default",
          component: ClerkBadgeVariant1,
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
      sizePreview: "xs",
      slug: "advanced-badges",
      variantList: [
        {
          name: "Default",
          component: AdvancedBadgesVariant1,
          slugPreviewFile: "variant1",
        },
      ],
      name: "Advanced Badges",
      description:
        "Advanced badges that can be used in any project with any artistic style.",
    },
  ],
};

export default badgesCategory;
