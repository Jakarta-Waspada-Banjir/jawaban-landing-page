import { NewsData } from "@/data/NewsData";

import LatestNews from "./LatestNews";
import RelatedNewsCard from "./RelatedNewsCard";

const LatestAndPopularNews = () => {
  const sortedDataByDate = NewsData;

  const sortedDataByViews = NewsData;

  return (
    <section className="mx-auto mt-4 flex max-w-7xl gap-7 px-4 py-4 sm:px-6 lg:px-8 lg:py-6 xl:gap-10">
      <div className="w-full">
        <h2 className="text-xl font-medium text-gray-800 xl:text-2xl">
          Berita Terbaru
        </h2>
        <LatestNews data={sortedDataByDate} />
      </div>

      <div className="hidden shrink-0 md:block md:w-[300px] lg:w-[350px] xl:w-[400px]">
        <h2 className="text-xl font-medium text-gray-800 xl:text-2xl">
          Berita Populer
        </h2>
        <div className="mt-3 rounded-xl border p-3 shadow-xl lg:mt-5">
          {sortedDataByViews
            .sort((a, b) => b.viewed - a.viewed)
            .slice(0, 5)
            .map(({ image, tag, title, release_date, id, viewed, slug }) => (
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
            ))}
        </div>
      </div>
    </section>
  );
};

export default LatestAndPopularNews;
