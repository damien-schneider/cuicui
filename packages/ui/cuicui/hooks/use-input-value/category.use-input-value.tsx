import { TextCursorInputIcon } from "lucide-react";
import type { SingleComponentCategoryType } from "@/lib/types/component";
import { PreviewUseInputValue } from "@/cuicui/hooks/use-input-value/preview-use-input-value";
export const useInputValueCategory: SingleComponentCategoryType = {
  slug: "use-input-value",
  name: "Use Input Value",
  description: "A hook that allows you to manage the value of an input field",
  releaseDateCategory: new Date("2024-09-28"),
  icon: TextCursorInputIcon,
  previewCategory: {
    component: <PreviewUseInputValue />,
    previewScale: 0.8,
  },
  component: {
    sizePreview: "sm",

    variantList: [
      {
        name: "variant 1",
        component: <PreviewUseInputValue />,
        slugComponentFile: "use-input-value",
        slugPreviewFile: "preview-use-input-value",
      },
    ],
  },
};
