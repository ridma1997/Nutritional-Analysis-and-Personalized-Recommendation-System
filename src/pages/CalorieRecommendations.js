import React, { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";
import axios from "axios";

const CalorieRecommendations = () => {
  const [userId, setUserId] = useState("");
  const [recommendations, setRecommendations] = useState("");

  const fetchRecommendations = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/calorie-recommendations", {
        params: { user_id: userId },
      });
      setRecommendations(response.data.calorie_recommendations);
    } catch (error) {
      setRecommendations("Error fetching recommendations. Please check the User ID.");
    }
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Calorie Recommendations
      </Typography>
      <TextField
        fullWidth
        label="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        sx={{ my: 2 }}
      />
      <Button variant="contained" color="primary" onClick={fetchRecommendations}>
        Get Recommendations
      </Button>
      {recommendations && (
        <Typography variant="h6" sx={{ mt: 4 }}>
          {recommendations}
        </Typography>
      )}
    </Container>
  );
};

export default CalorieRecommendations;
