export interface FoundItem {
  varName: string;
  importPath: string;
}

export interface FoundSection extends FoundItem {
  sectionName: string;
}

export interface FoundCategory extends FoundItem {
  sectionName: string;
  categoryName: string;
}

export interface FoundComponent extends FoundItem {
  sectionName: string;
  categoryName: string;
  componentName: string;
}

export interface FoundVariant extends FoundItem {
  sectionName: string;
  categoryName: string;
  componentName: string;
  variantName: string;
}
