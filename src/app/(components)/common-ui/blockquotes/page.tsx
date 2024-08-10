import FullComponent from "#/src/components/full-component";
import { getFileContentAsString } from "#/src/utils/get-file-content-as-string";
import ModernSimpleQuoteVariant1 from "./modern-simple-quote/variant1";

export default async function Page() {
  return (
    <>
      <FullComponent
        size="sm"
        componentList={[
          {
            variantName: "On hover effect",
            component: <ModernSimpleQuoteVariant1 />,
            code: await getFileContentAsString({
              componentSlug: "blockquotes",
              variantName: "/modern-simple-quote/variant1",
            }),
          },
        ]}
        title="Simple modern quote"
        description="A simple modern quote with a border on the left side."
      />
    </>
  );
}
