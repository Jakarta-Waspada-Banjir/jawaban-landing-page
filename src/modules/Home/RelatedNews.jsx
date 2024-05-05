import Image from "next/image";
import Link from "next/link";
import React from "react";

import { BoxArrowUpRightIcon } from "@/components/icons";
import { Button } from "@/components/ui";
import { initialRelatedNews } from "@/data/HomeData";
import { formatDate } from "@/utils";

export const RelatedNews = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-700 md:text-3xl">
          Berita
        </h1>
        <Button
          variant="outline_primary"
          className="text-sm hover:bg-primary/10 hover:text-primary"
          asChild
        >
          <Link
            href="/coming-soon"
            className="inline-flex items-center font-semibold text-primary"
          >
            Lihat Semua
            <BoxArrowUpRightIcon className="ms-2 h-3 w-3" />
          </Link>
        </Button>
      </div>
      <div className="grid gap-5 rounded-xl md:grid-cols-2 md:gap-6">
        {initialRelatedNews.map((news) => (
          <Link
            key={news.id}
            href={news.url}
            className="group flex min-h-[88px] w-full cursor-pointer items-center gap-4 overflow-hidden rounded-xl border p-2 shadow-sm hover:bg-gray-50"
          >
            <div className="h-[115px] w-[115px] flex-shrink-0 overflow-hidden rounded-lg md:h-[130px] md:w-[150px] xl:h-[130px] xl:w-[200px]">
              <Image
                src={news.url_image}
                alt={`banner-${news.id}`}
                sizes="100vw"
                width={0}
                height={0}
                className="h-full w-full rounded-md object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center">
              <h2 className="mb-1 line-clamp-2 text-base font-semibold text-gray-800 group-hover:text-primary md:text-lg">
                {news.title ?? "-"}
              </h2>
              <p className="mb-2 text-xs sm:text-base">
                <span className="text-gray-500">
                  {news.created_at
                    ? formatDate(news.created_at, "EEEE, dd MMMM yyy")
                    : "-"}
                </span>
              </p>
              <p className="line-clamp-2 text-[15px]">
                {news.description ?? "-"}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
