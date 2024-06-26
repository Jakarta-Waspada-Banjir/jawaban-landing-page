"use client";

import {
  ChevronDownCircleIcon,
  ChevronRightCircleIcon,
  ChevronUpCircleIcon,
} from "lucide-react";
import { useState } from "react";

import { SearchIcon } from "@/components/icons";
import { Badge, Input } from "@/components/ui";
import { earlyWarningStatus } from "@/data/EarlyWarningData";
import { initialWaterLevelData } from "@/data/HomeData";
import { formatDate } from "@/utils";

export const EarlyWarningList = ({ status }) => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => setSearch(e.target.value);

  const filteredEarlyWarningData = initialWaterLevelData.filter(
    (earlyWarning) => {
      const matchesStatus =
        (status === 0 && [1, 2, 3].includes(earlyWarning.status_siaga)) ||
        earlyWarning.status_siaga === status;

      const matchesSearch =
        earlyWarning.pintu_air.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        earlyWarning.pintu_air.aliran
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        earlyWarning.status.toLowerCase().includes(search.toLowerCase());

      return matchesStatus && matchesSearch;
    },
  );

  return (
    <div className="mt-6">
      <div className="rounded-md border-x border-t border-ternary-100 bg-white shadow lg:rounded-xl">
        {/* Search */}
        <div className="px-4 pb-7 pt-5">
          <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-1 items-center">
              <div className="relative w-full lg:w-[357px]">
                <Input
                  placeholder="Cari..."
                  autoComplete="off"
                  className="h-8 w-full rounded-full bg-ternary-100 px-6 py-5 pr-12 text-black shadow-sm placeholder:text-ternary-700"
                  onChange={handleSearch}
                />
                <div className="absolute right-0 top-1/2 mr-2 flex h-7 w-7 -translate-y-1/2 items-center rounded-full bg-primary p-1">
                  <SearchIcon className="h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="px-4 pb-4">
          <div className="overflow-y-hidden rounded-lg border border-ternary-100 shadow-sm">
            <div className="no-scrollbar h-min max-h-[640px] overflow-y-auto">
              <table className="w-full table-auto divide-y divide-ternary-100 text-left align-top text-sm text-slate-700 sm:text-base">
                <thead className="sticky top-0 bg-primary text-white">
                  <tr>
                    <th className="whitespace-nowrap p-4 align-middle font-semibold">
                      Nama
                    </th>
                    <th className="whitespace-nowrap p-4 align-middle font-semibold">
                      Kategori
                    </th>
                    <th className="whitespace-nowrap p-4 align-middle font-semibold">
                      Tanggal
                    </th>
                    <th className="whitespace-nowrap p-4 align-middle font-semibold">
                      Aliran
                    </th>
                    <th className="whitespace-nowrap p-4 align-middle font-semibold">
                      Tinggi Muka Air
                    </th>
                    <th className="whitespace-nowrap p-4 align-middle font-semibold">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ternary-100 text-sm font-medium text-gray-600">
                  {filteredEarlyWarningData.length > 0 ? (
                    filteredEarlyWarningData.map((earlyWarningData) => (
                      <tr key={earlyWarningData.id}>
                        <td className="whitespace-nowrap p-4 align-middle">
                          {earlyWarningData.pintu_air.name ?? "-"}
                        </td>
                        <td className="whitespace-nowrap p-4 align-middle">
                          {earlyWarningData.category ?? "-"}
                        </td>
                        <td className="whitespace-nowrap p-4 align-middle">
                          {earlyWarningData.tanggal
                            ? formatDate(
                                `${earlyWarningData.tanggal}T${earlyWarningData.jam}`,
                                "dd MMMM yyy | HH:mm:ss",
                              )
                            : "-"}
                        </td>
                        <td className="whitespace-nowrap p-4 align-middle">
                          {earlyWarningData.pintu_air.aliran ?? "-"}
                        </td>
                        <td className="whitespace-nowrap p-4 align-middle">
                          {earlyWarningData.ketinggian
                            ? earlyWarningData.ketinggian + " cm"
                            : "-"}
                        </td>
                        <td className="whitespace-nowrap p-4 align-middle">
                          {earlyWarningData.status_siaga ? (
                            <Badge
                              variant={
                                earlyWarningData.status_siaga ===
                                earlyWarningStatus.STANDBY1
                                  ? "destructive"
                                  : earlyWarningData.status_siaga ===
                                      earlyWarningStatus.STANDBY2
                                    ? "orange"
                                    : earlyWarningData.status_siaga ===
                                        earlyWarningStatus.STANDBY3
                                      ? "warning"
                                      : earlyWarningData.status_siaga ===
                                          earlyWarningStatus.NORMAL
                                        ? "success"
                                        : "light"
                              }
                            >
                              {earlyWarningData.status}
                            </Badge>
                          ) : (
                            "-"
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="h-24 text-center">
                        Data tidak ditemukan
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Keterangan */}
          <div className="mt-5">
            <h3 className="text-sm font-medium italic text-gray-400">
              *Keterangan
            </h3>
            <table className="mt-2 text-left align-top text-sm text-slate-700 sm:text-base">
              <tbody className="text-sm font-medium text-gray-600">
                <tr>
                  <td className="whitespace-nowrap p-2 text-center align-middle">
                    P.S.
                  </td>
                  <td className="p-2 align-middle">
                    Peil Scale{" "}
                    <span className="italic">(Alat ukur tinggi muka air)</span>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap p-2 text-center align-middle">
                    P.A.
                  </td>
                  <td className="p-2 align-middle">Pintu Air</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
