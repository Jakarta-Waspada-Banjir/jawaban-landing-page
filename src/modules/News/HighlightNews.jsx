import Image from "next/image";
import { Calendar, PenLine } from "lucide-react";

const HighlightNews = () => {
  return (
    <section className="mx-auto my-8 max-w-7xl px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
      <h2 className="text-2xl font-medium text-gray-800">Sorotan</h2>
      <div className="mt-5 flex gap-8">
        {/* kiri */}
        <div className="relative h-[600px] w-1/2 shrink-0">
          <Image
            src="/images/heru-budi.jpeg"
            fill
            alt="test"
            className="rounded-xl object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-end gap-4 rounded-b-xl bg-gradient-to-t from-black/90 from-15% via-black/50 via-45% p-8 text-white">
            <div className="flex flex-col gap-2">
              <h5 className="w-min rounded-full bg-primary px-4 py-1 text-sm">
                BANJIR
              </h5>
              <h3 className="text-2xl font-medium text-white/90">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laborum, laudantium?
              </h3>
            </div>
            <div className="flex gap-2 text-sm text-white/60">
              <p className="flex gap-2">
                <Calendar className="h-5 w-5" />
                Kamis, 2 Mei 2024
              </p>
              |
              <p className="flex gap-2">
                <PenLine className="h-5 w-5" />
                Penulis: John Doe
              </p>
            </div>
          </div>
        </div>

        {/* kanan */}
        <div className="flex w-full flex-col gap-8">
          {/* atas */}
          <div className="h-[calc(300px-16px)] w-full bg-red-50">
            <div className="relative h-[calc(300px-16px)] w-full">
              <Image
                src="/images/edukasi-banjir-1.jpeg"
                alt="test"
                fill
                className="rounded-xl object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-end gap-4 rounded-b-xl bg-gradient-to-t from-black/90 from-15% via-black/50 via-45% p-8 text-white">
                <div className="flex flex-col gap-2">
                  <h5 className="w-min rounded-full bg-primary px-4 py-1 text-sm">
                    BANJIR
                  </h5>
                  <h3 className="text-2xl font-medium text-white/90">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum, laudantium?
                  </h3>
                </div>
                <div className="flex gap-2 text-sm text-white/60">
                  <p className="flex gap-2">
                    <Calendar className="h-5 w-5" />
                    Kamis, 2 Mei 2024
                  </p>
                  |
                  <p className="flex gap-2">
                    <PenLine className="h-5 w-5" />
                    Penulis: John Doe
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* bawah */}
          <div className="h-[calc(300px-16px)] w-full bg-red-50">
            <div className="relative h-[calc(300px-16px)] w-full">
              <Image
                src="/images/pengerukan-kali.jpg"
                alt="test"
                fill
                className="rounded-xl object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-end gap-4 rounded-b-xl bg-gradient-to-t from-black/90 from-15% via-black/50 via-45% p-8 text-white">
                <div className="flex flex-col gap-2">
                  <h5 className="w-min rounded-full bg-primary px-4 py-1 text-sm">
                    BANJIR
                  </h5>
                  <h3 className="text-2xl font-medium text-white/90">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum, laudantium?
                  </h3>
                </div>
                <div className="flex gap-2 text-sm text-white/60">
                  <p className="flex gap-2">
                    <Calendar className="h-5 w-5" />
                    Kamis, 2 Mei 2024
                  </p>
                  |
                  <p className="flex gap-2">
                    <PenLine className="h-5 w-5" />
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
