import { Header } from "@/components/Header";

const NewsLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default NewsLayout;
