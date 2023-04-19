import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

const PieChart = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  // Data for the pie chart
  const data = {
    labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
    datasets: [
      {
        data: [55, 31, 14],
        backgroundColor: ["#98D89E", "#F6DC7D", "#EE8484"],
        hoverBackgroundColor: ["#98D81A", "#F6D123", "#EE7218"],
        borderWidth: 0,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: true,
        position: "right",
        labels: {
          usePointStyle: true,
          boxWidth: 5,
          boxHeight: 5,
        
        },
      },
    },
  };

  return (
    <div className="flex h-64 lg:h-36 mt-10 mr-24">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
