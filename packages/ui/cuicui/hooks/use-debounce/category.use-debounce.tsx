import { TimerIcon } from "lucide-react";
import type { SingleComponentCategoryType } from "@/lib/types/component";
import PreviewUseDebounce from "@/cuicui/hooks/use-debounce/preview-use-debounce";

export const useDebounceCategory: SingleComponentCategoryType = {
  slug: "use-debounce",
  name: "Use debounce",
  description: "A hook that allows you to debounce the value of an input",
  releaseDateCategory: new Date("2024-09-16"),
  icon: TimerIcon,
  component: {
    sizePreview: "lg",

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
