import Image from "next/image";

import {
  OceanWavesIcon,
  RainyCloudIcon,
  UpstreamRiverIcon,
} from "@/components/icons";

const causesOfFlooding = [
  {
    icon: (
      <RainyCloudIcon className="h-14 w-14 rounded-full lg:h-12 lg:w-12 xl:h-14 xl:w-14" />
    ),
    causes: "Hujan Lokal",
    points: ["Curah hujan > 120 mm/hari", "Kapasitas Drainase Terbatas"],
  },
  {
    icon: (
      <UpstreamRiverIcon className="h-14 w-14 rounded-full lg:h-12 lg:w-12 xl:h-14 xl:w-14" />
    ),
    causes: "Kiriman",
    points: [
      "Meluapnya sungai yang bermuara di Jakarta ",
      "Hujan dengan intesitas tinggi di daerah hulu",
    ],
  },
  {
    icon: (
      <OceanWavesIcon className="h-14 w-14 rounded-full lg:h-12 lg:w-12 xl:h-14 xl:w-14" />
    ),
    causes: "Rob",
    points: ["Dampak pasang air laut", "penurunan muka tanah di utara Jakarta"],
  },
];

const FloodInformationSection = () => {
  return (
    <section className="mx-auto my-8 flex max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
      <div className="flex w-full flex-col items-center justify-between lg:mt-8 lg:flex-row">
        <div className="flex flex-col items-center gap-2 lg:w-[400px] lg:items-start xl:w-[500px]">
          <h2 className="text-center text-xl font-semibold md:text-left md:text-2xl ">
            Kenapa Jakarta Sering Mengalami Banjir?
          </h2>
          <div className="relative h-[175px] w-[350px] rounded-xl bg-blue-100 md:h-[250px] md:w-[500px] lg:hidden">
            <Image
              fill
              alt="Hero Image"
              className="rounded-xl object-contain"
              src="/images/flood-ilustration.png"
            />
          </div>
          <p className="mt-5 lg:mt-0">
            Secara geografis, DKI Jakarta merupakan dataran rendah yang berada
            di antara hulu sungai dan pesisir. Berikut adalah 3 penyebab utama
            Jakarta sering mengalami banjir:
          </p>
        </div>

        <div className="relative hidden flex-shrink-0 rounded-xl bg-blue-100 lg:block lg:h-[200px] lg:w-[400px] xl:h-[250px] xl:w-[500px]">
          <Image
            fill
            alt="Hero Image"
            className="rounded-xl object-contain"
            src="/images/flood-ilustration.png"
          />
        </div>
      </div>

      <div className="my-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {causesOfFlooding.map(({ causes, icon, points }, index) => (
          <div
            key={index}
            className="flex flex-col gap-5 rounded-xl border-2 p-5 lg:p-5 xl:p-7"
          >
            <div className="flex items-center gap-6">
              {icon}
              <div className="flex h-full flex-col justify-between">
                <p className="text-sm font-semibold text-gray-500 lg:text-xs xl:text-sm">
                  BANJIR
                </p>
                <h5 className="text-xl font-semibold md:text-2xl lg:text-xl xl:text-2xl">
                  {causes}
                </h5>
              </div>
            </div>
            <ul className="lg:text-sm xl:text-base ">
              {points.map((point, index) => (
                <li key={index} className="list-inside list-disc">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FloodInformationSection;
