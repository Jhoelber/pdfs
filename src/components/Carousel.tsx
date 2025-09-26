import React from "react";
import useEmblaCarousel from "embla-carousel-react";

type Slide = {
    src: string;
    alt: string;
};

const slides: Slide[] = [
    { src: "./123.png", alt: "Criança 1 com cubo 3D" },
    { src: "./imgteste.png", alt: "Criança 2 com cubo 3D" },
    { src: "./123.png", alt: "Criança 3 com cubo 3D" },
    { src: "./imgteste.png", alt: "Criança 4 com cubo 3D" },
    { src: "./123.png", alt: "Criança 5 com cubo 3D" },
];

export default function KidsCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const onSelect = React.useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    React.useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", onSelect);
        onSelect();
    }, [emblaApi, onSelect]);

    const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
    const scrollNext = () => emblaApi && emblaApi.scrollNext();

    return (
        <section className="w-full">
            {/* faixa laranja + título */}
            <div className="bg-orange-600 py-8">
                <h2 className="text-white text-2xl sm:text-3xl font-bold text-center">
                    Confira os modelos feitos pelas crianças:
                </h2>
            </div>

            {/* card central com sombra */}
            <div className="container mx-auto px-4">
                <div className="mx-auto -mt-8 max-w-5xl rounded-xl border border-zinc-200 bg-white shadow-lg">
                    <div className="relative p-3 sm:p-4">
                        {/* viewport */}
                        <div className="overflow-hidden rounded-lg" ref={emblaRef}>
                            {/* container */}
                            <div className="flex">
                                {slides.map((s, i) => (
                                    <div
                                        key={i}
                                        className="min-w-0 flex-[0_0_100%] flex items-center justify-center"
                                    >
                                        <img
                                            src={s.src}
                                            alt={s.alt}
                                            className="h-[260px] sm:h-[360px] w-56 object-cover"
                                            loading={i === 0 ? "eager" : "lazy"}
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

                        {/* bolinhas */}
                        <div className="mt-3 flex items-center justify-center gap-2">
                            {slides.map((_, i) => (
                                <span
                                    key={i}
                                    className={`h-2 w-2 rounded-full ${selectedIndex === i ? "bg-zinc-800" : "bg-zinc-300"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    <p className="px-6 pb-6 text-center text-sm sm:text-base text-zinc-700">
                        Arraste e confira um material único, exclusivo e pensado para sua criança.
                    </p>
                </div>
            </div>
        </section>
    );
}
