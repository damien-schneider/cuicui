import { TimerIcon } from "lucide-react";
import type { SingleComponentCategoryType } from "#/src/lib/types/component";
import PreviewUseDebounce from "#/src/ui/cuicui/hooks/use-debounce/preview-use-debounce";

export const useDebounceCategory: SingleComponentCategoryType = {
  slug: "use-debounce",
  name: "Use debounce",
  description: "A hook that allows you to debounce the value of an input",
  releaseDateCategory: new Date("2024-09-16"),
  icon: TimerIcon,
  previewCategory: {
    component: <PreviewUseDebounce />,
    previewScale: 1,
  },
  component: {
    lastUpdatedDateComponent: new Date("2024-09-16"),
    sizePreview: "lg",
    isIframed: false,
    variantList: [
      {
        name: "variant 1",
        component: <PreviewUseDebounce />,
        slugComponentFile: "use-debounce",
        slugPreviewFile: "preview-use-debounce",
      },
    ],
  },
};
