import type { LucideIcon } from "lucide-react";
import type { StaticImageData } from "next/image";
import type { JSX, ReactNode } from "react";
import type { ComponentBadgeList } from "../badges.const";
export type Variant = `variant${number}`;

export interface ProcessedVariantType extends VariantType {
	previewCode: string;
	componentCode?: string;
}

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
	component: ReactNode | (() => ReactNode);
	previewScale: number;
	previewImage?: StaticImageData;
};

/*
------------------------------------
************ Sections **************
------------------------------------
*/

// Base interface for common properties
interface BaseSectionType {
	name: string;
	slug: string;
	description: string;
	icon: LucideIcon;
}

// Section with single-component type
interface SingleComponentSectionType extends BaseSectionType {
	type: "single-component";
	categoriesList: SingleComponentCategoryType[];
}

// Section with multi-component type
interface MultiComponentSectionType extends BaseSectionType {
	type: "multiple-component";
	categoriesList: CategoryType[];
}

// Section with page type
interface PageSectionType extends BaseSectionType {
	type: "page";
	pageList: PageCategoryType[];
}

// Union type for SectionType
export type SectionType =
	| SingleComponentSectionType
	| MultiComponentSectionType
	| PageSectionType;

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

type SingleComponentCategoryType = {
	slug: string;
	name: string;
	description: string;
	icon: LucideIcon;
	comingSoonCategory?: boolean;
	releaseDateCategory: Date;
	previewCategory?: PreviewComponent;
	component: SingleComponentType | null;
};

type PageCategoryType = {
	slug: string;
	name: string;
	icon: LucideIcon;
	description: string;
	component: JSX.Element;
};

/*
------------------------------------
************ Components ************
------------------------------------
*/

export type ComponentType = {
	name: string;
	description: string;
	isResizable?: boolean;
	componentBadges?: ComponentBadgeSlug[];
	isIframed?: boolean;
	rerenderButton?: boolean;
	inspiration?: string;
	inspirationLink?: string;
	sizePreview?: ComponentHeightType;
	slug: string;
	variantList: VariantType[];
};

export type SingleComponentType = {
	isResizable?: boolean;
	componentBadges?: ComponentBadgeSlug[];
	isIframed?: boolean;
	rerenderButton?: boolean;
	inspiration?: string;
	inspirationLink?: string;
	sizePreview?: ComponentHeightType;
	variantList: VariantType[];
};

/*
------------------------------------
************* Variants *************
------------------------------------
*/

export type VariantType = {
	name: string;
	component: JSX.Element | (() => JSX.Element);
	slugComponentFile?: string;
	slugPreviewFile: string;
};
