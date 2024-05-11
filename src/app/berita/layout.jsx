import { Header } from "@/components/Header";

const NewsLayout = ({ children }) => {
  return (
    <>
      <Header isTransparent={true} />
      {children}
    </>
  );
};

export default NewsLayout;
