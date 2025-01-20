import React, { useEffect, useState } from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const user = location.state?.user; // Extract user from location.state

  const [calorieData, setCalorieData] = useState({
    calories: "",
    date: "",
  });

  useEffect(() => {
    // Fetch daily calorie intake and date
    const fetchCalorieData = async () => {
      if (user?.id) {
        try {
          const response = await axios.get("http://localhost:5000/api/daily-calories", {
            params: { user_id: user.id },
          });
          setCalorieData(response.data);
        } catch (error) {
          console.error("Failed to fetch calorie data", error);
        }
      }
    };

    fetchCalorieData();
  }, [user]);

  if (!user) {
    return <div>Error: User data is missing. Please log in again.</div>;
  }

  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          Welcome, {user.username}!
        </Typography>
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          sx={{ color: "green", fontWeight: "bold" }}
        >
          Keep maintaining your current calorie intake!
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Calories: {calorieData.calories || "Loading..."} kcal on{" "}
          {calorieData.date || "Loading..."}
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Track your nutritional intake and improve your health.
        </Typography>
        <Grid container spacing={4} sx={{ mt: 3 }}>
          <Grid item xs={12} md={6}>
            <img
              src="/AvocadoToastwithEgg.jpeg"
              alt="Healthy Food"
              style={{
                width: "100%",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            />
            <Typography
              variant="h6"
              align="center"
              sx={{ mt: 2, fontWeight: "bold" }}
            >
              Healthy Food
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src="/analysis.jpg"
              alt="Nutritional Analysis"
              style={{
                width: "100%",
                height: "375px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            />
            <Typography
              variant="h6"
              align="center"
              sx={{ mt: 2, fontWeight: "bold" }}
            >
              Nutritional Analysis
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
