import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui";
import { Separator } from "@/components/ui/separator";
import { FloodControlData } from "@/data/FloodControlData";
import FloodControlMenu from "@/modules/FloodInformation/FloodControlMenu";

export const metadata = {
  title: "Informasi Banjir",
};

const FloodControlPage = () => {
  const filteredData = FloodControlData.find(
    (data) => data.authorities === "pemerintah",
  );

  return (
    <>
      <div className="my-8 hidden w-full gap-5 rounded-xl border-2 p-5 md:flex">
        <FloodControlMenu />
        <Separator
          orientation="vertical"
          className="h-auto w-[3px] rounded-full bg-primary/50"
        />
        <div className="">
          <h3 className="text-xl font-semibold">
            {filteredData.data[0].title}
          </h3>
          <p className="mt-2 text-gray-500">{filteredData.data[0].paragraph}</p>
        </div>
      </div>

      <Accordion type="multiple" className="w-full md:hidden">
        {filteredData.data.map((data) => (
          <AccordionItem key={data.id} value={`item-${data.id}`}>
            <AccordionTrigger className="hover:no-underline">
              {data.title}
            </AccordionTrigger>
            <AccordionContent className="text-gray-500">
              {data.paragraph}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default FloodControlPage;
