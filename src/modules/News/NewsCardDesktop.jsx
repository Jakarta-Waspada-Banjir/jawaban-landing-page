import React from "react";

import { NewsData } from "@/data/NewsData";

import RelatedNewsCard from "./RelatedNewsCard";

const NewsCardDesktop = ({ tag }) => {
  const filteredNews = NewsData.filter((data) => data.tag === tag);

  return (
    <div className="hidden h-min w-[300px] flex-shrink-0 flex-col gap-1 rounded-xl bg-gray-400 bg-opacity-10 bg-clip-padding p-4 backdrop-blur-md backdrop-filter md:flex lg:w-[350px] xl:w-[400px]">
      <h4 className="text-sm font-semibold uppercase text-white">
        Berita Terkait
      </h4>
      {filteredNews
        .slice(0, 4)
        .map(({ image, tag, title, release_date, id, viewed, slug }) => (
          <RelatedNewsCard
            key={id}
            tag={tag}
            slug={slug}
            title={title}
            images={image}
            viewed={viewed}
            release_date={release_date}
          />
        ))}
    </div>
  );
};

export default NewsCardDesktop;
