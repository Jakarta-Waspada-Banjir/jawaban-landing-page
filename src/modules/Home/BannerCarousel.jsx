"use client";

import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { Calendar, PenLine } from "lucide-react";
import React from "react";

import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui";
import { initialNewsCarousel } from "@/data/HomeData";
import { NewsData } from "@/data/NewsData";
import { formatDate } from "@/utils";

export const BannerCarousel = () => {
  const sortedNewsData = NewsData.sort(
    (a, b) => new Date(b.release_date) - new Date(a.release_date),
  );
  const initialNewsCarousel = NewsData.slice(0, 3);
  return (
    <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full rounded-md shadow-md"
      >
        <CarouselContent>
          {sortedNewsData.slice(0, 5).map((data) => (
            <CarouselItem key={data.id} className="relative h-72 pl-0 sm:h-96">
              <div className="relative h-full w-full">
                <Image
                  src={data.image}
                  alt={`banner-${data.id}`}
                  sizes="100vw"
                  width={0}
                  height={0}
                  className="h-full w-full rounded-md object-cover"
                />
                <div className="absolute inset-0 flex items-end justify-start bg-black/60 p-4 sm:p-7">
                  <div className="flex flex-col gap-5 pl-4">
                    <h5 className="-mb-4 text-sm uppercase text-white/60 xl:text-base">
                      {data.tag ?? "-"}
                    </h5>
                    <h3 className="line-clamp-1 font-serif text-lg font-medium text-white/90 sm:line-clamp-2 md:text-2xl lg:text-3xl">
                      {data.title ?? "-"}
                    </h3>

                    <div className="flex flex-col gap-2 text-sm text-white/60 sm:flex-row">
                      <p className="flex gap-2">
                        <Calendar className="h-5 w-5" />
                        {formatDate(data.release_date, "EEEE, dd MMMM yyy") ??
                          "-"}
                      </p>
                      <p className="hidden sm:block">|</p>
                      <p className="flex gap-2">
                        <PenLine className="h-5 w-5" />
                        Penulis: {data.author ?? "-"}
                      </p>
                    </div>

                    <div className="z-50 flex justify-between">
                      <Button
                        className="w-full border border-white/30 bg-transparent p-5 hover:bg-primary hover:text-white md:w-min"
                        asChild
                      >
                        <Link href={`/berita/${data.slug}`}>
                          Baca Selengkapnya
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-4" />
        <CarouselNext className="-right-4" />
      </Carousel>
    </section>
  );
};
