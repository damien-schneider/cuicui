import type { ComponentType } from "#/src/lib/types/component";
import { InlineCode } from "#/src/ui/cuicui/application-ui/code/inline-code/inline-code";

export const inlineCodeComponent: ComponentType = {
  isIframed: false,
  sizePreview: "xs",
  slug: "inline-code",
  variantList: [
    {
      name: "Default",
      component: <InlineCode />,
      slugPreviewFile: "inline-code",
    },
  ],
  title: "Inline Code",
  description: "A code snippet component with a copy to clipboard button.",
};
