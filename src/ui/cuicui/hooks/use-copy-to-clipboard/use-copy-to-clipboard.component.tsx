import { ClipboardCopyIcon } from "lucide-react";
import type { CategoryType } from "#/src/lib/types/component";
import PreviewCopyToClipboard from "#/src/ui/cuicui/hooks/use-copy-to-clipboard/hook/preview-copy-to-clipboard";

export const useCopyToClipboardCategory: CategoryType = {
  slug: "use-copy-to-clipboard",
  name: "Copy to Clipboard",
  description: "A hook that allows you to copy text to the clipboard",
  releaseDateCategory: new Date("2024-08-20"),
  icon: ClipboardCopyIcon,
  previewCategory: {
    component: <PreviewCopyToClipboard />,
    previewScale: 0.8,
  },
  componentList: [
    {
      sizePreview: "lg",
      slug: "hook",
      isIframed: false,
      title: "Copy to Clipboard",
      description: "A hook that allows you to copy text to the clipboard",
      variantList: [
        {
          name: "variant 1",
          component: <PreviewCopyToClipboard />,
          slugComponentFile: "use-copy-to-clipboard",
          slugPreviewFile: "preview-copy-to-clipboard",
        },
      ],
    },
  ],
};
