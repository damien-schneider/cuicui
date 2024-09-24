import type { LucideIcon } from "lucide-react";
import type { ComponentBadgeList } from "../badges.const";

export type Variant = `variant${number}`;

export type VariantComponent = {
  name: string;
  component: React.JSX.Element;
  previewCode: string;
  componentCode?: string;
};

export type ComponentBadgeSlug = (typeof ComponentBadgeList)[number]["slug"];

export type FrameworkBadge =
  | "react"
  | "vue"
  | "svelte"
  | "angular"
  | "web-components"
  | "next";

export type ComponentHeightType = "xs" | "sm" | "md" | "lg" | "xl";

/*
-----------------------------
************ New ************
-----------------------------
*/

export type PreviewComponent = {
  component: ReactNode;
  previewScale: number;
  previewImage?: StaticImageData;
};

/*
------------------------------------
************ Sections **************
------------------------------------
*/

export type SectionType = {
  name: string;
  slug: string;
  categoriesList: CategoryType[];
};

/*
------------------------------------
************ Categories ************
------------------------------------
*/

type CategoryType = {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
  comingSoonCategory?: boolean;
  releaseDateCategory: Date;
  previewCategory?: PreviewComponent;
  componentList: ComponentType[] | null;
};

/*
------------------------------------
************ Components ************
------------------------------------
*/

export type ComponentType = {
  title: string;
  description: string;
  releaseDateComponent?: Date;
  lastUpdatedDateComponent?: Date;
  isResizable?: boolean;
  componentBadges?: ComponentBadgeSlug[];
  isIframed?: boolean;
  rerenderButton?: boolean;
  isChildUsingHeightFull?: boolean;
  inspiration?: string;
  inspirationLink?: string;
  sizePreview: ComponentHeightType;
  slug: string;
  variantList: ComponentVariantType[];
};

/*
------------------------------------
************ Variants ************
------------------------------------
*/

export type ComponentVariantType = {
  name: string;
  component: JSX.Element;
  slugComponentFile?: string;
  slugPreviewFile: string;
};
