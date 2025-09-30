"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function Carousel2() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{ align: "start", loop: true }}
      className="w-full max-w-3xl mx-auto"
    >
      {/* gap entre os itens */}
      <CarouselContent className="-ml-2">
        <CarouselItem className="pl-2 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3 flex justify-center ">
          <img
            src="src\components\carrosselSection1\PrimeiraColorir3d.jpg"
            alt="Crianças pintando"
            className="max-w-[260px] h-auto object-contain   pl-7 "
          />
        </CarouselItem>
        <CarouselItem className="pl-2 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3 flex justify-center">
          <img
            src="src\components\carrosselSection1\SegundaColorir3d.jpg"
            alt="Logo do site"
            className="max-w-[260px] h-auto object-contain rounded-xl"
          />
        </CarouselItem>
        <CarouselItem className="pl-2 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3 flex justify-center">
          <img
            src="src\components\carrosselSection1\TerceiraColorir3d.jpg"
            alt="Crianças pintando"
            className="max-w-[260px] h-auto object-contain rounded-xl"
          />
        </CarouselItem>
        <CarouselItem className="pl-2 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3 flex justify-center">
          <img
            src="src\components\carrosselSection1\QuartaColorir3d.jpg"
            alt="Crianças pintando"
            className="max-w-[260px] h-auto object-contain rounded-xl"
          />
        </CarouselItem>
        <CarouselItem className="pl-2 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3 flex justify-center">
          <img
            src="src\components\carrosselSection1\QuintaColorir3d.jpg"
            alt="Crianças pintando"
            className="max-w-[260px] h-auto object-contain rounded-xl"
          />
        </CarouselItem>



        <CarouselItem className="pl-2 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3 flex justify-center">
          <img
            src="src\components\carrosselSection1\crianca1.jpg"
            alt="Crianças pintando"
            className="max-w-[260px] h-auto object-contain rounded-xl"
          />
        </CarouselItem>
        <CarouselItem className="pl-2 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3 flex justify-center">
          <img
            src="src\components\carrosselSection1\crianca2.jpg"
            alt="Crianças pintando"
            className="max-w-[260px] h-auto object-contain rounded-xl"
          />
        </CarouselItem>
        <CarouselItem className="pl-2 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3 flex justify-center">
          <img
            src="src\components\carrosselSection1\DesenhoPintado.jpg"
            alt="Crianças pintando"
            className="max-w-[260px] h-auto object-contain rounded-xl"
          />
        </CarouselItem>

        <CarouselItem className="pl-2 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3 flex justify-center">
          <img
            src="src\components\carrosselSection1\Bloqueado.png"
            alt="Crianças pintando"
            className="max-w-[260px] h-auto object-contain rounded-xl ml-6"
          />
        </CarouselItem>
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
