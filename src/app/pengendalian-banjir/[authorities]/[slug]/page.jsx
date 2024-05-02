"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui";
import datas from "@/data/flood-control-data.json";

const FloodControlPage = () => {
  const { authorities, slug } = useParams();

  const filteredData = datas.find((data) => data.authorities === authorities);

  const selectedData = filteredData.data.find((data) => data.slug === slug);

  return (
    <>
      {/* desktop */}
      <div className="hidden overflow-y-scroll md:block">
        <h3 className="text-2xl font-semibold text-primary">
          {selectedData.title}
        </h3>
        <p className="mt-2 text-lg text-primary">{selectedData.paragraph}</p>
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

      {/* mobile */}
      <Accordion type="multiple" className="w-full md:hidden">
        {filteredData.data.map((data) => (
          <AccordionItem key={data.id} value={`item-${data.id}`}>
            <AccordionTrigger className="hover:no-underline">
              {data.title}
            </AccordionTrigger>
            <AccordionContent>{data.paragraph}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default FloodControlPage;
