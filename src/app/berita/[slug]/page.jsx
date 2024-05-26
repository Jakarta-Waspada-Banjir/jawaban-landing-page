import Image from "next/image";

import { NewsData } from "@/data/NewsData";
import ContentItem from "@/modules/DetailNews/ContentItem";
import Jumbotron from "@/modules/DetailNews/Jumbotron";
import RelatedNewsCard from "@/modules/News/RelatedNewsCard";
import { shuffle } from "@/utils";

const NewsDetail = ({ params }) => {
  const { slug } = params;

  const selectedData = NewsData.find((data) => data.slug === slug);
  const filteredNews = NewsData.filter((data) => data.id !== selectedData.id);
  const shuffledNews = shuffle(filteredNews);

  return (
    <>
      <Jumbotron data={selectedData} />

      <div className="mx-auto mt-4 flex max-w-7xl justify-between gap-10 px-4 sm:px-6 lg:gap-12 lg:px-8 lg:py-6 xl:gap-14">
        <article className="prose max-w-[100ch] xl:prose-lg prose-h2:font-medium prose-h2:text-gray-800 prose-h3:font-medium prose-h3:text-gray-800 prose-ul:list-disc prose-img:object-cover">
          <figure>
            <Image
              src={selectedData.image}
              width={0}
              className="h-auto w-full object-cover"
              height={0}
              sizes="100vw"
              alt={selectedData.title}
            />
            <figcaption>{selectedData.image_caption}</figcaption>
          </figure>
          <p></p>
          <ContentItem data={selectedData} />
        </article>
        <section className="hidden shrink-0 md:block md:w-[300px] lg:w-[350px] xl:w-[400px]">
          <h2 className="mb-3 text-xl font-medium text-gray-800 xl:text-2xl">
            Berita lainnya
          </h2>
          <div className="rounded-xl border p-3 shadow-xl">
            {shuffledNews
              .slice(0, 5)
              .map(({ image, tag, title, release_date, id, slug }) => (
                <RelatedNewsCard
                  slug={slug}
                  isOtherVariant
                  key={id}
                  images={image}
                  release_date={release_date}
                  tag={tag}
                  title={title}
                />
              ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default NewsDetail;
