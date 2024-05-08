import { Header } from "@/components/Header";

const NewsLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="mx-auto h-[1000px] max-w-7xl px-4 pt-28 sm:px-6 lg:px-8">
        {children}
      </div>
    </>
  );
};

export default NewsLayout;
