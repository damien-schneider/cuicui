import FullComponent from "#/src/components/full-component";
import { getFileContentAsString } from "#/src/utils/get-file-content-as-string";
import { VercelNavigationVariant1 } from "./vercel-navigation/variant1";
import { VercelNavigationVariant2 } from "./vercel-navigation/variant2";

export default async function Page() {
  return (
    <FullComponent
      size="sm"
      componentList={[
        {
          variantName: "On hover effect",
          component: <VercelNavigationVariant1 />,
          code: await getFileContentAsString({
            componentSlug: "navigation",
            variantName: "/vercel-navigation/variant1",
          }),
        },
        {
          variantName: "On click effect",
          component: <VercelNavigationVariant2 />,
          code: await getFileContentAsString({
            componentSlug: "navigation",
            variantName: "/vercel-navigation/variant2",
          }),
        },
      ]}
      title="Vercel Navigation"
      description="A smooth and simple navigation bar inspired by Vercel one, with modern transitions and animations."
    />
  );
}
