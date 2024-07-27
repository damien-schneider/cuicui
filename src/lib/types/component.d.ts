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
  | "no-js";

export type LibraryBadge = "framer-motion" | "sonner" | "lucide-react";

export type FrameworkBadge =
  | "react"
  | "vue"
  | "svelte"
  | "angular"
  | "web-components"
  | "next";
