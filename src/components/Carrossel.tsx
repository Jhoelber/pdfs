"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import type { EmblaOptionsType } from "embla-carousel";

type Slide = {
    src: string;
    alt: string;
};

const slides: Slide[] = [
    { src: "/crianca1.jpg", alt: "Criança 1 com cubo 3D" },
    { src: "/crianca2.jpg", alt: "Criança 2 com cubo 3D" },
    { src: "/crianca3.jpg", alt: "Criança 3 com cubo 3D" },
    { src: "/crianca5.png", alt: "Criança 4 com cubo 3D" },
    { src: "/crianca6.png", alt: "Criança 4 com cubo 3D" },
    { src: "/crianca7.png", alt: "Criança 4 com cubo 3D" },
    { src: "/crianca8.png", alt: "Criança 4 com cubo 3D" },
    { src: "/crianca9.png", alt: "Criança 4 com cubo 3D" },
    { src: "/crianca10.png", alt: "Criança 4 com cubo 3D" },
    { src: "/crianca11.png", alt: "Criança 4 com cubo 3D" },
   
];

const options: EmblaOptionsType = { align: "start", loop: true };

export default function KidsCarousel() {
    const autoplay = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    );

    const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current]);

    const scrollPrev = () => emblaApi?.scrollPrev();
    const scrollNext = () => emblaApi?.scrollNext();

    return (
        <section className="w-full">
            {/* faixa laranja + título */}
            <div className="bg-orange-600 py-8">
                <h2 className="text-white text-2xl sm:text-3xl font-bold text-center">
                    Confira os modelos feitos pelas crianças:
                </h2>
            </div>

            {/* card central */}
            <div className="container mx-auto px-4">
                <div className="mx-auto -mt-8 max-w-5xl rounded-xl border border-zinc-200 bg-white shadow-lg">
                    <div className="relative p-3 sm:p-4">
                        {/* viewport */}
                        <div
                            className="overflow-hidden"
                            ref={emblaRef}
                            onMouseEnter={() => autoplay.current.stop()}
                            onMouseLeave={() => autoplay.current.play()}
                        >
                            {/* container com gap (truque -ml-2 + pl-2) */}
                            <div className="flex -ml-2">
                                {slides.map((s, i) => (
                                    <div
                                        key={i}
                                        className="
                      
                      basis-full
                      sm:basis-1/2
                      md:basis-1/3
                      lg:basis-1/3
                      flex justify-center
                    "
                                    >
                                        <img
                                            src={s.src}
                                            alt={s.alt}
                                            className="max-w-[260px] h-auto object-contain "
                                            loading={i === 0 ? "eager" : "lazy"}
                                            decoding="async"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* setas */}
                        <button
                            onClick={scrollPrev}
                            aria-label="Anterior"
                            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border bg-white/90 px-3 py-2 shadow hover:bg-white"
                        >
                            ‹
                        </button>
                        <button
                            onClick={scrollNext}
                            aria-label="Próximo"
                            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border bg-white/90 px-3 py-2 shadow hover:bg-white"
                        >
                            ›
                        </button>
                    </div>

                    <p className="px-6 pb-6 text-center text-sm sm:text-base text-zinc-700">
                        Arraste e confira um material único, exclusivo e pensado para sua criança.
                    </p>
                </div>
            </div>
        </section>
    );
}
