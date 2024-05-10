import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ContactUs } from "@/modules/Home/ContactUs";
import { EarlyWarning } from "@/modules/Home/EarlyWarning";
import { NewsCarousel } from "@/modules/Home/NewsCarousel";
import { QuickAccess } from "@/modules/Home/QuickAccess";
import { RelatedNews } from "@/modules/Home/RelatedNews";
import { WaterLevel } from "@/modules/Home/WaterLevel";

export default function Home() {
  return (
    <>
      <Header />
      <div className="pt-24 lg:pt-32">
        <NewsCarousel />
        <EarlyWarning />
        <WaterLevel />
        <QuickAccess />
        <RelatedNews />
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}
