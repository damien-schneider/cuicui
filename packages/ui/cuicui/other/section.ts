import { RectangleEllipsisIcon } from "lucide-react";
import type { MultiComponentSectionType } from "@/lib/types/component";
import { cursorCategory } from "@/cuicui/other/cursors/category";
import { mockUpsCategory } from "@/cuicui/other/mock-ups/mock-ups.category";
import { patternsCategory } from "@/cuicui/other/patterns/category";
import { qrCodeCategory } from "@/cuicui/other/qr-code/category";
import { transitionWrappersCategory } from "@/cuicui/other/transition-wrappers/category";
import { creativeEffectCategory } from "@/cuicui/other/creative-effects/category";
export const otherSection: MultiComponentSectionType = {
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
    creativeEffectCategory,
  ],
};

export default otherSection;
