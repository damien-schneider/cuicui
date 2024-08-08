import FullComponent from "#/src/components/full-component";
import { getFileContentAsString } from "#/src/utils/get-file-content-as-string";
import { StepWithStickyColorVariant1 } from "./code/variant1";

export default async function Page() {
  return (
    <FullComponent
      size="sm"
      componentList={[
        {
          variantName: "variant1",
          component: <StepWithStickyColorVariant1 />,
          code: await getFileContentAsString({
            componentSlug: "static-steppers",
            variantName: "code/variant1",
          }),
        },
      ]}
      librariesBadges={["framer-motion", "lucide-react", "sonner"]}
      componentBadges={["updated"]}
      title="Simple static stepper"
      description="A simple static stepper component to display a list of steps."
      inspiration="Hooks Scriptkavi manual installation"
      inspirationLink="https://hooks.scriptkavi.com/docs/hooks/battery"
    />
  );
}
