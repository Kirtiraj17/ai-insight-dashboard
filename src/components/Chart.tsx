import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js";
// import DoughnutChart from "./DoughnutChart";

// Register the chart js elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ data }: { data: any }) => {
  return (
    <div className="chart-container">
      {/* Bar chart for category distribution */}
      {data?.category_distribution && (
        <BarChart
          title="Category Distribution"
          labels={data?.category_distribution}
          labelName="Queries per Category"
        />
      )}

      {/* Line chart for daily response times */}
      {data?.response_times && data?.response_times?.day_wise && (
        <LineChart
          title="Daily Response Times"
          labels={data?.response_times?.day_wise}
          labelName="Average Response Time (days)"
        />
      )}

      {/* Line chart for weekly response times */}
      {data?.response_times && data?.response_times?.week_wise && (
        <LineChart
          title="Weekly Response Times"
          labels={data?.response_times?.week_wise}
          labelName="Average Response Time (weeks)"
        />
      )}

      {/* Bar chart for usage statistics by platform */}
      {data?.usage_statistics && data?.usage_statistics?.by_platform && (
        <BarChart
          title="Usage Statistics by Platform"
          labels={data?.usage_statistics?.by_platform}
          labelName="Number of Users"
        />
      )}

      {/* Bar chart for usage statistics by country */}
      {data?.usage_statistics && data?.usage_statistics?.by_country && (
        <BarChart
          title="Usage Statistics by Country"
          labels={data?.usage_statistics?.by_country}
          labelName="Number of Users"
        />
      )}

      {/* Pie chart for user satisfaction ratings */}
      {data?.user_satisfaction && data?.user_satisfaction?.ratings && (
        <PieChart
          title="User Satisfaction Ratings"
          labels={data?.user_satisfaction?.ratings}
        />
      )}

      {/* {data?.response_times && (
        <div>
          {data?.response_times?.day_wise && (
            <DoughnutChart
              title="Response Time (Day Wise)"
              labels={data?.response_times?.day_wise}
            />
          )}
          {data?.response_times?.week_wise && (
            <DoughnutChart
              title="Response Time (Week Wise)"
              labels={data?.response_times?.week_wise}
            />
          )}
        </div>
      )} */}
    </div>
  );
};

export default Chart;
