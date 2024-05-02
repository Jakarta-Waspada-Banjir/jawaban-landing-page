import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui";

import { EarlyWarningList } from "./EarlyWarningList";

const earlyWarningStatus = {
  ALL: 0,
  STANDBY1: 1,
  STANDBY2: 2,
  STANDBY3: 3,
  NORMAL: 4,
};

export const EarlyWarningTab = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="font-medium text-primary">
              Breadcrumb
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="my-8">
        <h1 className="mb-2 text-2xl font-semibold text-gray-700 md:text-3xl">
          Peringatan Dini
        </h1>
        <p className="text-sm font-medium text-gray-500 sm:text-base">
          Memberikan pemberitahuan awal untuk meningkatkan kesadaran dan
          kesiapsiagaan masyarakat terhadap risiko banjir
        </p>
      </div>

      <Tabs defaultValue={earlyWarningStatus.ALL} className="mt-6">
        <div className="no-scrollbar overflow-x-auto border-b-2 border-ternary-100 pb-1">
          <TabsList className="bg-inherit pb-0 pl-0">
            <TabsTrigger
              value={earlyWarningStatus.ALL}
              className="mr-8 rounded-none border-primary px-0 pb-3 text-base font-medium data-[state=active]:border-b-2 data-[state=active]:bg-inherit data-[state=active]:text-primary data-[state=active]:shadow-none sm:pb-2 sm:text-lg"
            >
              Semua
            </TabsTrigger>
            <TabsTrigger
              value={earlyWarningStatus.STANDBY1}
              className="mr-8 rounded-none border-primary px-0 pb-3 text-base font-medium data-[state=active]:border-b-2 data-[state=active]:bg-inherit data-[state=active]:text-primary data-[state=active]:shadow-none sm:pb-2 sm:text-lg"
            >
              Siaga 1
            </TabsTrigger>
            <TabsTrigger
              value={earlyWarningStatus.STANDBY2}
              className="mr-8 rounded-none border-primary px-0 pb-3 text-base font-medium data-[state=active]:border-b-2 data-[state=active]:bg-inherit data-[state=active]:text-primary data-[state=active]:shadow-none sm:pb-2 sm:text-lg"
            >
              Siaga 2
            </TabsTrigger>
            <TabsTrigger
              value={earlyWarningStatus.STANDBY3}
              className="mr-8 rounded-none border-primary px-0 pb-3 text-base font-medium data-[state=active]:border-b-2 data-[state=active]:bg-inherit data-[state=active]:text-primary data-[state=active]:shadow-none sm:pb-2 sm:text-lg"
            >
              Siaga 3
            </TabsTrigger>
            <TabsTrigger
              value={earlyWarningStatus.NORMAL}
              className="mr-8 rounded-none border-primary px-0 pb-3 text-base font-medium data-[state=active]:border-b-2 data-[state=active]:bg-inherit data-[state=active]:text-primary data-[state=active]:shadow-none sm:pb-2 sm:text-lg"
            >
              Normal
            </TabsTrigger>
          </TabsList>
        </div>
        {/* All */}
        <TabsContent value={earlyWarningStatus.ALL}>
          <EarlyWarningList status={earlyWarningStatus.ALL} />
        </TabsContent>
        {/* Standby 1 */}
        <TabsContent value={earlyWarningStatus.STANDBY1}>
          <EarlyWarningList status={earlyWarningStatus.STANDBY1} />
        </TabsContent>
        {/* Standby 2 */}
        <TabsContent value={earlyWarningStatus.STANDBY2}>
          <EarlyWarningList status={earlyWarningStatus.STANDBY2} />
        </TabsContent>
        {/* Standby 3 */}
        <TabsContent value={earlyWarningStatus.STANDBY3}>
          <EarlyWarningList status={earlyWarningStatus.STANDBY3} />
        </TabsContent>
        {/* Normal */}
        <TabsContent value={earlyWarningStatus.NORMAL}>
          <EarlyWarningList status={earlyWarningStatus.NORMAL} />
        </TabsContent>
      </Tabs>
    </div>
  );
};
