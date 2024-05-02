import { Header } from "@/components/Header";
import { EarlyWarning } from "@/modules/Home/EarlyWarning";
import { NewsCarousel } from "@/modules/Home/NewsCarousel";
import { QuickAccess } from "@/modules/Home/QuickAccess";
import { RelatedNews } from "@/modules/Home/RelatedNews";
import { WaterLevel } from "@/modules/Home/WaterLevel";

export default function Home() {
  return (
    <>
      <Header />
      <NewsCarousel />
      <EarlyWarning />
      <WaterLevel />
      <QuickAccess />
      <RelatedNews />
    </>
  );
}
