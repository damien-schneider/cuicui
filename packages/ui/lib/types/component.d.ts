import type { LucideIcon } from "lucide-react";
import type { JSX } from "react";
import type { ComponentBadgeList } from "../badges.const";
export type Variant = `variant${number}`;

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
------------------------------------
************* Sections *************
------------------------------------
*/

export type SectionMetaType = {
  name: string;
  description: string;
  icon: LucideIcon;
};

export type SectionType = {
  meta: SectionMetaType;
  slug: string;
  categories: CategoryType[];
};

/*
------------------------------------
************* Category *************
------------------------------------
*/

export type CategoryMetaType = {
  name: string;
  description: string;
  latestUpdateDate: Date;
  icon: LucideIcon;
  isComingSoon?: boolean;
};

export type CategoryType = {
  meta: CategoryMetaType;
  slug: string;
  components: ComponentType[];
};

/*
------------------------------------
************* Component *************
------------------------------------
*/

export type ComponentMetaType = {
  name: string;
  description: string;
  isResizable?: boolean;
  componentBadges?: ComponentBadgeSlug[];
  isIframed?: boolean;
  rerenderButton?: boolean;
  inspiration?: string;
  inspirationLink?: string;
  sizePreview?: ComponentHeightType;
};

export type ComponentType = {
  meta: ComponentMetaType;
  slug: string;
  variants: VariantType[];
};

/*
------------------------------------
************* Variant *************
------------------------------------
*/

export type VariantType = {
  name: string;
  slug: string;
  pathname: string;
  variantComponent: () => JSX.Element;
  // previewPath: string; // Not needed ?
};
