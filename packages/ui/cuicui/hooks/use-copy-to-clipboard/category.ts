import { ClipboardCopyIcon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const useCopyToClipboardCategory: CategoryMetaType = {
  name: "Use Copy to Clipboard",
  description: "A hook that allows you to copy text to the clipboard",
  latestUpdateDate: new Date("2024-08-20"),
  icon: ClipboardCopyIcon,
};

export default useCopyToClipboardCategory;
