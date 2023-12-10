import React, { useEffect } from "react";
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
import { fetchData } from "../MockAPIService";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../redux/actions";
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

const Chart: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.data);

  useEffect(() => {
    // fetchChartData function to fetch the data from the json simulated as api call
    const fetchChartData = async () => {
      try {
        const result = await fetchData();
        // dispatch setData action to save the received data in the store
        dispatch(setData(result));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchChartData();
  }, [dispatch]);

  console.log(data, "data");

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
