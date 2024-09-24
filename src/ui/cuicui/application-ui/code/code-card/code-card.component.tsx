import type { ComponentType } from "#/src/lib/types/component";
import { CodeCardPreview } from "#/src/ui/cuicui/application-ui/code/code-card/code-card-preview";

export const codeCardComponent: ComponentType = {
  isIframed: false,
  sizePreview: "md",
  slug: "code-card",
  lastUpdatedDateComponent: new Date("2024-08-29"),
  variantList: [
    {
      name: "Default",
      component: <CodeCardPreview />,
      slugPreviewFile: "code-card-preview",
      slugComponentFile: "code-card",
    },
  ],
  title: "Code Card",
  description: "A code card component with a copy to clipboard button.",
};
