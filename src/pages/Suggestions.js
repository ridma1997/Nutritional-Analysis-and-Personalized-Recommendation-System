import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";

const Suggestions = () => {
  const { user } = useContext(UserContext);
  const [suggestions, setSuggestions] = useState({ food: [], exercises: [] });
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (!user || !user.id) {
        setError("User details are missing. Please log in again.");
        return;
      }

      try {
        const response = await axios.get("http://localhost:5000/api/suggestions", {
          params: { user_id: user.id },
        });

        if (response.status === 200) {
          setSuggestions({
            food: response.data.food_suggestions || [],
            exercises: response.data.exercise_suggestions || [],
          });
          setError("");
        }
      } catch (err) {
        setError("Failed to fetch suggestions. Please try again later.");
      }
    };

    fetchSuggestions();
  }, [user]);

  return (
    <Box
      sx={{
        padding: "2rem",
        backgroundColor: "#f7f9fc",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold", color: "#1976d2" }}>
        Suggestions
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom>
        Personalized nutritional recommendations based on your details.
      </Typography>

      {error ? (
        <Typography variant="body1" align="center" color="error">
          {error}
        </Typography>
      ) : (
        <Grid container spacing={4} justifyContent="center">
          {/* Food Suggestions */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                backgroundColor: "#e3f2fd",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
              }}
            >
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ color: "#1976d2", fontWeight: "bold" }}>
                  Food Suggestions
                </Typography>
                <ul style={{ paddingLeft: "20px" }}>
                  {suggestions.food.length > 0 ? (
                    suggestions.food.map((item, index) => (
                      <li key={index} style={{ marginBottom: "8px" }}>
                        {item}
                      </li>
                    ))
                  ) : (
                    <Typography variant="body2" color="textSecondary">
                      No food suggestions available.
                    </Typography>
                  )}
                </ul>
              </CardContent>
            </Card>
          </Grid>

          {/* Exercise Suggestions */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                backgroundColor: "#e8f5e9",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
              }}
            >
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ color: "#43a047", fontWeight: "bold" }}>
                  Exercise Suggestions
                </Typography>
                <ul style={{ paddingLeft: "20px" }}>
                  {suggestions.exercises.length > 0 ? (
                    suggestions.exercises.map((item, index) => (
                      <li key={index} style={{ marginBottom: "8px" }}>
                        {item}
                      </li>
                    ))
                  ) : (
                    <Typography variant="body2" color="textSecondary">
                      No exercise suggestions available.
                    </Typography>
                  )}
                </ul>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default Suggestions;
