import { Code2Icon } from "lucide-react";
import type { CategoryType } from "@/lib/types/component";
import { advancedCodeBlockComponent } from "@/cuicui/application-ui/code/advanced-code-block/advanced-code-block.component";
import { codeCardComponent } from "@/cuicui/application-ui/code/code-card/code-card.component";
import { codeSnippetComponent } from "@/cuicui/application-ui/code/code-snippet/code-snippet.component";
import { inlineCodeComponent } from "@/cuicui/application-ui/code/inline-code/inline-code.component";

export const codeCategory: CategoryType = {
  slug: "code",
  name: "Code",
  description: "Code components with special interactions",
  releaseDateCategory: new Date("2024-08-20"),
  icon: Code2Icon,
  componentList: [
    codeSnippetComponent,
    codeCardComponent,
    inlineCodeComponent,
    advancedCodeBlockComponent,
  ],
};
