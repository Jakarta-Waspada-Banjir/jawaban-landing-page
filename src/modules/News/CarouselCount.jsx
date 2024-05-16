import React, { useCallback, useEffect, useState } from "react";

export const useCarouselCount = (emblaApi) => {
  const [selectedCarousel, setSelectedCarousel] = useState(0);
  const [carouselCount, setCarouselCount] = useState(0);

  const updateScrollSnapState = useCallback((emblaApi) => {
    setCarouselCount(emblaApi.scrollSnapList().length);
    setSelectedCarousel(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    updateScrollSnapState(emblaApi);
    emblaApi.on("select", updateScrollSnapState);
    emblaApi.on("reInit", updateScrollSnapState);
  }, [emblaApi, updateScrollSnapState]);

  return {
    selectedCarousel,
    carouselCount,
  };
};

export const CarouselCount = ({ selectedCarousel, carouselCount }) => {
  return (
    <p>
      {selectedCarousel + 1} / {carouselCount}
    </p>
  );
};
