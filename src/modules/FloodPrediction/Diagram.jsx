"use client";
import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Filler,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      backgroundColor: "#f7f7f7",
      titleColor: "#000",
      bodyColor: "#000",
      titleAlign: "left",
      bodyAlign: "left",
      displayColors: true,
      padding: 5,
      titleFont: {
        size: 14,
      },
      bodyFont: {
        size: 12,
      },
      callbacks: {
        title: (value) => {
          return `${value[0].label} WIB`;
        },
        label: (value) => {
          const datasetLabel = value.dataset.label;
          const height = value.parsed.y;
          return `${datasetLabel}: ${height} cm`;
        },
      },
    },
  },
  scales: {
    y: {
      min: 0,
      max: 1000,
      ticks: {
        callback: function (value) {
          return value + " cm";
        },
        color: "#545F71",
        font: {
          size: 14,
        },
      },
    },
  },
};

const Diagram = ({ date, floodPredictionData }) => {
  const perDay = floodPredictionData.filter((item) => {
    return item.date.startsWith(date);
  });
  const timePerDay = perDay.map((item) => item.date);
  const actualWaterPerDay = perDay.map(
    (item) => item.actual_water_level_istiqlal ? item.actual_water_level_istiqlal : item.actual_water_level_manggarai
  );
  const predictedWaterPerDay = perDay.map(
    (item) => item.predicted_water_level_istiqlal ? item.predicted_water_level_istiqlal : item.predicted_water_level_manggarai
  );

  const data = {
    labels: timePerDay.map((time) => {
      const splittedTime = time.split(" ");
      return `${splittedTime[1]}`;
    }), // LABEL SUMBU X
    datasets: [
      {
        label: "Tinggi Muka Air",
        data: actualWaterPerDay, // LABEL SUMBU Y
        borderColor: "rgb(32,172,204)",
        backgroundColor: "rgba(32,172,204, 0.5)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "Prediksi Tinggi Muka Air",
        data: predictedWaterPerDay, // LABEL SUMBU Y
        borderColor:  "green",
        backgroundColor: "rgba(53, 162, 235, 0.00)",
        tension: 0.4,
        fill: false,
      },
      {
        label: "Batas Siaga 1",
        data: predictedWaterPerDay.map(() => "950"), // LABEL SUMBU Y
        borderColor: "red",
        backgroundColor: "rgba(53, 162, 235, 0.0)",
        tension: 0.4,
        fill: false,
      },
      {
        label: "Batas Siaga 2",
        data: predictedWaterPerDay.map(() => "850"), // LABEL SUMBU Y
        borderColor: "orange",
        backgroundColor: "rgba(53, 162, 235, 0.0)",
        tension: 0.4,
        fill: false,
      },
      {
        label: "Batas Siaga 3",
        data: predictedWaterPerDay.map(() => "750"), // LABEL SUMBU Y
        borderColor: "yellow",
        backgroundColor: "rgba(53, 162, 235, 0.0)",
        tension: 0.4,
        fill: false,
      },
    ],
  };
  return <Line options={options} data={data} />;
};

export default Diagram;
