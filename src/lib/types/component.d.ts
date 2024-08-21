import type { LucideIcon } from "lucide-react";
import type { ComponentBadgeList } from "../badges.const";

export type Variant = `variant${number}`;

export type VariantComponent = {
  variantName: string;
  component: React.JSX.Element;
  previewCode: string;
  componentCode?: string;
};

export type ComponentBadgeSlug = (typeof ComponentBadgeList)[number]["slug"];

export type LibraryBadge = "framer-motion" | "sonner" | "lucide-react";

export type FrameworkBadge =
  | "react"
  | "vue"
  | "svelte"
  | "angular"
  | "web-components"
  | "next";

export type PreviewComponent = {
  component: ReactNode;
  previewScale: number;
  previewImage?: StaticImageData;
};

export type CategoryItem = {
  name: string;
  slug: string;
  href?: string;
  description: string;
  comingSoon?: boolean;
  releaseDate?: Date;
  preview?: PreviewComponent;
  updatedDate?: Date;
  icon?: LucideIcon;
};
