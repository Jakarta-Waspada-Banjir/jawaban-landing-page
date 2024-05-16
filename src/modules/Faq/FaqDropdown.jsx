"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui";

export const FaqDropdown = ({ datas }) => {
  return (
    <Accordion type="multiple" className="w-full border-none bg-white">
      {datas &&
        datas.faq.map((data) => (
          <AccordionItem key={data.id} value={`item-${data.id}`}>
            <AccordionTrigger className="px-3 py-4 text-sm text-gray-700 text-ternary-800 hover:no-underline md:px-6 md:py-4 md:text-base">
              {data.question ?? "-"}
            </AccordionTrigger>
            <AccordionContent className="border-t border-ternary-200 shadow-[inset_0px_3px_20px_0px_rgb(0,0,0,0.1)]">
              <div className="px-6">
                <div
                  className="prose prose-sm mt-4 max-w-[100ch]"
                  dangerouslySetInnerHTML={{
                    __html: data.answer,
                  }}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
    </Accordion>
  );
};
