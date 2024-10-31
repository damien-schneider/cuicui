import { ClipboardCopyIcon } from "lucide-react";
import type { SingleComponentCategoryType } from "@/lib/types/component";
import PreviewCopyToClipboard from "@/cuicui/hooks/use-copy-to-clipboard/preview-copy-to-clipboard";

export const useCopyToClipboardCategory: SingleComponentCategoryType = {
	slug: "use-copy-to-clipboard",
	name: "Use Copy to Clipboard",
	description: "A hook that allows you to copy text to the clipboard",
	releaseDateCategory: new Date("2024-08-20"),
	icon: ClipboardCopyIcon,
	previewCategory: {
		component: <PreviewCopyToClipboard />,
		previewScale: 0.8,
	},
	component: {
		sizePreview: "lg",

		variantList: [
			{
				name: "variant 1",
				component: <PreviewCopyToClipboard />,
				slugComponentFile: "use-copy-to-clipboard",
				slugPreviewFile: "preview-copy-to-clipboard",
			},
		],
	},
};
