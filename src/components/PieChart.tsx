import { Pie } from "react-chartjs-2";

type Labels = {
  rating: number;
  count: number;
}

const BarChart = ({ title, labels }: { title: string, labels: Labels[] }) => {
  return (
    <div className="chart">
      <h3>{title}</h3>

      <Pie
        data={{
          labels: labels.map((item) =>
            item?.rating.toString()
          ),
          datasets: [
            {
              data: labels.map(
                (item) => item?.count
              ),
              backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#4CAF50",
                "#9C27B0",
              ],
            },
          ],
        }}
      />
    </div>
  );
};

export default BarChart;
