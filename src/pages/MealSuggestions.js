import React, { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";
import axios from "axios";

const MealSuggestions = () => {
  const [userId, setUserId] = useState("");
  const [suggestions, setSuggestions] = useState("");

  const fetchMealSuggestions = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/meal-suggestions", {
        params: { user_id: userId },
      });
      setSuggestions(response.data.meal_suggestions);
    } catch (error) {
      setSuggestions("Error fetching meal suggestions. Please check the User ID.");
    }
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Meal Suggestions
      </Typography>
      <TextField
        fullWidth
        label="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        sx={{ my: 2 }}
      />
      <Button variant="contained" color="success" onClick={fetchMealSuggestions}>
        Get Suggestions
      </Button>
      {suggestions && (
        <Typography variant="h6" sx={{ mt: 4 }}>
          {suggestions}
        </Typography>
      )}
    </Container>
  );
};

export default MealSuggestions;
