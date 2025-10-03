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
    Autoplay({ delay: 1700, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{ align: "start", loop: true }}
      className="w-full max-w-3xl mx-auto"
    >
      {/* gap entre os itens */}
      <CarouselContent className="-ml-2">
        {[
          "/carrosselSection1/TerceiraColorir3d.jpg",
          "/carrosselSection1/Crianca1.jpg",
          "/carrosselSection1/Grito.jpg",
          "/carrosselSection1/Crianca2.jpg",
          "/carrosselSection1/Mulher.jpg",
          "/carrosselSection1/DesenhoPintado.jpg",
          "/carrosselSection1/QuintaColorir3d.jpg",
          "/carrosselSection1/Bloqueado.png",
        ].map((src, i) => (
          <CarouselItem
            key={i}
            className="pl-2 shrink-0 basis-1/2 sm:basis-1/3 md:basis-1/3 lg:basis-1/3 flex justify-center"
          >
            <img
              src={src}
              alt="slide"
              className="w-full max-w-[260px] h-auto object-contain rounded-xl"
              draggable={false}
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
