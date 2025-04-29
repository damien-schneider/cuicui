import type {
  ComponentMetaType,
  SectionMetaType,
  CategoryMetaType,
} from "@/lib/types/component";

export interface FoundItem {
  varName: string;
  importPath: string;
  filename: string;
  pathname: string;
}

export interface FoundSection extends FoundItem {
  sectionSlug: string;
  meta: SectionMetaType;
}

export interface FoundCategory extends FoundItem {
  sectionSlug: string;
  categorySlug: string;
  meta: CategoryMetaType;
}

export interface FoundComponent extends FoundItem {
  sectionSlug: string;
  categorySlug: string;
  componentSlug: string;
  meta: ComponentMetaType;
}

export interface FoundVariant extends FoundItem {
  sectionSlug: string;
  categorySlug: string;
  componentSlug: string;
  variantSlug: string;
}
