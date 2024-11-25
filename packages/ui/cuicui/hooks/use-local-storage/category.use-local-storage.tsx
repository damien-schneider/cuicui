import { DatabaseIcon } from "lucide-react";
import type { SingleComponentCategoryType } from "@/lib/types/component";
import { PreviewUseLocalStorage } from "@/cuicui/hooks/use-local-storage/preview-use-local-storage";

export const useLocalStorageCategory: SingleComponentCategoryType = {
  slug: "use-local-storage",
  name: "Use Local Storage",
  description:
    "A hook that allows you to manage and persist state using localStorage",
  releaseDateCategory: new Date("2024-09-28"),
  icon: DatabaseIcon,
  component: {
    sizePreview: "sm",
    variantList: [
      {
        name: "Default Variant",
        component: <PreviewUseLocalStorage />,
        slugComponentFile: "use-local-storage",
        slugPreviewFile: "preview-use-local-storage",
      },
    ],
  },
};
