import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import { Line } from "react-chartjs-2";
import axios from "axios";

const InteractiveCharts = () => {
  const [chartData, setChartData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/interactive-charts");
        const data = response.data.chart_data;

        // Check if data is valid
        if (data && data.length > 0) {
          setChartData({
            labels: data.map((entry) => entry.date),
            datasets: [
              {
                label: "Calories Consumed",
                data: data.map((entry) => entry.calories),
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                fill: true,
              },
            ],
          });
        } else {
          setError("No data available for the chart.");
        }
      } catch (error) {
        setError("Error fetching chart data. Please try again later.");
      }
    };

    fetchChartData();
  }, []);

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Interactive Charts
      </Typography>
      {error ? (
        <Typography color="error" align="center">
          {error}
        </Typography>
      ) : (
        chartData && <Line data={chartData} />
      )}
    </Container>
  );
};

export default InteractiveCharts;
