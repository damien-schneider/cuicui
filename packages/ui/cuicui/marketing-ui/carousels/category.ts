import type { CategoryMetaType } from "@/lib/types/component";
import { GalleryHorizontalIcon } from "lucide-react";

export const carouselsCategory: CategoryMetaType = {
  name: "Carousels",
  description: "Showcase your product testimonials with style",
  releaseDateCategory: new Date("2024-08-10"),
  icon: GalleryHorizontalIcon,
};

export default carouselsCategory;
