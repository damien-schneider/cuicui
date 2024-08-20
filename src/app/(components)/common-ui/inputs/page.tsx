import FullComponent from "#/src/components/full-component";
import { getFileContentAsString } from "#/src/utils/get-file-content-as-string";
import FileDropzone from "./droppable-file/variant1";

export default async function Page() {
  return (
    <>
      <FullComponent
        size="sm"
        componentList={[
          {
            variantName: "Droppable Zone",
            component: <FileDropzone />,
            componentCode: await getFileContentAsString({
              componentSlug: "inputs",
              variantName: "/droppable-file/variant1",
            }),
            previewCode: await getFileContentAsString({
              componentSlug: "inputs",
              variantName: "/droppable-file/preview-variant1",
            }),
          },
        ]}
        title="Droppable File"
        description="A file dropzone that shows a preview of the file when hovered."
        isIframed={false}
      />
    </>
  );
}
