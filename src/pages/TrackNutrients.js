import React, { useState } from "react";
import { Box, TextField, Button, Typography, Grid } from "@mui/material";
import axios from "axios";

const TrackNutrients = () => {
  const [foods, setFoods] = useState("");
  const [nutrientData, setNutrientData] = useState(null);

  const handleAnalyze = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/nutrients", {
        foods: foods.split(",").map((food) => food.trim()),
      });
      setNutrientData(response.data);
    } catch (error) {
      console.error("Error fetching nutrient data", error);
    }
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Track Your Nutrients
      </Typography>
      <Typography variant="body1" gutterBottom>
        Input your daily food intake (comma-separated) and get detailed reports
        on macronutrients and micronutrients.
      </Typography>
      <Box sx={{ mt: 3 }}>
        <TextField
          fullWidth
          label="Enter Foods (e.g., rice, chicken, spinach)"
          variant="outlined"
          value={foods}
          onChange={(e) => setFoods(e.target.value)}
        />
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={handleAnalyze}
        >
          Analyze
        </Button>
      </Box>
      {nutrientData && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Macronutrients
          </Typography>
          <Typography variant="body1">
            Carbohydrates: {nutrientData.macronutrients.carbohydrates} g
          </Typography>
          <Typography variant="body1">
            Proteins: {nutrientData.macronutrients.proteins} g
          </Typography>
          <Typography variant="body1">
            Fats: {nutrientData.macronutrients.fats} g
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
            Micronutrients
          </Typography>
          <Typography variant="body1">
            Calcium: {nutrientData.micronutrients.calcium} mg
          </Typography>
          <Typography variant="body1">
            Iron: {nutrientData.micronutrients.iron} mg
          </Typography>
          <Typography variant="body1">
            Potassium: {nutrientData.micronutrients.potassium} mg
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default TrackNutrients;
