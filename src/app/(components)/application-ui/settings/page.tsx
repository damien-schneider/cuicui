import FullComponent from "#/src/components/full-component";
import { getFileContentAsString } from "#/src/utils/get-file-content-as-string";
import DynamicSettingsVariant1 from "./dynamic-settings/variant1";

export default async function Page() {
  return (
    <FullComponent
      size="sm"
      componentList={[
        {
          variantName: "variant1",
          component: <DynamicSettingsVariant1 />,
          previewCode: await getFileContentAsString({
            componentSlug: "settings",
            variantName: "dynamic-settings/variant1",
          }),
        },
      ]}
      librariesBadges={["framer-motion", "lucide-react", "sonner"]}
      componentBadges={["updated"]}
      title="Dynamic Settings"
      description="Settings with lot of micro-interactions and animations."
      inspiration="UI Labs"
      inspirationLink="https://www.uilabs.dev/"
    />
  );
}
