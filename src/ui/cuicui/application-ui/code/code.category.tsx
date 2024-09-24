import { Code2Icon } from "lucide-react";
import type { CategoryType } from "#/src/lib/types/component";
import { advancedCodeBlockComponent } from "#/src/ui/cuicui/application-ui/code/advanced-code-block/advanced-code-block.component";
import { CodeCardPreview } from "#/src/ui/cuicui/application-ui/code/code-card/code-card-preview";
import { codeCardComponent } from "#/src/ui/cuicui/application-ui/code/code-card/code-card.component";
import { codeSnippetComponent } from "#/src/ui/cuicui/application-ui/code/code-snippet/code-snippet.component";
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
    codeSnippetComponent,
    codeCardComponent,
    inlineCodeComponent,
    advancedCodeBlockComponent,
  ],
};
