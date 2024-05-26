"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { Button } from "@/components/ui";
import { formatDate } from "@/utils";

const LatestNews = ({ data }) => {
  const [maxData, setMaxData] = useState(5);

  return (
    <div className="mt-3 flex flex-col gap-5 lg:mt-5 lg:gap-7 xl:gap-8">
      {data
        .sort((a, b) => new Date(b.release_date) - new Date(a.release_date))
        .slice(0, maxData)
        .map((data) => (
          <Link
            href={`/berita/${data.slug}`}
            key={data.id}
            className="flex cursor-pointer justify-between gap-3 rounded-xl border border-gray-200 transition duration-300 hover:shadow-lg xl:gap-5"
          >
            <div className="flex h-28 p-3 lg:h-40 xl:h-40 xl:p-4">
              <div className="flex h-full flex-col justify-between">
                <div className="flex flex-col gap-1">
                  <h5 className="text-xs font-medium uppercase text-gray-500">
                    {data.tag}
                  </h5>
                  <h3 className="line-clamp-1 text-sm font-medium text-gray-700 lg:text-base">
                    {data.title}
                  </h3>
                </div>
                <p className="hidden text-gray-500 lg:line-clamp-2 lg:text-sm xl:text-sm">
                  {data.content[0].text}
                </p>
                <div className="flex gap-5 text-xs text-gray-500 xl:text-sm">
                  <p>{formatDate(data.release_date, "EEEE, dd MMMM yyy")}</p>
                  <p>Penulis: {data.author}</p>
                </div>
              </div>
            </div>
            <div className="relative h-28 w-28 shrink-0 lg:h-40 lg:w-40 xl:h-40 xl:w-40">
              <Image
                fill
                src={data.image}
                alt={data.title}
                className="group-hover: rounded-e-xl object-cover"
              />
            </div>
          </Link>
        ))}
      {maxData < data.length && (
        <Button onClick={() => setMaxData(maxData + 5)}>
          Lihat lebih banyak
        </Button>
      )}
    </div>
  );
};

export default LatestNews;
