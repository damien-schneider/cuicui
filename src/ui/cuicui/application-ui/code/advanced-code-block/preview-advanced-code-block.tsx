import React from "react";
import { AdvancedCodeBlock } from "#/src/ui/cuicui/application-ui/code/advanced-code-block/advanced-code-block";

const codeToDisplay = `export const = explanations = {
  main : "This component needs more than the default code block to be displayed"
  detailed : "For now, if you want the exact same behaviour, please check the github"
}`;

export default function PreviewAdvancedCodeBlock() {
  return (
    <div className="p-2 max-w-2xl w-full">
      <AdvancedCodeBlock
        fileName="./explanations.ts"
        code={codeToDisplay}
        lang="typescript"
        theme="github-light"
      />
    </div>
  );
}
