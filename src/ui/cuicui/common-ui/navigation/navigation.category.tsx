import type { CategoryType } from "#/src/lib/types/component";
import { Dock } from "#/src/ui/cuicui/common-ui/navigation/mac-dock/variant1";
import { VercelNavigationVariant1 } from "#/src/ui/cuicui/common-ui/navigation/vercel-navigation/variant1";
import { VercelNavigationVariant2 } from "#/src/ui/cuicui/common-ui/navigation/vercel-navigation/variant2";
import { MenuIcon } from "lucide-react";

export const navigationCategory: CategoryType = {
  slug: "navigation",
  name: "Navigation",
  description: "Navigation components with different effects",
  releaseDateCategory: new Date("2024-06-17"),
  icon: MenuIcon,
  previewCategory: {
    component: <Dock />,
    previewScale: 0.75,
  },
  componentList: [
    {
      sizePreview: "sm",
      slug: "vercel-navigation",
      variantList: [
        {
          name: "On hover effect",
          component: <VercelNavigationVariant1 />,
          slugPreviewFile: "variant1",
        },
        {
          name: "On click effect",
          component: <VercelNavigationVariant2 />,
          slugPreviewFile: "variant2",
        },
      ],
      name: "Vercel Navigation",
      description:
        "A smooth and simple navigation bar inspired by Vercel, with modern transitions and animations.",
      isIframed: true,
      lastUpdatedDateComponent: new Date("2024-06-17"),
    },
    {
      sizePreview: "sm",
      slug: "mac-dock",
      variantList: [
        {
          name: "Default",
          component: <Dock />,
          slugPreviewFile: "variant1",
        },
      ],
      name: "MacOS Dock",
      description:
        "A navigation menu with smooth animation as done on macOS but in a web browser!",
      isIframed: false,
      inspiration: "MacOS Dock",
      lastUpdatedDateComponent: new Date("2024-06-17"),
    },
  ],
};
