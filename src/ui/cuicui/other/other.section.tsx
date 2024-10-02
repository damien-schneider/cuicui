import type { SectionType } from "#/src/lib/types/component";
import { cursorCategory } from "#/src/ui/cuicui/other/cursors/cursor.category";
import { mockUpsCategory } from "#/src/ui/cuicui/other/mock-ups/mock-ups.category";
import { patternsCategory } from "#/src/ui/cuicui/other/patterns/patterns.category";
import { qrCodeCategory } from "#/src/ui/cuicui/other/qr-code/qr-code.category";
import { transitionWrappersCategory } from "#/src/ui/cuicui/other/transition-wrappers/transition-wrappers.category";
import { RectangleEllipsisIcon } from "lucide-react";
export const otherSection: SectionType = {
  name: "Other",
  slug: "other",
  type: "multiple-component",
  description:
    "A collection of creative advanced UI components for your projects.",
  icon: RectangleEllipsisIcon,
  categoriesList: [
    cursorCategory,
    mockUpsCategory,
    patternsCategory,
    transitionWrappersCategory,
    qrCodeCategory,
  ],
};
