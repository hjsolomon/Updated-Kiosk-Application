import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { AnimationSpec } from "chart.js/auto";
import { pieRequestData } from "./GraphInterface/pieRequestData";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieGraph({ props }: { props: pieRequestData[] }) {
  const pieChartData = {
    labels: props.map((map) => map.status),
    datasets: [
      {
        label: "Total Used",
        data: props.map((map) => map.request),
        backgroundColor: [
          "rgba(255, 99, 13, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(150, 200, 15, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 13, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(150, 200, 15, 1)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    animation: {
      easing: "easeInOutSine" as AnimationSpec<never>["easing"], // Corrected easing value
      loop: false,
      duration: 2500,
    },
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2.3,
    plugins: {
      title: {
        display: true,
        text: "Pie Chart of proportion request used",
      },
    },
  };
  return (
    <>
      <Pie options={options} data={pieChartData} />
    </>
  );
}

export default PieGraph;
