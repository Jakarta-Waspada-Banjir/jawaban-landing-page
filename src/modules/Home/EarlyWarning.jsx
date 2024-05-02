import Image from "next/image";
import Link from "next/link";

import { BoxArrowUpRightIcon, FloodIcon } from "@/components/icons";
import { Badge, Button, Card } from "@/components/ui";
import { earlyWarningStatus, initialEarlyWarningData } from "@/data/HomeData";
import { formatDate } from "@/utils";

export const EarlyWarning = () => {
  const filteredEarlyWarningData = initialEarlyWarningData.filter(
    (earlyWarning) => earlyWarning.status_code !== earlyWarningStatus.NORMAL,
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-700 md:text-3xl">
          Peringatan Dini
        </h1>
        <Button
          variant="outline_primary"
          className="text-sm hover:bg-primary/10 hover:text-primary"
          asChild
        >
          <Link
            href="#"
            className="inline-flex items-center font-semibold text-primary"
          >
            Lihat Semua
            <BoxArrowUpRightIcon className="ms-2 h-3 w-3" />
          </Link>
        </Button>
      </div>

      {initialEarlyWarningData.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredEarlyWarningData.map((earlyWarning) => (
            <Link href="#" className="group" key={earlyWarning.id}>
              <Card className="p-4 duration-200 ease-in-out group-hover:border-primary group-hover:bg-primary/10">
                <div className="mb-1.5 flex items-center justify-between">
                  <h5 className="text-sm font-medium text-gray-400">
                    {earlyWarning.date
                      ? formatDate(earlyWarning.date, "dd MMMM yyy | HH:mm") +
                        " WIB"
                      : "-"}
                  </h5>
                  {earlyWarning.status_code ? (
                    <Badge
                      variant={
                        earlyWarning.status_code === earlyWarningStatus.STANDBY1
                          ? "destructive"
                          : earlyWarning.status_code ===
                              earlyWarningStatus.STANDBY2
                            ? "orange"
                            : earlyWarning.status_code ===
                                earlyWarningStatus.STANDBY3
                              ? "warning"
                              : earlyWarning.status_code ===
                                  earlyWarningStatus.NORMAL
                                ? "success"
                                : "light"
                      }
                    >
                      {earlyWarning.status}
                    </Badge>
                  ) : (
                    "-"
                  )}
                </div>
                <h1 className="line-clamp-2 text-lg font-bold text-gray-800 duration-200 ease-in-out group-hover:text-primary">
                  {earlyWarning.title ?? "-"}
                </h1>
                <h4 className="line-clamp-2 font-medium text-gray-600">
                  {earlyWarning.location ?? "-"}
                </h4>
                <div className="mt-3 flex items-center">
                  <FloodIcon className="h-auto w-9 text-primary" />
                  <p className="ml-3 text-lg font-semibold text-gray-700">
                    {earlyWarning.flood_height
                      ? earlyWarning.flood_height + " cm"
                      : "-"}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className="mx-auto my-6 flex max-w-[550px] flex-col items-center justify-center text-center">
          <Image
            src="/images/empty-state/early-warning-not-found.png"
            alt="early-warning-not-found"
            width={240}
            height={240}
            sizes="100vw"
            className="h-full"
          />
          <h2 className="mt-3 text-2xl font-bold text-black sm:text-3xl">
            Tidak ada informasi Peringatan Dini
          </h2>
          <p className="mt-3 text-sm text-ternary-500 sm:text-base">
            Tidak ada peringatan dini yang dikeluarkan pada saat ini. Kami terus
            memantau kondisi dan akan memberitahu Anda jika ada perubahan yang
            memerlukan perhatian.
          </p>
        </div>
      )}
    </div>
  );
};
