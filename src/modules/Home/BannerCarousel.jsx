"use client";

import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui";
import { initialNewsCarousel } from "@/data/HomeData";
import { formatDate } from "@/utils";

export const BannerCarousel = () => {
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
          {initialNewsCarousel.map((data) => (
            <CarouselItem key={data.id} className="relative h-72 pl-0 sm:h-96">
              <Link href={data.url}>
                <div className="relative h-full w-full">
                  <Image
                    src={data.url_image}
                    alt={`banner-${data.id}`}
                    sizes="100vw"
                    width={0}
                    height={0}
                    className="h-full w-full rounded-md object-cover"
                  />
                  <div className="from from-35%% absolute inset-0 flex items-end justify-start bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="flex flex-col pl-4">
                      <p className="text-white">
                        {data
                          ? formatDate(data.created_at, "EEEE, dd MMMM yyy")
                          : "-"}
                      </p>
                      <h1 className="mt-2 line-clamp-2 text-lg font-semibold text-white sm:text-2xl">
                        {data.title ?? "-"}
                      </h1>
                    </div>
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-4" />
        <CarouselNext className="-right-4" />
      </Carousel>
    </section>
  );
};
