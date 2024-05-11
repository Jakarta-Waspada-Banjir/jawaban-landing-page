import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui";

import { CarouselCount } from "./CarouselCount";

const CarouselControl = ({
  carouselCount,
  selectedCarousel,
  scrollNext,
  scrollPrev,
}) => {
  return (
    <div className="absolute bottom-[10px] left-1/2 right-1/2 flex w-max -translate-x-1/2">
      <div className="flex items-center gap-1 rounded-full bg-gray-400 bg-opacity-10 bg-clip-padding text-xs text-white backdrop-blur-md backdrop-filter">
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
  );
};

export default CarouselControl;
