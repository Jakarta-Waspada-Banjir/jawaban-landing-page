import Image from "next/image";
import Link from "next/link";

import { NewsData } from "@/data/NewsData";
import { formatDate } from "@/utils";

import RelatedNewsCard from "./RelatedNewsCard";

const LatestAndPopularNews = () => {
  const sortedData = NewsData.sort(
    (a, b) => new Date(b.release_date) - new Date(a.release_date),
  );

  return (
    <section className="mx-auto mt-4 flex max-w-7xl gap-7 px-4 py-4 sm:px-6 lg:px-8 lg:py-6 xl:gap-10">
      <div className="w-full">
        <h2 className="text-xl font-medium text-gray-800 xl:text-2xl">
          Berita Terbaru
        </h2>
        <div className="mt-3 flex flex-col gap-5 lg:mt-5 lg:gap-7 xl:gap-8">
          {sortedData.slice(0, 5).map((data) => (
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
                  src={data.image}
                  className="group-hover: rounded-e-xl object-cover"
                  alt={data.title}
                  fill
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="hidden shrink-0 md:block md:w-[300px] lg:w-[350px] xl:w-[400px]">
        <h2 className="text-xl font-medium text-gray-800 xl:text-2xl">
          Berita Populer
        </h2>
        <div className="mt-3 rounded-xl border p-3 shadow-xl lg:mt-5">
          {NewsData.slice(0, 5).map(
            ({ image, tag, title, release_date, id, viewed, slug }) => (
              <RelatedNewsCard
                isPopularVariant
                slug={slug}
                viewed={viewed}
                key={id}
                images={image}
                release_date={release_date}
                tag={tag}
                title={title}
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestAndPopularNews;
