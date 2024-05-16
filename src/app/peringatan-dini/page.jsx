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
      <EarlyWarningTab />
      <Footer />
    </>
  );
};

export default EarlyWarning;
