import React from "react";
import { Container, Typography, Grid, Box, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Analysis = () => {
  const navigate = useNavigate();

  // Handle click events for each feature
  const handleFeatureClick = (path) => {
    navigate(path);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#5ca946", 
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          Nutritional Analysis
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Analyze your food and calorie intake.
        </Typography>

        <Grid container spacing={4} sx={{ mt: 3 }}>
          {/* Feature 1: Track Your Nutrients */}
          <Grid item xs={12} md={6}>
            <Card
              onClick={() => handleFeatureClick("/track-nutrients")}
              sx={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
                cursor: "pointer",
                "&:hover": {
                  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardContent>
                <Typography variant="h5" align="center" gutterBottom>
                  Track Your Nutrients
                </Typography>
                <Typography variant="body2" align="center">
                  Input your daily food intake and get detailed reports on macronutrients and micronutrients.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Feature 2: Calorie Recommendations */}
          <Grid item xs={12} md={6}>
            <Card
              onClick={() => handleFeatureClick("/calorie-recommendations")}
              sx={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
                cursor: "pointer",
                "&:hover": {
                  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardContent>
                <Typography variant="h5" align="center" gutterBottom>
                  Calorie Recommendations
                </Typography>
                <Typography variant="body2" align="center">
                  Get personalized calorie recommendations based on your goals and daily activity levels.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Feature 3: Food Quality Analysis */}
          <Grid item xs={12} md={6}>
            <Card
              onClick={() => handleFeatureClick("/food-quality-analysis")}
              sx={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
                cursor: "pointer",
                "&:hover": {
                  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardContent>
                <Typography variant="h5" align="center" gutterBottom>
                  Food Quality Analysis
                </Typography>
                <Typography variant="body2" align="center">
                  Get insights into the quality of the food you consume and recommendations to improve it.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Feature 4: Progress Tracking */}
          <Grid item xs={12} md={6}>
            <Card
              onClick={() => handleFeatureClick("/progress-tracking")}
              sx={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
                cursor: "pointer",
                "&:hover": {
                  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardContent>
                <Typography variant="h5" align="center" gutterBottom>
                  Progress Tracking
                </Typography>
                <Typography variant="body2" align="center">
                  Monitor your progress over time with graphs and trends based on your nutritional data.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Feature 5: Meal Suggestions */}
          <Grid item xs={12} md={6}>
            <Card
              onClick={() => handleFeatureClick("/meal-suggestions")}
              sx={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
                cursor: "pointer",
                "&:hover": {
                  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardContent>
                <Typography variant="h5" align="center" gutterBottom>
                  Meal Suggestions
                </Typography>
                <Typography variant="body2" align="center">
                  Receive tailored meal suggestions based on your dietary preferences and nutritional goals.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Feature 6: Interactive Charts */}
          <Grid item xs={12} md={6}>
            <Card
              onClick={() => handleFeatureClick("/interactive-charts")}
              sx={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
                cursor: "pointer",
                "&:hover": {
                  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardContent>
                <Typography variant="h5" align="center" gutterBottom>
                  Interactive Charts
                </Typography>
                <Typography variant="body2" align="center">
                  Visualize your nutritional data with interactive charts to better understand your habits.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Analysis;
