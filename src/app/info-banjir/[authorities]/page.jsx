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
  const { authorities } = useParams();

  const filteredData = datas.find((data) => data.authorities === authorities);

  return (
    <>
      {/* desktop */}
      <div className="hidden md:block">
        <h3 className="text-xl font-semibold ">{filteredData.data[0].title}</h3>
        <p className="mt-2">{filteredData.data[0].paragraph}</p>
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
