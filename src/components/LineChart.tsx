import { Line } from "react-chartjs-2";

const LineChart = ({ title, labels, labelName }: { title: string, labels: any; labelName: string }) => {
  return (
    <div className="chart">
      <h3>{title}</h3>

      <Line
        data={{
          labels: labels.map((item: any) => item.date ? item.date : item.week),
          datasets: [
            {
              label: labelName,
              fill: false,
              borderColor: "rgba(75,192,192,1)",
              borderWidth: 2,
              data: labels.map(
                (item: any) => item.average_time
              ),
              tension: 0.3
            },
          ],
        }}
      />
    </div>
  );
};

export default LineChart;
