import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/cuicui/marketing-ui/carousels/simple-carousel/simple-carousel";

import Image from "next/image";
import Image1 from "@/assets/deepmind-images/deepmind-picture-1.jpg";
import Image2 from "@/assets/deepmind-images/deepmind-picture-2.jpg";
import Image3 from "@/assets/deepmind-images/deepmind-picture-3.jpg";
import Image4 from "@/assets/deepmind-images/deepmind-picture-4.jpg";
import Image5 from "@/assets/deepmind-images/deepmind-picture-5.jpg";

const imageArray = [Image1, Image2, Image3, Image4, Image5];

export function SimpleCarouselPreview() {
  return (
    <Carousel
      className="w-full max-w-xs"
      opts={{
        align: "center",
        loop: true,
      }}
    >
      <CarouselContent className="rounded-xl">
        {imageArray.map((image, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <CarouselItem className="" key={`carousel-image-${index}`}>
            <Image
              alt=""
              className=" h-full w-full rounded-xl"
              height={200}
              src={image}
              width={300}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselDots />
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default SimpleCarouselPreview;
