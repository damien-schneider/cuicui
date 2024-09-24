import type { ComponentType } from "#/src/lib/types/component";
import PreviewAdvancedCodeBlock from "#/src/ui/cuicui/application-ui/code/advanced-code-block/preview-advanced-code-block";
import PreviewAdvancedCodeBlockTabVariant from "#/src/ui/cuicui/application-ui/code/advanced-code-block/preview-advanced-code-block-tab-variant";

export const advancedCodeBlockComponent: ComponentType = {
  isIframed: false,
  sizePreview: "sm",
  slug: "advanced-code-block",
  releaseDateComponent: new Date("2024-08-23"),
  lastUpdatedDateComponent: new Date("2024-09-24"),
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
  title: "Advanced Code Block",
  description: "A code snippet component with a copy to clipboard button.",
  inspiration: "Clerk",
  inspirationLink: "https://clerk.com/docs/quickstarts/nextjs",
};
