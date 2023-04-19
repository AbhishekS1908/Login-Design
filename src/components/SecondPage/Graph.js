import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
//import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Graph = () => {
  const labels = ["Week 1", "Week 2", "Week 3", "Week 4"];

  const data = {
    labels,
    datasets: [
      {
        label: "User",
        data: [100, 450, 70, 450],
        borderColor: "#9BDD7C",
        backgroundColor: "#9BDD7C",
        pointStrokeColor: "#FFFFFF",
        lineTension: 0.4,
        radius: 6,
        pointRadius: 0,
      },
      {
        label: "Guest",
        data: [200, 350, 140, 500],
        borderColor: "#E9A0A0",
        backgroundColor: "#E9A0A0",
        pointStrokeColor: "#FFFFFF",
        lineTension: 0.4,
        radius: 6,
        pointRadius: 0,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 500,
        min: 0,
        ticks: {
          stepSize: 100,
        },
        gridLines: {
          display: false,
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: false,
      },
      pointelement: {
        enabled: false,
      },
      legend: {
        position: "top",
        align: "end",
        labels: {
          usePointStyle: true,
          boxWidth: 5,
          boxHeight: 5,
        },
      },
    },
  };

  return (
    <div className="flex h-52 w-11/12 font-Lato ml-10">
      <Line data={data} options={options} />
    </div>
  );
};

export default Graph;
