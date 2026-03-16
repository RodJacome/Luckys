"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { CarouselData } from "../data/carouselData";
import Link from "next/link";

export const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 }),
  ]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-12 font-sans font-thin">
      {/* Novedades */}
      <h1 className="flex items-center justify-center text-6xl mb-8">
        NOVEDADES
      </h1>
      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-6 mr-2">
          {CarouselData.map(({ id, picture, title, description, url }) => (
            <div
              key={id}
              className="pl-6 flex-[0_0_100.000%] md:flex-[0_0_50.000%] lg:flex-[0_0_33.333%]"
            >
              <div className="bg-white shadow-md overflow-hidden h-full">
                {/* Imagen */}
                <div className="relative w-full h-80">
                  <Image
                    src={picture}
                    alt={title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Contenido */}
                <div className="p-4 flex flex-col gap-2">
                  <h1 className="text-lg font-extralight text-gray-800">
                    {title}
                  </h1>

                  <p className="text-sm text-gray-600">{description}</p>

                  <Link
                    href={url}
                    className="flex items-center justify-center mt-2 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 w-40"
                  >
                    Ver más
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Flecha izquierda */}
      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow hover:bg-white"
      >
        ←
      </button>

      {/* Flecha derecha */}
      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow hover:bg-white"
      >
        →
      </button>
    </div>
  );
};
