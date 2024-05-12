import { FaqData } from "@/data/FaqData";
import { FaqDropdown } from "@/modules/Faq/FaqDropdown";
import { FaqSelect } from "@/modules/Faq/FaqSelect";
import { FaqSidebar } from "@/modules/Faq/FaqSidebar";

export const metadata = {
  title: "FAQ",
};

const FaqControlPage = ({ params }) => {
  const filteredData = FaqData.find((data) => data.slug === params.slug);
  return (
    <>
      <div className="my-8 hidden w-full gap-5 rounded-xl bg-gray-50 p-5 md:flex">
        <FaqSidebar />
        <FaqDropdown datas={filteredData} />
      </div>
      <div className="my-8 flex flex-col rounded-xl bg-gray-50 p-3 md:hidden">
        <FaqSelect />
        <div className="mt-4">
          <FaqDropdown datas={filteredData} />
        </div>
      </div>
    </>
  );
};

export default FaqControlPage;
