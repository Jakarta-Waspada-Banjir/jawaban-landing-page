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
      <div className="pt-24 lg:pt-32">
        <EarlyWarningTab />
      </div>
      <Footer />
    </>
  );
};

export default EarlyWarning;
