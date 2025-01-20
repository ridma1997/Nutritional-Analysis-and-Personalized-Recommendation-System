import React, { useEffect, useState, useContext } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { UserContext } from "../context/UserContext";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the required Chart.js components
  ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


function Dashboard() {
  const { user } = useContext(UserContext);
  const [chartData, setChartData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCalorieData = async () => {
      if (!user || !user.id) {
        setError("User details are missing. Please log in again.");
        return;
      }

      try {
        const response = await axios.get("http://localhost:5000/api/calorie-predictions", {
          params: { user_id: user.id },
        });

        const { labels, calorieData } = response.data;

        setChartData({
          labels,
          datasets: [
            {
              label: "Calorie Intake",
              data: calorieData,
              borderColor: "rgba(75,192,192,1)",
              backgroundColor: "rgba(75,192,192,0.2)",
              fill: true,
            },
          ],
        });
        setError("");
      } catch (err) {
        console.error(err);
        setError("Failed to fetch calorie data. Please try again later.");
      }
    };

    fetchCalorieData();
  }, [user]);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Dashboard</h1>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        chartData && <Line data={chartData} options={{ responsive: true }} />
      )}
    </div>
  );
}

export default Dashboard;
