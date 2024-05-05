import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui";
import { Separator } from "@/components/ui/separator";
import datas from "@/data/flood-control-data.json";
import FloodControlMenu from "@/modules/FloodControl/FloodControlMenu";

const FloodControlPage = () => {
  const filteredData = datas.find((data) => data.authorities === "pemerintah");

  return (
    <>
      {/* desktop */}
      <div className="my-8 hidden w-full gap-5 rounded-xl border-2 p-5 md:flex">
        <FloodControlMenu />
        <Separator
          orientation="vertical"
          className="h-auto w-[3px] rounded-full bg-primary"
        />
        <div className="">
          <h3 className="text-xl font-semibold">
            {filteredData.data[0].title}
          </h3>
          <p className="mt-2">{filteredData.data[0].paragraph}</p>
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
