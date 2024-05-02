import { Banner } from "@/components/Banner";
import { Header } from "@/components/Header";
import { Separator } from "@/components/ui/separator";
import { thingsToDo } from "@/data/FloodInformation";
import FloodAuthoritiesMenu from "@/modules/FloodControl/FloodAuthoritiesMenu";

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
          <Separator className="hidden flex-1 rounded-full border-2 border-primary md:block" />
        </div>
        {children}
      </section>

      <section className="mx-auto my-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col">
          <h2 className="mx-auto mt-8 text-2xl font-semibold">
            Hal Yang Harus Dilakukan
          </h2>
          <div className="mt-5 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {thingsToDo.map(({ id, icon, title, list }) => (
              <div
                key={id}
                className="flex flex-col gap-3 rounded-xl border p-8"
              >
                {icon}
                <h4 className="text-xl font-semibold">{title}</h4>
                <ul>
                  {list.map((data, index) => (
                    <li className="list-inside list-decimal" key={index}>
                      {data}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
