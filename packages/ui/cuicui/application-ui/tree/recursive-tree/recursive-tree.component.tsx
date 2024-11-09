import type { ComponentType } from "@/lib/types/component";
import { PreviewRecursiveTree } from "@/cuicui/application-ui/tree/recursive-tree/preview-recursive-tree";
import { PreviewRecursiveTreeLessAnimations } from "@/cuicui/application-ui/tree/recursive-tree/preview-recursive-tree-less-animations";

export const recursiveTreeComponent: ComponentType = {
	sizePreview: "lg",
	slug: "recursive-tree",
	variantList: [
		{
			name: "Default",
			component: <PreviewRecursiveTree />,
			slugPreviewFile: "preview-recursive-tree",
			slugComponentFile: "recursive-tree",
		},
		{
			name: "Less animations",
			component: <PreviewRecursiveTreeLessAnimations />,
			slugPreviewFile: "preview-recursive-tree-less-animations",
			slugComponentFile: "recursive-tree-less-animations",
		},
	],
	name: "Recursive Tree",
	description:
		"A tree component with recursive children. Without any limit with animated collapse and without needing to know the depth or to specify parent component.",
};
