import React, { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";
import axios from "axios";

const FoodQualityAnalysis = () => {
  const [foodName, setFoodName] = useState("");
  const [quality, setQuality] = useState("");

  const fetchFoodQuality = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/food-quality-analysis", {
        params: { food_name: foodName },
      });
      setQuality(response.data.quality);
    } catch (error) {
      setQuality("Error fetching food quality. Please check the food name.");
    }
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Food Quality Analysis
      </Typography>
      <TextField
        fullWidth
        label="Food Name"
        value={foodName}
        onChange={(e) => setFoodName(e.target.value)}
        sx={{ my: 2 }}
      />
      <Button variant="contained" color="primary" onClick={fetchFoodQuality}>
        Analyze Quality
      </Button>
      {quality && (
        <Typography variant="h6" sx={{ mt: 4 }}>
          {quality}
        </Typography>
      )}
    </Container>
  );
};

export default FoodQualityAnalysis;
