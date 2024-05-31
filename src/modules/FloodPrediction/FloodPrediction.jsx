"use client";

import { formatDate } from "date-fns";
import { useState } from "react";

import {
  initialFloodPredictionIstiqlal,
  initialFloodPredictionManggarai,
} from "@/data/FloodPredictionData";

import { DatePicker } from "./DatePicker";
import LineChartIstiqlal from "./LineChartIstiqlal";
import LineChartManggarai from "./LineChartManggarai";

const FloodPrediction = () => {
  const [date, setDate] = useState(new Date(2024, 4, 26));
  const formattedDate = date ? formatDate(date, "yyyy-MM-dd") : null;

  return (
    <>
      <DatePicker date={date} setDate={setDate} />
      {/* Sluice Gate Manggarai */}
      <h2 className="mb-3 mt-5 text-lg font-semibold text-gray-700 lg:text-2xl">
        Pintu Air Manggarai
      </h2>
      <LineChartManggarai
        date={formattedDate}
        floodPredictionData={initialFloodPredictionManggarai}
      />

      {/* Sluice Gate Istiqlal */}
      <h2 className="mb-3 mt-6 text-lg font-semibold text-gray-700 lg:text-2xl">
        Pintu Air Istiqlal
      </h2>
      <LineChartIstiqlal
        date={formattedDate}
        floodPredictionData={initialFloodPredictionIstiqlal}
      />
      <p className="mt-2 text-right text-sm text-gray-500">Sumber: DSDA</p>
      <p className="mt-2 text-sm font-semibold italic text-gray-600">
        *Prediksi tinggi muka air ditampilkan untuk periode waktu dari 26 April
        2024 pukul 17.00 WIB hingga 27 April 2024 pukul 16.00 WIB.
      </p>
    </>
  );
};

export default FloodPrediction;
