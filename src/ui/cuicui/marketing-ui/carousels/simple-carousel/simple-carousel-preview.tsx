import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "#/src/ui/cuicui/marketing-ui/carousels/simple-carousel/simple-carousel";

import Image from "next/image";
import Image1 from "#/src/assets/deepmind-images/deepmind-picture-1.jpg";
import Image2 from "#/src/assets/deepmind-images/deepmind-picture-2.jpg";
import Image3 from "#/src/assets/deepmind-images/deepmind-picture-3.jpg";
import Image4 from "#/src/assets/deepmind-images/deepmind-picture-4.jpg";
import Image5 from "#/src/assets/deepmind-images/deepmind-picture-5.jpg";

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
          <CarouselItem key={`carousel-image-${index}`} className="">
            <Image
              className=" w-full h-full rounded-xl"
              src={image}
              alt=""
              width={300}
              height={200}
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
