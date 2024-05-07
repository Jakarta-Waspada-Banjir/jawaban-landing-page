"use client";

import { useState } from "react";

import {
  OceanWavesIcon,
  RainyCloudIcon,
  UpstreamRiverIcon,
} from "@/components/icons";
import { MDPreview } from "@/components/MdPreview";
import { cn } from "@/lib/utils";

const causesOfFlooding = [
  {
    id: 1,
    icon: (
      <RainyCloudIcon className="h-10 w-10 rounded-full lg:h-12 lg:w-12 xl:h-14 xl:w-14" />
    ),
    causes: "Hujan Lokal",
    paragraph:
      "<p>Hujan yang terjadi dengan intensitas tinggi dalam durasi yang lama di wilayah Jakarta akan mengisi salurah-saluran air dan daerah cekung. Jika tidak tertampung lagi, air akan meluap hingga menyebabkan banjir.</p><p>Selain itu, dimensi drainase kota Jakarta dirancang untuk menampung debit air dengan curah hujan maksimal 120 mm/hari. Namun, pada beberapa hujan besar ekstrem yang terjadi di Jakarta, curah hujan melebihi kapasitas tersebut.</p><p>Contohnya pada 1 Januari 2020 lalu, curah hujan Jakarta mencapai 377 mm/hari dan merupakan yang tertinggi selama 24 tahun. Sehingga banjir pun melanda sebagian besar wilayah Ibu Kota.</p>",
  },
  {
    id: 2,
    icon: (
      <UpstreamRiverIcon className="h-10 w-10 rounded-full lg:h-12 lg:w-12 xl:h-14 xl:w-14" />
    ),
    causes: "Kiriman",
    paragraph:
      "<p>Karena berada di wilayah dataran rendah dan memiliki 13 aliran sungai, Jakarta dapat banjir jika hujan terjadi di hulu sungai. Hujan dengan intesitas tinggi di daerah hulu (Jawa Barat dan Banten) akan terbawa melalui aliran sungai ke Jakarta sebelum lepas ke laut.<p/> <p>Hal inilah yang membuat sungai yang bermuara di Jakarta meluap dan mengakibatkan banjir. Pada saat kondisi tertentu kapasitas aliran sungai di Jakarta tersebut tidak cukup menampung air, sehingga terjadi limpasan di beberapa bantaran sungai di Jakarta.</p>",
  },
  {
    id: 3,
    icon: (
      <OceanWavesIcon className="h-10 w-10 rounded-full lg:h-12 lg:w-12 xl:h-14 xl:w-14" />
    ),
    causes: "Rob",
    paragraph:
      "<p>Selain karena hujan dan kiriman debit air dari hulu, Jakarta juga rentan terkena pasang air laut (Rob). Hal ini biasanya terjadi di wilayah pesisir atau tepi laut Jakarta.<p/><p>Kini, di samping karena pasangnya air laut, penurunan muka tanah di utara Jakarta juga mempengaruhi meningkatnya banjir rob.<p/>",
  },
];

const FloodInformationSection = () => {
  const [seeMore1, setSeeMore1] = useState(false);
  const [seeMore2, setSeeMore2] = useState(false);
  const [seeMore3, setSeeMore3] = useState(false);

  return (
    <section>
      <div className="my-8 flex flex-col gap-8 lg:flex-row">
        {causesOfFlooding.map((item) => (
          <div
            id={item.id}
            key={item.id}
            className="group flex h-min flex-col gap-4 rounded-xl border-2 p-5 transition duration-300 hover:border-primary hover:bg-primary/10 hover:shadow-xl lg:p-5 xl:p-7"
          >
            <div className="flex items-center gap-4">
              {item.icon}
              <div className="flex h-full flex-col justify-between">
                <p className="text-xs font-semibold text-gray-500">BANJIR</p>
                <h5 className="text-base font-semibold transition duration-300 group-hover:text-primary md:text-xl">
                  {item.causes}
                </h5>
              </div>
            </div>
            {item.id === 1 && (
              <>
                <div
                  className={cn("-mt-3 text-sm", { "line-clamp-4": !seeMore1 })}
                >
                  <MDPreview value={item.paragraph} />
                </div>
                <p
                  onClick={() => setSeeMore1(!seeMore1)}
                  className="-mt-3 cursor-pointer text-sm text-primary hover:underline"
                >
                  {!seeMore1 ? "Lihat lebih banyak" : "Lihat lebih sedikit"}
                </p>
              </>
            )}
            {item.id === 2 && (
              <>
                <div
                  className={cn("-mt-3 text-sm", { "line-clamp-4": !seeMore2 })}
                >
                  <MDPreview value={item.paragraph} />
                </div>
                <p
                  onClick={() => setSeeMore2(!seeMore2)}
                  className="-mt-4 cursor-pointer text-sm text-primary hover:underline"
                >
                  {!seeMore2 ? "Lihat lebih banyak" : "Lihat lebih sedikit"}
                </p>
              </>
            )}
            {item.id === 3 && (
              <>
                <div
                  className={cn("-mt-4 text-sm", {
                    "line-clamp-4":
                      seeMore3 === false && item.paragraph.length > 300,
                  })}
                >
                  <MDPreview value={item.paragraph} />
                </div>
                <p
                  onClick={() => setSeeMore3(!seeMore3)}
                  className={`-mt-4 cursor-pointer text-sm text-primary hover:underline ${item.paragraph.length > 300 && "block md:hidden lg:block"}`}
                >
                  {!seeMore3 ? "Lihat lebih banyak" : "Lihat lebih sedikit"}
                </p>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FloodInformationSection;
