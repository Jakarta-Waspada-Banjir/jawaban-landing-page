import { Calendar, PenLine } from "lucide-react";

import { Button } from "@/components/ui";

import NewsCardDesktop from "./NewsCardDesktop";
import NewsCardMobile from "./NewsCardMobile";

const NewsCarousel = ({ image, tag, title, release_date, author }) => {
  return (
    <div
      style={{ backgroundImage: `url('${image}')` }}
      className={`w-screen flex-shrink-0 bg-cover bg-bottom md:bg-top`}
    >
      <div className="h-full w-full bg-black/60 pt-20 lg:pt-28">
        <div className="mx-auto flex h-full max-w-7xl flex-col justify-between gap-5 px-4 py-16 sm:px-6 md:flex-row md:gap-14 md:py-10 lg:px-8 xl:gap-12">
          <div className="flex flex-col justify-end">
            <div className="flex flex-col gap-5">
              <h5 className="-mb-4 text-sm uppercase text-white/60 xl:text-base">
                {tag}
              </h5>
              <h3 className="font-serif text-lg font-medium text-white/90 md:text-2xl lg:text-3xl xl:text-4xl">
                {title}
              </h3>

              <div className="flex gap-2 text-sm text-white/60">
                <p className="flex gap-2">
                  <Calendar className="h-5 w-5" />
                  {release_date}
                </p>
                |
                <p className="flex gap-2">
                  <PenLine className="h-5 w-5" />
                  Penulis: {author}
                </p>
              </div>

              <div className="z-50 flex justify-between">
                <Button className="w-full border border-white/30 bg-transparent p-5 hover:bg-primary hover:text-white md:w-min">
                  Baca Selengkapnya
                </Button>
              </div>
            </div>
          </div>

          <NewsCardDesktop tag={tag} />

          <NewsCardMobile tag={tag} />
        </div>
      </div>
    </div>
  );
};

export default NewsCarousel;
