"use client";

import { useState } from "react";

import { SearchIcon } from "@/components/icons";
import { Badge, Input } from "@/components/ui";
import { initialWaterLevelData, waterLevelStatus } from "@/data/HomeData";
import { formatDate } from "@/utils";

export const WaterLevel = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => setSearch(e.target.value);

  const filteredWaterLevelData = initialWaterLevelData.filter(
    (data) =>
      data.name.toLowerCase().includes(search.toLowerCase()) ||
      data.category.toLowerCase().includes(search.toLowerCase()) ||
      data.status.toLowerCase().includes(search.toLowerCase()) ||
      data.weather.toLowerCase().includes(search.toLowerCase()) ||
      data.water_flow.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
      <h1 className="mb-6 text-2xl font-semibold text-gray-700 md:text-3xl">
        Data Tinggi Muka Air
      </h1>
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
                      Waktu
                    </th>
                    <th className="whitespace-nowrap p-4 align-middle font-semibold">
                      Aliran
                    </th>
                    <th className="whitespace-nowrap p-4 align-middle font-semibold">
                      Cuaca
                    </th>
                    <th className="whitespace-nowrap p-4 align-middle font-semibold">
                      Tinggi Air
                    </th>
                    <th className="whitespace-nowrap p-4 align-middle font-semibold">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ternary-100 font-medium text-gray-600">
                  {filteredWaterLevelData.length > 0 ? (
                    filteredWaterLevelData.map((waterLevelData) => (
                      <tr key={waterLevelData.id}>
                        <td className="whitespace-nowrap p-4 align-middle">
                          {waterLevelData.name ?? "-"}
                        </td>
                        <td className="whitespace-nowrap p-4 align-middle">
                          {waterLevelData.category ?? "-"}
                        </td>
                        <td className="whitespace-nowrap p-4 align-middle">
                          {waterLevelData.date
                            ? formatDate(waterLevelData.date, "dd MMMM yyy")
                            : "-"}
                        </td>
                        <td className="whitespace-nowrap p-4 align-middle">
                          {waterLevelData.time ?? "-"}
                        </td>
                        <td className="whitespace-nowrap p-4 align-middle">
                          {waterLevelData.water_flow ?? "-"}
                        </td>
                        <td className="whitespace-nowrap p-4 align-middle">
                          {waterLevelData.weather ?? "-"}
                        </td>
                        <td className="whitespace-nowrap p-4 align-middle">
                          {waterLevelData.water_height ?? "-"}
                        </td>
                        <td className="whitespace-nowrap p-4 align-middle">
                          {waterLevelData.status_code ? (
                            <Badge
                              variant={
                                waterLevelData.status_code ===
                                waterLevelStatus.STANDBY1
                                  ? "destructive"
                                  : waterLevelData.status_code ===
                                      waterLevelStatus.STANDBY2
                                    ? "orange"
                                    : waterLevelData.status_code ===
                                        waterLevelStatus.STANDBY3
                                      ? "warning"
                                      : waterLevelData.status_code ===
                                          waterLevelStatus.NORMAL
                                        ? "success"
                                        : "light"
                              }
                            >
                              {waterLevelData.status}
                            </Badge>
                          ) : (
                            "-"
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8" className="h-24 text-center">
                        Data tidak ditemukan
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
