import FullComponent from "#/src/components/full-component";
import { getFileContentAsString } from "#/src/utils/get-file-content-as-string";
import PreviewCopyToClipboard from "./hook/preview-copy-to-clipboard";

export default async function Page() {
  return (
    <>
      <FullComponent
        size="xs"
        componentList={[
          {
            variantName: "variant 1",
            component: <PreviewCopyToClipboard />,
            previewCode: await getFileContentAsString({
              componentSlug: "use-copy-to-clipboard",
              variantName: "hook/preview-copy-to-clipboard",
            }),
            componentCode: await getFileContentAsString({
              componentSlug: "use-copy-to-clipboard",
              variantName: "hook/use-copy-to-clipboard",
            }),
          },
        ]}
        isIframed={false}
        title="Copy to Clipboard"
        description="A hook that allows you to copy text to the clipboard."
      />
    </>
  );
}
