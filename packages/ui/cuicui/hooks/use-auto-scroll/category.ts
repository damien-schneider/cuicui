import { Scroll } from "lucide-react";
import type { SingleComponentCategoryType } from "@/lib/types/component";
import PreviewUseAutoScroll from "@/cuicui/hooks/use-auto-scroll/preview.use-auto-scroll";

export const useAutoScrollCategory: SingleComponentCategoryType = {
  slug: "use-auto-scroll",
  name: "Use Auto Scroll",
  description: "A hook to automatically scroll a list",
  releaseDateCategory: new Date("2024-09-16"),
  icon: Scroll,
  component: {
    rerenderButton: true,
    sizePreview: "lg",
    variantList: [
      {
        name: "variant 1",
        component: PreviewUseAutoScroll,
        slugComponentFile: "use-auto-scroll",
        slugPreviewFile: "preview-use-auto-scroll",
      },
    ],
  },
};
