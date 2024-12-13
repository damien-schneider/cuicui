import { FingerprintIcon } from "lucide-react";
import type { CategoryType } from "@/lib/types/component";
import HalfSidedGlassMorphismAuthentication from "@/cuicui/application-ui/authentication/half-sided-glassmorphism/default.variant";
export const authenticationCategory: CategoryType = {
  slug: "authentication",
  name: "Authentication",
  description: "Authentication components",
  releaseDateCategory: new Date("2024-08-21"),
  icon: FingerprintIcon,
  componentList: [
    {
      isIframed: true,
      sizePreview: "lg",
      slug: "half-sided-glassmorphism",
      variantList: [
        {
          name: "Default",
          component: HalfSidedGlassMorphismAuthentication,
          slugPreviewFile: "variant1",
        },
      ],
      name: "Half Sided Glassmorphism Authentication",
      description: "A half-sided glassmorphism authentication component.",
    },
  ],
};

export default authenticationCategory;
