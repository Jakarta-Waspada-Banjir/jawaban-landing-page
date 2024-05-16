import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { EarlyWarningTab } from "@/modules/EarlyWarning/EarlyWarningTab";

export const metadata = {
  title: "Peringatan Dini",
};

const EarlyWarning = () => {
  return (
    <>
      <Header />
      <div className="pt-20 lg:pt-28">
        <EarlyWarningTab />
      </div>
      <Footer />
    </>
  );
};

export default EarlyWarning;
