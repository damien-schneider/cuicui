import { TelescopeIcon } from "lucide-react";
import type { SingleComponentCategoryType } from "@/lib/types/component";
import { PreviewUseFirstVisit } from "@/cuicui/hooks/use-first-visit/preview.use-first-visit";

export const useFirstVisitCategory: SingleComponentCategoryType = {
  slug: "use-first-visit",
  name: "Use First Visit",
  description:
    "A hook that provides a first visit functionality to your application",
  releaseDateCategory: new Date("2024-10-06"),
  icon: TelescopeIcon,
  previewCategory: {
    component: <PreviewUseFirstVisit />,
    previewScale: 0.8,
  },
  component: {
    sizePreview: "md",
    variantList: [
      {
        name: "default variant",
        component: <PreviewUseFirstVisit />,
        slugComponentFile: "use-first-visit",
        slugPreviewFile: "preview.use-first-visit",
      },
    ],
  },
};
