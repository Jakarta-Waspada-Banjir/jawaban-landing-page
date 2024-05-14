"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import { NewsData } from "@/data/NewsData";

import RelatedNewsCard from "./RelatedNewsCard";

const NewsCardMobile = ({ tag }) => {
  const [emblaRef] = useEmblaCarousel({ axis: "y" }, [
    Autoplay({ playOnInit: true, delay: 2500 }),
  ]);

  const filteredNews = NewsData.filter((data) => data.tag === tag);

  return (
    <div className="relative flex w-full flex-col gap-1 rounded-xl bg-gray-400 bg-opacity-10 bg-clip-padding p-4 backdrop-blur-md backdrop-filter md:hidden">
      <h4 className="text-sm font-medium uppercase text-white">
        Berita Terkait
      </h4>
      <div className="relative overflow-hidden" ref={emblaRef}>
        <div className="flex h-24 flex-col">
          {filteredNews.map(({ image, tag, title, release_date, id }) => (
            <RelatedNewsCard
              key={id}
              images={image}
              release_date={release_date}
              tag={tag}
              title={title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsCardMobile;
