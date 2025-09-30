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

        <CarouselItem className="pl-2 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3 flex justify-center">
          <img
            src="/carrosselSection1/TerceiraColorir3d.jpg"
            alt="Crianças pintando"
            className="max-w-[260px] h-auto object-contain rounded-xl"
          />
        </CarouselItem>

        <CarouselItem className="pl-2 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3 flex justify-center">
          <img
            src="/carrosselSection1/Crianca1.jpg"
            alt="Crianças pintando"
            className="max-w-[260px] h-auto object-contain rounded-xl"
          />
        </CarouselItem>

        <CarouselItem className="pl-2 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3 flex justify-center">
          <img
            src="/carrosselSection1/Grito.jpg"
            alt="Logo do site"
            className="max-w-[260px] h-auto object-contain rounded-xl"
          />
        </CarouselItem>




        <CarouselItem className="pl-2 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3 flex justify-center">
          <img
            src="/carrosselSection1/Crianca2.jpg"
            alt="Crianças pintando"
            className="max-w-[260px] h-auto object-contain rounded-xl"
          />
        </CarouselItem>

        <CarouselItem className="pl-2 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3 flex justify-center">
          <img
            src="/carrosselSection1/Mulher.jpg"
            alt="Crianças pintando"
            className="max-w-[260px] h-auto object-contain rounded-xl"
          />
        </CarouselItem>
        <CarouselItem className="pl-2 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3 flex justify-center">
          <img
            src="/carrosselSection1/DesenhoPintado.jpg"
            alt="Crianças pintando"
            className="max-w-[260px] h-auto object-contain rounded-xl"
          />
        </CarouselItem>
        <CarouselItem className="pl-2 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3 flex justify-center">
          <img
            src="/carrosselSection1/QuintaColorir3d.jpg"
            alt="Crianças pintando"
            className="max-w-[260px] h-auto object-contain rounded-xl"
          />
        </CarouselItem>





        <CarouselItem className="pl-2 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3 flex justify-center">
          <img
            src="/carrosselSection1/Bloqueado.png"
            alt="Crianças pintando"
            className="max-w-[260px] h-auto object-contain rounded-xl m-6"
          />
        </CarouselItem>
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
