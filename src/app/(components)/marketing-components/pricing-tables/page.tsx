import ComingSoonCard from "#/src/components/coming-soon";
import FullComponent from "#/src/components/full-component";
import { getFileContentAsString } from "#/src/utils/get-file-content-as-string";

export default async function Page() {
  return (
    <>
      {/* <FullComponent
        size="md"
        componentList={[
          {
            variantName: "On hover effect",
            component: <TestimonialsVariant1 />,
            code: await getFileContentAsString({
              componentSlug: "testimonials",
              variantName: "/testimonials-component/variant1",
            }),
          },
        ]}
        title="Testimonials"
        description="A simple testimonials component with a slider on click"
      /> */}
      <ComingSoonCard />
    </>
  );
}
