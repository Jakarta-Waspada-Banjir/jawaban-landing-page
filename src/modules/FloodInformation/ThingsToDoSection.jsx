import { thingsToDo } from "@/data/FloodInformation";

const ThingsToDoSection = () => {
  return (
    <section className="mx-auto my-8 max-w-7xl px-4 sm:px-6 lg:mb-8 lg:mt-16 lg:px-8">
      <div className="flex flex-col">
        <h2 className="mx-auto mt-8 text-xl font-semibold md:text-2xl">
          Hal Yang Harus Dilakukan
        </h2>
        <p className="text-center md:text-lg">
          Beberapa hal penting yang dapat dilakukan untuk antisipasi musibah
          banjir
        </p>

        <div className="mt-5 grid grid-cols-1 gap-7 lg:grid-cols-2 xl:grid-cols-2">
          {thingsToDo.map(({ id, icon, title, list }) => (
            <div
              key={id}
              className="flex flex-col gap-3 rounded-xl border-2 p-8 md:p-10"
            >
              {icon}
              <h4 className="text-xl font-semibold">{title}</h4>
              <ul>
                {list.map((data, index) => (
                  <li className="list-outside list-decimal" key={index}>
                    {data}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThingsToDoSection;
