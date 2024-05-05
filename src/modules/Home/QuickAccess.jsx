"use client";

import Link from "next/link";
import React from "react";

import { BoxArrowUpRightIcon } from "@/components/icons";
import {
  Card,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui";
import { initialQuickAccess } from "@/data/HomeData";

export const QuickAccess = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
      <h1 className="mb-6 text-2xl font-semibold text-gray-700 md:text-3xl">
        Akses Cepat
      </h1>
      <Carousel>
        <CarouselContent>
          {initialQuickAccess.map((data) => (
            <CarouselItem
              key={data.id}
              className="basis-auto md:basis-1/2 lg:basis-1/3"
            >
              <div className="group">
                <Card className="h-[210px] max-w-xs bg-white p-6 duration-200 ease-in-out group-hover:border-primary sm:max-w-sm">
                  {data.icon}
                  <Link href={data.url}>
                    <h5 className="mb-2 line-clamp-1 text-xl font-bold group-hover:text-primary md:text-2xl">
                      {data.title ?? "-"}
                    </h5>
                  </Link>
                  <p className="mb-3 line-clamp-2 text-sm leading-6 text-gray-800 group-hover:text-gray-900 md:line-clamp-2">
                    {data.description ?? "-"}
                  </p>
                  <Link
                    href={data.url}
                    className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
                  >
                    Selengkapnya
                    <BoxArrowUpRightIcon className="ms-2 h-3 w-3" />
                  </Link>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-4" />
        <CarouselNext className="-right-1" />
      </Carousel>
    </section>
  );
};
