import Image from "next/image";

import { NewsData } from "@/data/NewsData";

import RelatedNewsCard from "./RelatedNewsCard";

const LatestAndPopularNews = () => {
  return (
    <section className="mx-auto my-8 flex max-w-7xl gap-10 px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
      <div className="w-full">
        <h2 className="text-2xl font-medium text-gray-800">Berita Terbaru</h2>
        <div className="mt-5 flex flex-col gap-8">
          {NewsData.slice(3, 6).map((data) => (
            <div
              key={data.id}
              className="flex gap-5 rounded-xl border border-gray-200"
            >
              <div className="flex h-48 gap-5 p-4">
                <div className="flex h-full flex-col justify-between">
                  <div className="flex flex-col gap-1">
                    <h5 className="text-sm font-semibold uppercase text-gray-500">
                      {data.tag}
                    </h5>
                    <h3 className="line-clamp-2 text-xl font-semibold text-gray-700">
                      {data.title}
                    </h3>
                  </div>
                  <p className="line-clamp-2 text-base text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam exercitationem magni voluptate obcaecati quis
                    corrupti eos at incidunt assumenda enim sapiente corporis
                    explicabo et possimus fugiat aliquam, ad iste natus iusto
                    quasi ullam dolore? Consequuntur et sit ipsam libero sequi?
                    Voluptatibus aliquam nemo possimus illum natus saepe
                    consectetur qui iusto.
                  </p>
                  <div className="flex gap-5 text-gray-500">
                    <p className="text-sm">{data.release_date}</p>
                    <p className="text-sm">Penulis: {data.author}</p>
                  </div>
                </div>
              </div>
              <div className="relative h-48 w-48 shrink-0">
                <Image
                  src={data.image}
                  className="rounded-e-xl object-cover"
                  alt={data.title}
                  fill
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-[400px] shrink-0">
        <h2 className="text-2xl font-medium text-gray-800">Berita Populer</h2>
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
