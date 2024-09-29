import type { ComponentType } from "#/src/lib/types/component";
import { PreviewInlineCode } from "#/src/ui/cuicui/application-ui/code/inline-code/preview-inline-code";

export const inlineCodeComponent: ComponentType = {
  isIframed: false,
  sizePreview: "xs",
  slug: "inline-code",
  lastUpdatedDateComponent: new Date("2024-08-21"),
  variantList: [
    {
      name: "Default",
      component: <PreviewInlineCode />,
      slugPreviewFile: "preview-inline-code",
      slugComponentFile: "inline-code",
    },
  ],
  title: "Inline Code",
  description: "A code snippet component with a copy to clipboard button.",
};
