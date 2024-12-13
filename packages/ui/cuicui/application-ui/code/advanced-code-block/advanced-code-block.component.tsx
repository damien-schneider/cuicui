import type { ComponentType } from "@/lib/types/component";
import PreviewAdvancedCodeBlock from "@/cuicui/application-ui/code/advanced-code-block/advanced-code-block.variant";
import PreviewAdvancedCodeBlockTabVariant from "@/cuicui/application-ui/code/advanced-code-block/advanced-code-block-tab.variant";

export const advancedCodeBlockComponent: ComponentType = {
  sizePreview: "sm",
  slug: "advanced-code-block",

  variantList: [
    {
      name: "Default",
      component: <PreviewAdvancedCodeBlock />,
      slugPreviewFile: "preview-advanced-code-block",
      slugComponentFile: "advanced-code-block",
    },
    {
      name: "With tabs",
      component: <PreviewAdvancedCodeBlockTabVariant />,
      slugPreviewFile: "preview-advanced-code-block-tab-variant",
      slugComponentFile: "advanced-code-block",
    },
  ],
  name: "Advanced Code Block",
  description: "A code snippet component with a copy to clipboard button.",
  inspiration: "Clerk",
  inspirationLink: "https://clerk.com/docs/quickstarts/nextjs",
};
