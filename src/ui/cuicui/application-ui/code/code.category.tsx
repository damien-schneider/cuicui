import { Code2Icon } from "lucide-react";
import type { CategoryType } from "#/src/lib/types/component";
import { advancedCodeBlockComponent } from "#/src/ui/cuicui/application-ui/code/advanced-code-block/advanced-code-block.component";
import { CodeCardPreview } from "#/src/ui/cuicui/application-ui/code/code-card/code-card-preview";
import PreviewCommandVariant1 from "#/src/ui/cuicui/application-ui/code/code-snippet/preview-variant1";
import { inlineCodeComponent } from "#/src/ui/cuicui/application-ui/code/inline-code/inline-code.component";

export const codeCategory: CategoryType = {
  slug: "code",
  name: "Code",
  description: "Code components with special interactions",
  releaseDateCategory: new Date("2024-08-20"),
  icon: Code2Icon,
  previewCategory: {
    component: <CodeCardPreview />,
    previewScale: 0.8,
  },
  componentList: [
    {
      isIframed: false,
      sizePreview: "xs",
      slug: "code-snippet",
      variantList: [
        {
          name: "variant1",
          component: <PreviewCommandVariant1 />,
          slugPreviewFile: "preview-variant1",
          slugComponentFile: "variant1",
        },
      ],
      title: "Code Snippet",
      description: "A code snippet component with a copy to clipboard button.",
    },
    {
      isIframed: false,
      sizePreview: "md",
      slug: "code-card",
      lastUpdatedDateComponent: new Date("2024-08-29"),
      variantList: [
        {
          name: "variant1",
          component: <CodeCardPreview />,
          slugPreviewFile: "code-card-preview",
          slugComponentFile: "code-card",
        },
      ],
      title: "Code Card",
      description: "A code card component with a copy to clipboard button.",
    },
    inlineCodeComponent,
    advancedCodeBlockComponent,
  ],
};
