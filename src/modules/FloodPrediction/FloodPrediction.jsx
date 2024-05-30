'use client';

import { formatDate } from "date-fns";
import { useState } from "react";

import { initialFloodPredictionIstiqlal, initialFloodPredictionManggarai } from "@/data/FloodPredictionData";

import { DatePicker } from "./DatePicker";
import Diagram from "./Diagram";

const FloodPrediction = () => {
  const [date, setDate] = useState(new Date());
  const formattedDate = formatDate(date.toString(), "yyyy-MM-dd");
  return (
    <>
      <DatePicker date={date} setDate={setDate} />
      <h2 className="text-lg text-gray-700 mt-5 mb-3 font-semibold lg:text-2xl">Pintu Air Manggarai</h2>
      <Diagram date={formattedDate} floodPredictionData={initialFloodPredictionManggarai}/>
      <h2 className="text-lg text-gray-700 mt-6 mb-3 font-semibold lg:text-2xl">Pintu Air Istiqlal</h2>
      <Diagram date={formattedDate} floodPredictionData={initialFloodPredictionIstiqlal} />
    </>
  );
};

export default FloodPrediction;
