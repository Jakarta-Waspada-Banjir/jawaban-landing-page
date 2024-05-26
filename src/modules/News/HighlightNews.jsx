import Image from "next/image";
import Link from "next/link";
import { Calendar, PenLine } from "lucide-react";

import { NewsData } from "@/data/NewsData";
import { formatDate } from "@/utils";

const HighlightNews = () => {
  const highlightNews = NewsData.filter((data) => data.isHighlight === true);

  return (
    <section className="mx-auto mt-4 max-w-7xl px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
      <h2 className="text-xl font-medium text-gray-800 xl:text-2xl">Sorotan</h2>
      <div className="mt-5 flex flex-col gap-5 md:flex-row md:gap-8">
        <Link
          href={`/berita/${highlightNews[0].slug}`}
          className="relative h-[300px] shrink-0 hover:cursor-pointer md:h-[600px] md:w-1/2"
        >
          <Image
            src={highlightNews[0].image}
            fill
            alt="test"
            className="rounded-xl object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-end gap-3 rounded-b-xl bg-gradient-to-t from-black/90 from-15% via-black/50 via-45% p-5 text-white xl:gap-4 xl:p-8">
            <div className="flex flex-col gap-2">
              <h5 className="w-max rounded-full bg-primary px-4 py-1 text-xs lg:text-sm">
                {highlightNews[0].tag}
              </h5>
              <h3 className="text-base font-medium text-white/90 lg:text-xl">
                {highlightNews[0].title}
              </h3>
            </div>
            <div className="flex gap-2 text-xs text-white/60 xl:text-sm">
              <p className="flex gap-2">
                <Calendar className="h-4 w-4 xl:h-5 xl:w-5" />
                {formatDate(highlightNews[0].release_date, "EEEE, dd MMMM yyy")}
              </p>
              |
              <p className="flex gap-2">
                <PenLine className="h-4 w-4 xl:h-5 xl:w-5" />
                Penulis: {highlightNews[0].author}
              </p>
            </div>
          </div>
        </Link>
        <div className="flex w-full flex-col gap-8">
          <Link
            href={`/berita/${highlightNews[2].slug}`}
            className="h-[calc(300px-16px)] w-full bg-red-50 hover:cursor-pointer"
          >
            <div className="relative h-[calc(300px-16px)] w-full">
              <Image
                src={highlightNews[2].image}
                alt={highlightNews[2].title}
                fill
                className="rounded-xl object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-end gap-3 rounded-b-xl bg-gradient-to-t from-black/90 from-15% via-black/50 via-45% p-5 text-white xl:gap-4 xl:p-8">
                <div className="flex flex-col gap-2">
                  <h5 className="w-max rounded-full bg-primary px-4 py-1 text-xs lg:text-sm">
                    {highlightNews[2].tag}
                  </h5>
                  <h3 className="text-base font-medium text-white/90 lg:text-xl">
                    {highlightNews[2].title}
                  </h3>
                </div>
                <div className="flex gap-2 text-xs text-white/60 lg:text-sm">
                  <p className="flex gap-2">
                    <Calendar className="h-4 w-4 xl:h-5 xl:w-5" />
                    {formatDate(
                      highlightNews[2].release_date,
                      "EEEE, dd MMMM yyy",
                    )}
                  </p>
                  |
                  <p className="flex gap-2">
                    <PenLine className="h-4 w-4 xl:h-5 xl:w-5" />
                    Penulis: {highlightNews[2].author}
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link
            href={`/berita/${highlightNews[1].slug}`}
            className="h-[calc(300px-16px)] w-full bg-red-50 hover:cursor-pointer"
          >
            <div className="relative h-[calc(300px-16px)] w-full">
              <Image
                src={highlightNews[1].image}
                alt={highlightNews[1].title}
                fill
                className="rounded-xl object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-end gap-3 rounded-b-xl bg-gradient-to-t from-black/90 from-15% via-black/50 via-45% p-5 text-white xl:gap-4 xl:p-8">
                <div className="flex flex-col gap-2">
                  <h5 className="w-max rounded-full bg-primary px-4 py-1 text-xs lg:text-sm">
                    {highlightNews[1].tag}
                  </h5>
                  <h3 className="text-base font-medium text-white/90 lg:text-xl">
                    {highlightNews[1].title}
                  </h3>
                </div>
                <div className="flex gap-2 text-xs text-white/60 lg:text-sm">
                  <p className="flex gap-2">
                    <Calendar className="h-4 w-4 xl:h-5 xl:w-5" />
                    {formatDate(
                      highlightNews[1].release_date,
                      "EEEE, dd MMMM yyy",
                    )}
                  </p>
                  |
                  <p className="flex gap-2">
                    <PenLine className="h-4 w-4 xl:h-5 xl:w-5" />
                    Penulis: {highlightNews[1].author}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HighlightNews;
