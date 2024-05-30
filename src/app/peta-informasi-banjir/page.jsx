import dynamic from "next/dynamic";

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

export const metadata = {
  title: "Peta Informasi Banjir",
};

const DynamicMap = dynamic(() => import("@/modules/FloodInformationMap/Map"), {
  ssr: false,
});

const FloodInformationMap = () => {
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
                Peta Informasi Banjir
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="my-8">
          <h1 className="mb-2 text-2xl font-semibold text-gray-700 md:text-3xl">
            Peta Informasi Banjir
          </h1>
          <p className="text-sm font-medium text-gray-500 sm:text-base">
            Menyediakan visualisasi komprehensif dan terperinci tentang
            tempat-tempat yang dapat menginformasikan ketinggian air untuk memprediksi banjir. Dengan menginformasikan data total pintu air, rumah pompa, pos curah hujan, pos pengamatan, posko banjir, dan waduk.
          </p>
        </div>

        <div className="mt-6">
          <DynamicMap />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FloodInformationMap;
