import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";

import { WaterLevelList } from "./WaterLevelList";
import { WaterPumpList } from "./WaterPumpList";

export const WaterManagementTab = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-700 md:text-3xl">
          Pengelolaan Air
        </h1>
      </div>

      <Tabs defaultValue="tinggi_air" className="mt-6">
        <div className="no-scrollbar overflow-x-auto border-b-2 border-ternary-100 pb-1">
          <TabsList className="bg-inherit pb-0 pl-0">
            <TabsTrigger
              value="tinggi_air"
              className="mr-8 rounded-none border-primary px-0 pb-3 text-base font-medium data-[state=active]:border-b-2 data-[state=active]:bg-inherit data-[state=active]:text-primary data-[state=active]:shadow-none sm:pb-2 sm:text-lg"
            >
              Data Tinggi Muka Air
            </TabsTrigger>
            <TabsTrigger
              value="pompa_air"
              className="mr-8 rounded-none border-primary px-0 pb-3 text-base font-medium data-[state=active]:border-b-2 data-[state=active]:bg-inherit data-[state=active]:text-primary data-[state=active]:shadow-none sm:pb-2 sm:text-lg"
            >
              Data Pompa Air Tersedia
            </TabsTrigger>
          </TabsList>
        </div>
        {/* Water Level List */}
        <TabsContent value="tinggi_air">
          <WaterLevelList />
        </TabsContent>
        {/* Water Pump List */}
        <TabsContent value="pompa_air">
          <WaterPumpList />
        </TabsContent>
      </Tabs>
      <p className="mt-2 text-right text-sm text-gray-500">Sumber: DSDA</p>
    </div>
  );
};
