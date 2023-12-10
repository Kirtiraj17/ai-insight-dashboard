import React, { useEffect, useState } from "react";
// import { Bar, Line, Pie } from "react-chartjs-2";
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
  const [data, setData] = useState<any>({});

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const result = await fetchData();
        setData(result || {});
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchChartData();
  }, []);

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
        // <div className="chart">
        //   <h3>Category Distribution</h3>
        //   <Bar
        //     data={{
        //       labels: Object.keys(data?.category_distribution),
        //       datasets: [
        //         {
        //           label: "Queries per Category",
        //           backgroundColor: "rgba(75,192,192,1)",
        //           borderColor: "rgba(0,0,0,1)",
        //           borderWidth: 2,
        //           data: Object.values(data?.category_distribution),
        //         },
        //       ],
        //     }}
        //     options={{
        //       scales: {
        //         y: {
        //           beginAtZero: true,
        //         },
        //       },
        //     }}
        //   />
        // </div>
      )}

      {/* Line chart for daily response times */}
      {data?.response_times && data?.response_times?.day_wise && (
        <LineChart
          title="Daily Response Times"
          labels={data?.response_times?.day_wise}
          labelName="Average Response Time (days)"
        />
        // <div className="chart">
        //   <h3>Daily Response Times</h3>
        //   <Line
        //     data={{
        //       labels: data?.response_times?.day_wise.map(
        //         (item: any) => item.date
        //       ),
        //       datasets: [
        //         {
        //           label: "Average Response Time (days)",
        //           fill: false,
        //           borderColor: "rgba(75,192,192,1)",
        //           borderWidth: 2,
        //           data: data?.response_times?.day_wise.map(
        //             (item: any) => item.average_time
        //           ),
        //         },
        //       ],
        //     }}
        //   />
        // </div>
      )}

      {/* Line chart for weekly response times */}
      {data?.response_times && data?.response_times?.week_wise && (
        <LineChart
          title="Weekly Response Times"
          labels={data?.response_times?.week_wise}
          labelName="Average Response Time (weeks)"
        />
        // <div className="chart">
        //   <h3>Weekly Response Times</h3>
        //   <Line
        //     data={{
        //       labels: data?.response_times?.week_wise?.map(
        //         (item: any) => item?.week
        //       ),
        //       datasets: [
        //         {
        //           label: "Average Response Time (weeks)",
        //           fill: false,
        //           borderColor: "rgba(75,192,192,1)",
        //           borderWidth: 2,
        //           data: data?.response_times?.week_wise?.map(
        //             (item: any) => item?.average_time
        //           ),
        //         },
        //       ],
        //     }}
        //   />
        // </div>
      )}

      {/* Pie chart for user satisfaction ratings */}
      {data?.user_satisfaction && data?.user_satisfaction?.ratings && (
        <PieChart
          title="User Satisfaction Ratings"
          labels={data?.user_satisfaction?.ratings}
        />
        // <div className="chart">
        //   <h3>User Satisfaction Ratings</h3>
        //   <Pie
        //     data={{
        //       labels: data?.user_satisfaction?.ratings.map((item: any) =>
        //         item?.rating.toString()
        //       ),
        //       datasets: [
        //         {
        //           data: data?.user_satisfaction?.ratings.map(
        //             (item: any) => item?.count
        //           ),
        //           backgroundColor: [
        //             "#FF6384",
        //             "#36A2EB",
        //             "#FFCE56",
        //             "#4CAF50",
        //             "#9C27B0",
        //           ],
        //         },
        //       ],
        //     }}
        //   />
        // </div>
      )}

      {/* Bar chart for usage statistics by platform */}
      {data?.usage_statistics && data?.usage_statistics?.by_platform && (
        <BarChart
          title="Usage Statistics by Platform"
          labels={data?.usage_statistics?.by_platform}
          labelName="Number of Users"
        />
        // <div className="chart">
        //   <h3>Usage Statistics by Platform</h3>
        //   <Bar
        //     data={{
        //       labels: Object.keys(data?.usage_statistics?.by_platform),
        //       datasets: [
        //         {
        //           label: "Number of Users",
        //           backgroundColor: "rgba(75,192,192,1)",
        //           borderColor: "rgba(0,0,0,1)",
        //           borderWidth: 2,
        //           data: Object.values(data?.usage_statistics?.by_platform),
        //         },
        //       ],
        //     }}
        //     options={{
        //       scales: {
        //         y: {
        //           beginAtZero: true,
        //         },
        //       },
        //     }}
        //   />
        // </div>
      )}

      {/* Bar chart for usage statistics by country */}
      {data?.usage_statistics && data?.usage_statistics?.by_country && (
        <BarChart
          title="Usage Statistics by Country"
          labels={data?.usage_statistics?.by_country}
          labelName="Number of Users"
        />
        // <div className="chart">
        //   <h3>Usage Statistics by Country</h3>
        //   <Bar
        //     data={{
        //       labels: Object.keys(data?.usage_statistics?.by_country),
        //       datasets: [
        //         {
        //           label: "Number of Users",
        //           backgroundColor: "rgba(75,192,192,1)",
        //           borderColor: "rgba(0,0,0,1)",
        //           borderWidth: 2,
        //           data: Object.values(data?.usage_statistics?.by_country),
        //         },
        //       ],
        //     }}
        //     options={{
        //       scales: {
        //         y: {
        //           beginAtZero: true,
        //         },
        //       },
        //     }}
        //   />
        // </div>
      )}
    </div>
  );
};

export default Chart;
