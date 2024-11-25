import { KeyboardIcon } from "lucide-react";

import type { SingleComponentCategoryType } from "@/lib/types/component";
import { PreviewUseKeyPress } from "@/cuicui/hooks/use-key-press/preview-use-key-press";
export const useKeyPressCategory: SingleComponentCategoryType = {
  slug: "use-key-press",
  name: "Use Key Press",
  description:
    "A hook that allows you to know if an element is in the viewport",
  releaseDateCategory: new Date("2024-09-28"),
  icon: KeyboardIcon,
  component: {
    sizePreview: "sm",

    variantList: [
      {
        name: "variant 1",
        component: <PreviewUseKeyPress />,
        slugComponentFile: "use-key-press",
        slugPreviewFile: "preview-use-key-press",
      },
    ],
  },
};
