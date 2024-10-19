import { FolderTreeIcon } from "lucide-react";
import type { CategoryType } from "@/lib/types/component";
import { PreviewRecursiveTree } from "@/src/application-ui/tree/recursive-tree/preview-recursive-tree";
import { recursiveTreeComponent } from "@/src/application-ui/tree/recursive-tree/recursive-tree.component";

export const treeCategory: CategoryType = {
	slug: "tree",
	name: "Tree",
	description: "Tree components",
	releaseDateCategory: new Date("2024-09-18"),
	icon: FolderTreeIcon,
	previewCategory: {
		component: <PreviewRecursiveTree />,
		previewScale: 1,
	},
	componentList: [recursiveTreeComponent],
};
