import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui";
import FloodPrediction from "@/modules/FloodPrediction/FloodPrediction";

export const metadata = {
  title: "Prediksi Banjir",
};

const FloodPredictionPage = () => {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-7xl px-4 py-4 pt-24 sm:px-6 lg:px-8 lg:py-6 lg:pt-32">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Beranda</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium text-primary">
                Prediksi Banjir
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="my-8">
          <h1 className="mb-2 text-2xl font-semibold text-gray-700 md:text-3xl">
            Prediksi Banjir
          </h1>
          <p className="text-sm font-medium text-gray-500 sm:text-base">
          Menyediakan visualisasi data tingkat muka air di pintu air Manggarai dan Istiqlal, menampilkan perbandingan antara data aktual dan prediksi. Informasi yang jelas dan mudah dibaca memastikan pemantauan yang efektif untuk menjaga keselamatan dan kesiapsiagaan.
          </p>
        </div>
        
        {/* DIAGRAM PREDIKSI BANJIR */}
        <FloodPrediction />

      </div>
      <Footer />
    </>
  );
};

export default FloodPredictionPage;
