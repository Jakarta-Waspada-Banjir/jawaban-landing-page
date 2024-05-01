import { Banner } from "@/components/Banner";
import FloodAuthoritiesMenu from "@/components/FloodAuthoritiesMenu";
import { Header } from "@/components/Header";
import { Separator } from "@/components/ui/separator";

export default function FloodControlLayout({ children }) {
  return (
    <>
      <Header />
      <Banner>
        <h1 className="text-center text-xl font-semibold text-white sm:text-2xl">
          Pengendalian Banjir
        </h1>
        <p className="text-center text-lg text-white sm:text-xl">
          Temukan Strategi dan Teknologi Pengendalian Banjir
        </p>
      </Banner>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="my-8 flex items-center gap-7">
          <FloodAuthoritiesMenu />
          <Separator className="flex-1 rounded-full border-2 border-primary" />
        </div>
        <div className="my-8 flex h-[600px] w-full gap-5 rounded-xl bg-primary/10 p-5">
          {children}
        </div>
      </section>
    </>
  );
}
