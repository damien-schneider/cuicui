import type { CategoryType } from "#/src/lib/types/component";
import FileDropzone from "#/src/ui/cuicui/common-ui/inputs/droppable-file/variant1";
import { PreviewModernSimpleInput } from "#/src/ui/cuicui/common-ui/inputs/modern-simple-input/preview-simple-modern-input";
import { TextCursorInputIcon } from "lucide-react";

export const inputsCategory: CategoryType = {
  slug: "inputs",
  name: "Inputs",
  description: "Inputs with various styles and interactions",
  releaseDateCategory: new Date("2024-08-20"),
  icon: TextCursorInputIcon,
  previewCategory: {
    component: <FileDropzone />,
    previewScale: 1,
  },
  componentList: [
    {
      sizePreview: "sm",
      slug: "droppable-file",
      lastUpdatedDateComponent: new Date("2024-08-20"),
      variantList: [
        {
          name: "Droppable Zone",
          component: <FileDropzone />,
          slugPreviewFile: "variant1",
        },
      ],
      title: "Droppable File",
      description:
        "A file dropzone that shows a preview of the file when hovered.",
      isIframed: false,
    },
    {
      sizePreview: "sm",
      slug: "modern-simple-input",
      lastUpdatedDateComponent: new Date("2024-09-16"),
      variantList: [
        {
          name: "Variant 1",
          component: <PreviewModernSimpleInput />,
          slugPreviewFile: "preview-simple-modern-input",
          slugComponentFile: "modern-simple-input",
        },
      ],
      title: "Modern Simple Input",
      description:
        "A simple input that can be used in any project with any artistic style.",
      isIframed: false,
    },
  ],
};
