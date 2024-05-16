import Image from "next/image";
import { Calendar, PenLine } from "lucide-react";

// import { ModalShareSocialMedia } from "./ModalShareSocialMedia";

const HighlightNews = () => {
  return (
    <section className="mx-auto mt-4 max-w-7xl px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
      <h2 className="text-xl font-medium text-gray-800 xl:text-2xl">Sorotan</h2>
      <div className="mt-5 flex flex-col gap-5 md:flex-row md:gap-8">
        {/* kiri */}
        <div className="relative h-[300px] shrink-0 hover:cursor-pointer md:h-[600px] md:w-1/2">
          <Image
            src="/images/heru-budi.jpeg"
            fill
            alt="test"
            className="rounded-xl object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-end gap-3 rounded-b-xl bg-gradient-to-t from-black/90 from-15% via-black/50 via-45% p-5 text-white xl:gap-4 xl:p-8">
            <div className="flex flex-col gap-2">
              <h5 className="w-min rounded-full bg-primary px-4 py-1 text-xs lg:text-sm">
                BANJIR
              </h5>
              <h3 className="text-base font-medium text-white/90 lg:text-xl xl:text-2xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laborum, laudantium?
              </h3>
            </div>
            <div className="flex gap-2 text-xs text-white/60 xl:text-sm">
              <p className="flex gap-2">
                <Calendar className="h-4 w-4 xl:h-5 xl:w-5" />
                Kamis, 2 Mei 2024
              </p>
              |
              <p className="flex gap-2">
                <PenLine className="h-4 w-4 xl:h-5 xl:w-5" />
                Penulis: John Doe
              </p>
            </div>
          </div>
        </div>

        {/* kanan */}
        <div className="flex w-full flex-col gap-8">
          {/* atas */}
          <div className="h-[calc(300px-16px)] w-full bg-red-50 hover:cursor-pointer">
            <div className="relative h-[calc(300px-16px)] w-full">
              <Image
                src="/images/edukasi-banjir-1.jpeg"
                alt="test"
                fill
                className="rounded-xl object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-end gap-3 rounded-b-xl bg-gradient-to-t from-black/90 from-15% via-black/50 via-45% p-5 text-white xl:gap-4 xl:p-8">
                <div className="flex flex-col gap-2">
                  <h5 className="w-min rounded-full bg-primary px-4 py-1 text-xs lg:text-sm">
                    BANJIR
                  </h5>
                  <h3 className="text-base font-medium text-white/90 lg:text-xl xl:text-2xl">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum, laudantium?
                  </h3>
                </div>
                <div className="flex gap-2 text-xs text-white/60 lg:text-sm">
                  <p className="flex gap-2">
                    <Calendar className="h-4 w-4 xl:h-5 xl:w-5" />
                    Kamis, 2 Mei 2024
                  </p>
                  |
                  <p className="flex gap-2">
                    <PenLine className="h-4 w-4 xl:h-5 xl:w-5" />
                    Penulis: John Doe
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* bawah */}
          <div className="h-[calc(300px-16px)] w-full bg-red-50 hover:cursor-pointer">
            <div className="relative h-[calc(300px-16px)] w-full">
              <Image
                src="/images/pengerukan-kali.jpg"
                alt="test"
                fill
                className="rounded-xl object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-end gap-3 rounded-b-xl bg-gradient-to-t from-black/90 from-15% via-black/50 via-45% p-5 text-white xl:gap-4 xl:p-8">
                <div className="flex flex-col gap-2">
                  <h5 className="w-min rounded-full bg-primary px-4 py-1 text-xs lg:text-sm">
                    BANJIR
                  </h5>
                  <h3 className="text-base font-medium text-white/90 lg:text-xl xl:text-2xl">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum, laudantium?
                  </h3>
                </div>
                <div className="flex gap-2 text-xs text-white/60 lg:text-sm">
                  <p className="flex gap-2">
                    <Calendar className="h-4 w-4 xl:h-5 xl:w-5" />
                    Kamis, 2 Mei 2024
                  </p>
                  |
                  <p className="flex gap-2">
                    <PenLine className="h-4 w-4 xl:h-5 xl:w-5" />
                    Penulis: John Doe
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightNews;
