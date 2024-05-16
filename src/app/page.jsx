import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { BannerCarousel } from "@/modules/Home/BannerCarousel";
import { ContactUs } from "@/modules/Home/ContactUs";
import { EarlyWarning } from "@/modules/Home/EarlyWarning";
import { QuickAccess } from "@/modules/Home/QuickAccess";
import { RelatedNews } from "@/modules/Home/RelatedNews";
import { WaterLevel } from "@/modules/Home/WaterLevel";

export default function Home() {
  return (
    <>
      <Header />
      <div className="pt-20 lg:pt-28">
        <BannerCarousel />
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
