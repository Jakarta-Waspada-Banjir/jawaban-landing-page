"use client";

import { useState } from "react";

import { SearchIcon } from "@/components/icons";
import { Input } from "@/components/ui";
import { initialWaterPumpData } from "@/data/HomeData";
import { formatDate } from "@/utils";

export const WaterPumpList = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => setSearch(e.target.value);

  const filteredWaterPumpData = initialWaterPumpData.filter(
    (data) =>
      data.pompa_air.name.toLowerCase().includes(search.toLowerCase()) ||
      data.cuaca.nama.toLowerCase().includes(search.toLowerCase()),
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
                      Wilayah
                    </th>
                    <th className="whitespace-nowrap p-4 align-middle font-semibold">
                      Tanggal
                    </th>
                    <th className="whitespace-nowrap p-4 align-middle font-semibold">
                      Cuaca
                    </th>
                    <th className="whitespace-nowrap p-4 align-middle font-semibold">
                      Total Pompa
                    </th>
                    <th className="whitespace-nowrap p-4 align-middle font-semibold">
                      Beroperasi
                    </th>
                    <th className="whitespace-nowrap p-4 align-middle font-semibold">
                      Disiagakan
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ternary-100 font-medium text-gray-600">
                  {filteredWaterPumpData.length > 0 ? (
                    filteredWaterPumpData.map((waterPumpData) => (
                      <tr key={waterPumpData.id}>
                        <td className="whitespace-nowrap p-4 align-middle">
                          {waterPumpData.pompa_air.name ?? "-"}
                        </td>
                        <td className="whitespace-nowrap p-4 align-middle">
                          {waterPumpData.tanggal
                            ? formatDate(
                                `${waterPumpData.tanggal}T${waterPumpData.jam}`,
                                "dd MMMM yyy | HH:mm:ss",
                              )
                            : "-"}
                        </td>
                        <td className="whitespace-nowrap p-4 align-middle">
                          {waterPumpData.cuaca.nama ?? "-"}
                        </td>
                        <td className="whitespace-nowrap p-4 align-middle">
                          {waterPumpData.total_pompa ?? "-"}
                        </td>
                        <td className="whitespace-nowrap p-4 align-middle">
                          {waterPumpData.pompa_operasi ?? "-"}
                        </td>
                        <td className="whitespace-nowrap p-4 align-middle">
                          {waterPumpData.pompa_siaga ?? "-"}
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
            <ul className="ml-4 mt-2 list-disc text-sm text-gray-600">
              <li className="mb-1.5">
                Pompa air memiliki pengoperasiannya yang berbeda sesuai dengan
                ketinggian muka air di tiap aliran sungai.
              </li>
              <li>
                Pompa air tidak bisa dioperasikan serentak secara terus menerus
                (pompa dinyalakan bergantian) untuk menghindari kerusakan.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
