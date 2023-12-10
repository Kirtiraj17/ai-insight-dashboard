import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./MockAPIService";
import { setData } from "./redux/actions";
import Chart from "./components/Chart";
import "./App.css";
import Loader from "./components/Loader";
import ErrorComponent from "./components/ErrorComponent";

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any | null>(null);

  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.data);

  useEffect(() => {
    // fetchChartData function to fetch the data from the json simulated as api call
    const fetchChartData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await fetchData();
        // dispatch setData action to save the received data in the store
        dispatch(setData(result));
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
        console.error("Error fetching data:", error);
      }
    };

    fetchChartData();
  }, [dispatch]);

  // console.log(data, "data", loading, error);

  return (
    <div className="App">
      <header className="App-header">
        <h1>AI Insights Dashboard</h1>
      </header>
      {/* Charts container */}
      <main>
        {loading ? (
          <Loader />
        ) : error ? (
          <ErrorComponent errorMsg={error.message || "An error occurred"} />
        ) : (
          <Chart data={data} />
        )}
      </main>
    </div>
  );
}

export default App;
