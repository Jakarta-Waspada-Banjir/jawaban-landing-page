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
import FloodAuthoritiesMenu from "@/modules/FloodInformation/FloodAuthoritiesMenu";
import FloodInformationSection from "@/modules/FloodInformation/FloodInformationSection";
import ThingsToDoSection from "@/modules/FloodInformation/ThingsToDoSection";

export default function FloodControlLayout({ children }) {
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
                Informasi Banjir
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="my-8">
          <h1 className="text-xl font-semibold md:text-2xl">
            Kenapa Jakarta Sering Mengalami Banjir?
          </h1>
          <p className="text-sm font-medium text-gray-500 sm:text-base">
            Secara geografis, DKI Jakarta merupakan dataran rendah yang berada
            di antara hulu sungai dan pesisir. Berikut adalah 3 penyebab utama
            Jakarta sering mengalami banjir:
          </p>
        </div>

        <FloodInformationSection />

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="my-8 flex flex-col items-center gap-5">
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-semibold md:text-2xl lg:mt-8">
                Pengendalian Banjir
              </h2>
              <p className="text-center font-medium text-gray-500 md:text-lg">
                Ketahui cara pengendalian banjir yang dapat dilakukan baik oleh
                pemerintah atau masyarakat
              </p>
            </div>
            <FloodAuthoritiesMenu />
          </div>
          {children}
        </section>

        <ThingsToDoSection />
      </div>

      <Footer />
    </>
  );
}
