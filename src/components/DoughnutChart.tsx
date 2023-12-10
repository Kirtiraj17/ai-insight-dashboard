import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({ title, labels }: { title: string, labels: any }) => {
  return (
    <div className="chart">
      <h3>{title}</h3>

      <Doughnut
        data={{
          labels: labels.map((item: any) =>
            item?.date ? item.date : item.week
          ),
          datasets: [
            {
              data: labels.map(
                (item: any) => item?.average_time
              ),
              backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#4CAF50",
                "#9C27B0",
              ],
              borderWidth: 1,
              // borderColor: "transparent"
            },
          ],
        }}
      />
    </div>
  );
};

export default DoughnutChart;
