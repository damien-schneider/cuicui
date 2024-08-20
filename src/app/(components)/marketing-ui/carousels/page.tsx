import FullComponent from "#/src/components/full-component";
import { getFileContentAsString } from "#/src/utils/get-file-content-as-string";
import { CarouselCylindricalVariant1 } from "./cylindric-3d-carousel/variant1";

export default async function Page() {
  return (
    <>
      <FullComponent
        size="xs"
        componentList={[
          {
            variantName: "variant 1",
            component: <CarouselCylindricalVariant1 />,
            previewCode: await getFileContentAsString({
              componentSlug: "carousels",
              variantName: "cylindric-3d-carousel/variant1",
            }),
          },
        ]}
        isIframed={false}
        title="Cylindric 3D Carousel"
        description="A 3D carousel that rotates in a cylindrical way. It's perfect for showcasing multiple images or products."
        inspiration="Ibelick lab"
        inspirationLink="https://ibelick.com/lab/3d-photo-carousel"
      />
    </>
  );
}
