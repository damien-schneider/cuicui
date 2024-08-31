import { notFound } from "next/navigation";
import ComingSoonCard from "#/src/components/coming-soon";
import FullComponent from "#/src/components/full-component";
import { SectionsList } from "#/src/lib/cuicui-components/sections-list";
import { getFileContentAsString } from "#/src/utils/get-file-content-as-string";

export async function generateStaticParams() {
  // Iterate over the SectionsList to create all possible combinations of section and category
  const params = SectionsList.flatMap((section) =>
    section.categoriesList.map((category) => ({
      section: section.slug,
      category: category.slug,
    })),
  );

  // Return the generated params array
  return params;
}

export default async function Page({
  params,
}: Readonly<{
  params: {
    section: string;
    category: string;
  };
}>) {
  const section = SectionsList.find(
    (section) => section.slug === params.section,
  );

  const category = section?.categoriesList.find(
    (category) => category.slug === params.category,
  );

  if (!category) {
    return notFound();
  }

  // Use Promise.all to wait for all the async operations
  if (category.comingSoonCategory) {
    return <ComingSoonCard />;
  }
  if (!category.componentList) {
    return notFound();
  }

  //TODO: Refactor this to use async await functions instead of Promise.all
  const componentList = await Promise.all(
    category.componentList.map(async (component) => ({
      ...component,
      size: component.sizePreview,
      componentList: await Promise.all(
        component.variantList.map(async (variant) => ({
          variantName: variant.name,
          component: variant.component,

          previewCode: await getFileContentAsString({
            componentSlug: category.slug,
            variantName: `${component.slug}/${
              variant.slugPreviewFile ?? variant.name
            }`,
          }),

          componentCode: variant.slugComponentFile
            ? await getFileContentAsString({
                componentSlug: category.slug,
                variantName: `${component.slug}/${
                  variant.slugComponentFile ?? variant.name
                }`,
              })
            : undefined,
        })),
      ),
      isIframed: component.isIframed ?? false,
    })),
  );

  return (
    <>
      {componentList.map((component) => (
        <FullComponent
          key={component.title}
          size={component.size}
          componentList={component.componentList}
          isIframed={component.isIframed}
          title={component.title}
          description={component.description}
          rerenderButton={component.rerenderButton}
          isResizable={component.isResizable}
          inspiration={component.inspiration}
          inspirationLink={component.inspirationLink}
          isChildUsingHeightFull={component.isChildUsingHeightFull}
        />
      ))}
    </>
  );
}
