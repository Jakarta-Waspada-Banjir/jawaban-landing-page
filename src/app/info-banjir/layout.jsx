import { Banner } from "@/components/Banner";
import { Header } from "@/components/Header";
import FloodAuthoritiesMenu from "@/modules/FloodInformation/FloodAuthoritiesMenu";
import FloodInformationSection from "@/modules/FloodInformation/FloodInformationSection";
import ThingsToDoSection from "@/modules/FloodInformation/ThingsToDoSection";

export default function FloodControlLayout({ children }) {
  return (
    <>
      <Header />
      <Banner>
        <h1 className="text-center text-xl font-semibold text-white sm:text-2xl">
          Info Banjir Jakarta
        </h1>
        <p className="text-center text-lg text-white sm:text-xl">
          Temukan berbagai informasi mengenai banjir di Jakarta, mulai dari
          penyebab hingga mitigasi banjir di Jakarta.
        </p>
      </Banner>

      <FloodInformationSection />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="my-8 flex flex-col items-center gap-5">
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold md:text-2xl lg:mt-8">
              Pengendalian Banjir
            </h2>
            <p className="text-center md:text-lg">
              Ketahui cara pengendalian banjir yang dapat dilakukan baik oleh
              pemerintah atau masyarakat
            </p>
          </div>
          <FloodAuthoritiesMenu />
        </div>
        {children}
      </section>

      <ThingsToDoSection />
    </>
  );
}
