"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback } from "react";

import { Button } from "@/components/ui";
import { CarouselCount, useCarouselCount } from "@/modules/News/CarouselCount";
import NewsCarousel from "@/modules/News/NewsCarousel";

const News = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const { carouselCount, selectedCarousel } = useCarouselCount(emblaApi);

  return (
    <div className="relative overflow-hidden pt-28" ref={emblaRef}>
      <div className="flex">
        <NewsCarousel scrollNext={scrollNext} scrollPrev={scrollPrev} />
        <NewsCarousel scrollNext={scrollNext} scrollPrev={scrollPrev} />
        <NewsCarousel scrollNext={scrollNext} scrollPrev={scrollPrev} />
      </div>
      <div className="absolute bottom-11 left-0 flex w-full items-center justify-center">
        <div className="flex items-center gap-1 rounded-full border border-gray-700 bg-gray-400 bg-opacity-10 bg-clip-padding text-xs text-white backdrop-blur-md backdrop-filter">
          <Button
            size="sm"
            className="hover:bg-transparent hover:text-white/30"
            variant="ghost"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <CarouselCount
            carouselCount={carouselCount}
            selectedCarousel={selectedCarousel}
          />
          <Button
            size="sm"
            className="hover:bg-transparent hover:text-white/30"
            variant="ghost"
            onClick={scrollNext}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default News;
