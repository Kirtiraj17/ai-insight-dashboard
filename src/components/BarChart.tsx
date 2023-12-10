import { Bar } from "react-chartjs-2";

const BarChart = ({ title, labels, labelName }: { title: string, labels: any; labelName: string }) => {
  return (
    <div className="chart">
      <h3>{title}</h3>

      <Bar
        data={{
          labels: Object.keys(labels),
          datasets: [
            {
              label: labelName,
              backgroundColor: ["rgba(75,192,192,1)", "pink", "purple", "orange"],
              data: Object.values(labels),
            },
          ],
        }}
        options={{
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
