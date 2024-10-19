import { AdvancedCodeBlock } from "@/src/application-ui/code/advanced-code-block/advanced-code-block";

const codeToDisplay = `export const = explanations = {
  main : "This component needs more than the default code block to be displayed"
  detailed : "For now, if you want the exact same behaviour, please check the github"
}`;

export default function PreviewAdvancedCodeBlock() {
	return (
		<div className="w-full max-w-2xl p-2">
			<AdvancedCodeBlock
				code={codeToDisplay}
				fileName="./explanations.ts"
				lang="typescript"
				theme="github-light"
			/>
		</div>
	);
}
