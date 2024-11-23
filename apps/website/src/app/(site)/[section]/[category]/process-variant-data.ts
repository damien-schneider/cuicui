import type {
  ComponentType,
  ProcessedVariantType,
  SingleComponentType,
  VariantType,
} from "@cuicui/ui/lib/types/component";
import { getFileContentAsString } from "#/src/utils/get-file-content-as-string";

interface ProcessedComponent extends ComponentType {
  componentList: ProcessedVariantType[];
}

export async function fetchVariantData({
  categorySlug,
  componentSlug,
  variant,
}: {
  categorySlug: string;
  componentSlug?: string;
  variant: VariantType;
}) {
  const variantName = variant.name;
  const variantSlugPreviewFile = variant.slugPreviewFile ?? variantName;
  const variantSlugComponentFile = variant.slugComponentFile ?? variantName;

  let previewCode: string | null = null;
  let componentCode: string | undefined;
  if (componentSlug) {
    previewCode = await getFileContentAsString({
      componentSlug: categorySlug,
      variantName: `${componentSlug}/${variantSlugPreviewFile}`,
    });

    componentCode = variant.slugComponentFile
      ? await getFileContentAsString({
          componentSlug: categorySlug,
          variantName: `${componentSlug}/${variantSlugComponentFile}`,
        })
      : undefined;
  } else {
    previewCode = await getFileContentAsString({
      componentSlug: categorySlug,
      variantName: variantSlugPreviewFile,
    });

    componentCode = variant.slugComponentFile
      ? await getFileContentAsString({
          componentSlug: categorySlug,
          variantName: variantSlugComponentFile,
        })
      : undefined;
  }
  return {
    ...variant,
    previewCode,
    componentCode,
  };
}

export async function fetchMultipleComponentData({
  componentList,
  categorySlug,
}: {
  componentList: ComponentType[];
  categorySlug: string;
}) {
  const processedComponents: ProcessedComponent[] = [];

  for (const component of componentList) {
    const processedVariants: ProcessedVariantType[] = [];

    for (const variant of component.variantList) {
      const processedVariant = await fetchVariantData({
        categorySlug,
        componentSlug: component.slug,
        variant,
      });
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

export async function fetchSingleComponentData({
  categorySlug,
  component,
}: {
  categorySlug: string;
  component: SingleComponentType;
}) {
  const processedVariants: ProcessedVariantType[] = [];

  for (const variant of component.variantList) {
    const processedVariant = await fetchVariantData({ categorySlug, variant });
    processedVariants.push(processedVariant);
  }

  return {
    ...component,
    componentList: processedVariants,
  };
}
