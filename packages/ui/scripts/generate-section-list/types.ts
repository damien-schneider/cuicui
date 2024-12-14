export interface FoundItem {
  varName: string;
  importPath: string;
  filename: string;
  pathname: string;
}

export interface FoundSection extends FoundItem {
  sectionSlug: string;
}

export interface FoundCategory extends FoundItem {
  sectionSlug: string;
  categorySlug: string;
}

export interface FoundComponent extends FoundItem {
  sectionSlug: string;
  categorySlug: string;
  componentSlug: string;
}

export interface FoundVariant extends FoundItem {
  sectionSlug: string;
  categorySlug: string;
  componentSlug: string;
  variantSlug: string;
}
