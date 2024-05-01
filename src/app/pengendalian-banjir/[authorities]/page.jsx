"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

import datas from "@/data/flood-control-data.json";

const FloodControlPage = () => {
  const { authorities } = useParams();

  const filteredData = datas.find((data) => data.authorities === authorities);

  return (
    <>
      <div className="overflow-y-scroll">
        <h3 className="text-2xl font-semibold text-primary">
          {filteredData.data[0].title}
        </h3>
        <p className="mt-2 text-lg text-primary">
          {filteredData.data[0].paragraph}
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <div className="relative h-52 w-52">
            <Image
              fill
              alt="gatau"
              className="object-cover"
              src="/images/edukasi-banjir-1.jpeg"
            />
          </div>
          <div className="relative h-52 w-52">
            <Image
              src="/images/edukasi-banjir-1.jpeg"
              fill
              alt="gatau"
              className="object-cover"
            />
          </div>
          <div className="relative h-52 w-52">
            <Image
              src="/images/edukasi-banjir-1.jpeg"
              fill
              alt="gatau"
              className="object-cover"
            />
          </div>
          <div className="relative h-52 w-52">
            <Image
              src="/images/edukasi-banjir-1.jpeg"
              fill
              alt="gatau"
              className="object-cover"
            />
          </div>
          <div className="relative h-52 w-52">
            <Image
              src="/images/edukasi-banjir-1.jpeg"
              fill
              alt="gatau"
              className="object-cover"
            />
          </div>
          <div className="relative h-52 w-52">
            <Image
              src="/images/edukasi-banjir-1.jpeg"
              fill
              alt="gatau"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FloodControlPage;
