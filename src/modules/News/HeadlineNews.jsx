"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback } from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui";
import { NewsData } from "@/data/NewsData";

import CarouselControl from "./CarouselControl";
import { useCarouselCount } from "./CarouselCount";
import NewsCarousel from "./NewsCarousel";

const options = { loop: true };

const HeadlineNews = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const { carouselCount, selectedCarousel } = useCarouselCount(emblaApi);

  const filteredData = NewsData.filter((data) => data.isTrending);

  return (
    <section className="relative overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {filteredData.map(
          ({ id, image, tag, title, release_date, author, slug }) => (
            <NewsCarousel
              id={id}
              key={id}
              tag={tag}
              slug={slug}
              title={title}
              image={image}
              author={author}
              release_date={release_date}
            />
          ),
        )}
      </div>
      <div className="absolute top-24 w-full md:top-[116px] lg:top-[125px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  className="text-white hover:text-white/80"
                  href="/"
                >
                  Beranda
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="font-medium text-primary">
                  Berita
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <CarouselControl
        carouselCount={carouselCount}
        selectedCarousel={selectedCarousel}
        scrollNext={scrollNext}
        scrollPrev={scrollPrev}
      />
    </section>
  );
};

export default HeadlineNews;
