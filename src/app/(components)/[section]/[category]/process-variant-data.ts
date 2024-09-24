import type {
  ComponentType,
  ComponentVariantType,
} from "#/src/lib/types/component";
import { getFileContentAsString } from "#/src/utils/get-file-content-as-string";

interface ProcessedVariant extends ComponentVariantType {
  previewCode: string;
  componentCode?: string;
}

interface ProcessedComponent extends ComponentType {
  componentList: ProcessedVariant[];
}

export async function fetchVariantData(
  categorySlug: string,
  componentSlug: string,
  variant: ComponentVariantType,
) {
  const variantName = variant.name;
  const variantSlugPreviewFile = variant.slugPreviewFile ?? variantName;
  const variantSlugComponentFile = variant.slugComponentFile ?? variantName;

  const previewCode = await getFileContentAsString({
    componentSlug: categorySlug,
    variantName: `${componentSlug}/${variantSlugPreviewFile}`,
  });

  const componentCode = variant.slugComponentFile
    ? await getFileContentAsString({
        componentSlug: categorySlug,
        variantName: `${componentSlug}/${variantSlugComponentFile}`,
      })
    : undefined;

  return {
    ...variant,
    previewCode,
    componentCode,
  };
}

export async function fetchComponentData({
  componentList,
  categorySlug,
}: {
  componentList: ComponentType[];
  categorySlug: string;
}) {
  const processedComponents: ProcessedComponent[] = [];

  for (const component of componentList) {
    const processedVariants: ProcessedVariant[] = [];

    for (const variant of component.variantList) {
      const processedVariant = await fetchVariantData(
        categorySlug,
        component.slug,
        variant,
      );
      processedVariants.push(processedVariant);
    }

    processedComponents.push({
      ...component,
      sizePreview: component.sizePreview,
      componentList: processedVariants,
      isIframed: component.isIframed ?? false,
    });
  }

  return processedComponents;
}
