export type Variant = `variant${number}`;

export type VariantComponent = {
  variantName: string;
  component: React.JSX.Element;
  code: string;
};

export type ComponentBadge =
  | "new"
  | "updated"
  | "deprecated"
  | "experimental"
  | "no-js"
  | "prefer-desktop";

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
};

export type CategoryItem = {
  name: string;
  slug: string;
  href?: string;
  description: string;
  comingSoon?: boolean;
  releaseDate?: Date;
  preview?: PreviewComponent;
};
