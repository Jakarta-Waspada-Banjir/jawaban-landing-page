import Image from "next/image";
import Link from "next/link";
import React from "react";

import { BoxArrowUpRightIcon } from "@/components/icons";
import { Button } from "@/components/ui";
import { NewsData } from "@/data/NewsData";
import { formatDate } from "@/utils";

export const RelatedNews = () => {
  const sortedNewsData = NewsData.sort(
    (a, b) => new Date(b.release_date) - new Date(a.release_date),
  );
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
            href="/berita"
            className="inline-flex items-center font-semibold text-primary"
          >
            Lihat Semua
            <BoxArrowUpRightIcon className="ms-2 h-3 w-3" />
          </Link>
        </Button>
      </div>
      <div className="grid gap-5 rounded-xl md:grid-cols-2 md:gap-6">
        {/* {initialRelatedNews.map((news) => (
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
        ))} */}
        {sortedNewsData.slice(0, 4).map((data) => (
          <Link
            href={`/berita/${data.slug}`}
            key={data.id}
            className="group flex w-full cursor-pointer items-center gap-4 overflow-hidden rounded-xl border shadow-sm hover:bg-gray-50 hover:shadow-md"
          >
            <div className="flex w-full flex-col items-start justify-center py-3 pl-3">
              <h5 className="text-xs font-medium uppercase text-gray-500">
                {data.tag ?? "-"}
              </h5>
              <h3 className="line-clamp-2 text-sm font-medium text-gray-700 sm:line-clamp-1 lg:text-base">
                {data.title ?? "-"}
              </h3>
              <p className="line-clamp-2 hidden text-sm text-gray-500 sm:line-clamp-2">
                {data.content[0].text ?? "-"}
              </p>
              <div className="mt-3 flex flex-col gap-1 text-xs text-gray-500 sm:flex-row sm:gap-5 md:flex-col md:gap-1 lg:flex-row lg:gap-5 xl:text-sm">
                <p>
                  {formatDate(data.release_date, "EEEE, dd MMMM yyy") ?? "-"}
                </p>
                <p>Penulis: {data.author ?? "-"}</p>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-[130px] w-[110px] flex-shrink-0 overflow-hidden md:h-[145px] md:w-[120px] xl:h-[150px] xl:w-[150px]">
              <Image
                src={data.image}
                className="h-full w-full rounded-e-xl object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                alt={data.title}
                sizes="100vw"
                width={0}
                height={0}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
