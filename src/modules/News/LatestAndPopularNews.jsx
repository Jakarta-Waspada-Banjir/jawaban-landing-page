import Image from "next/image";

import { NewsData } from "@/data/NewsData";

import RelatedNewsCard from "./RelatedNewsCard";

const LatestAndPopularNews = () => {
  return (
    <section className="mx-auto my-8 flex max-w-7xl gap-7 px-4 py-4 sm:px-6 lg:px-8 lg:py-6 xl:gap-10">
      <div className="w-full">
        <h2 className="text-xl font-medium text-gray-800 xl:text-2xl">
          Berita Terbaru
        </h2>
        <div className="mt-5 flex flex-col gap-7 xl:gap-8">
          {NewsData.slice(3, 6).map((data) => (
            <div
              key={data.id}
              className="flex cursor-pointer gap-3 rounded-xl border border-gray-200 transition duration-300 hover:shadow-lg xl:gap-5"
            >
              <div className="flex h-28 p-3 lg:h-40 xl:h-48 xl:p-4">
                <div className="flex h-full flex-col justify-between">
                  <div className="flex flex-col gap-1">
                    <h5 className="text-xs font-semibold uppercase text-gray-500 xl:text-sm">
                      {data.tag}
                    </h5>
                    <h3 className="line-clamp-2 text-base font-medium text-gray-700 xl:text-xl xl:font-semibold">
                      {data.title}
                    </h3>
                  </div>
                  <p className="hidden text-gray-500 lg:line-clamp-2 lg:text-sm xl:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam exercitationem magni voluptate obcaecati quis
                    corrupti eos at incidunt assumenda enim sapiente corporis
                    explicabo et possimus fugiat aliquam, ad iste natus iusto
                    quasi ullam dolore? Consequuntur et sit ipsam libero sequi?
                    Voluptatibus aliquam nemo possimus illum natus saepe
                    consectetur qui iusto.
                  </p>
                  <div className="flex gap-5 text-xs text-gray-500 xl:text-sm">
                    <p>{data.release_date}</p>
                    <p>Penulis: {data.author}</p>
                  </div>
                </div>
              </div>
              <div className="relative h-28 w-28 shrink-0 lg:h-40 lg:w-40 xl:h-48 xl:w-48">
                <Image
                  src={data.image}
                  className="group-hover: rounded-e-xl object-cover"
                  alt={data.title}
                  fill
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="shrink-0 md:w-[300px] lg:w-[350px] xl:w-[400px]">
        <h2 className="text-xl font-medium text-gray-800 xl:text-2xl">
          Berita Populer
        </h2>
        <div className="mt-5 rounded-xl border p-3 shadow-xl">
          {NewsData.slice(0, 5).map(
            ({ image, tag, title, release_date, id }) => (
              <RelatedNewsCard
                isPopulerVariant
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
