import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Analysis from "./pages/Analysis";
import Suggestions from "./pages/Suggestions";
import Dashboard from "./pages/Dashboard";
import TrackNutrients from "./pages/TrackNutrients";
import CalorieRecommendations from "./pages/CalorieRecommendations";
import FoodQualityAnalysis from "./pages/FoodQualityAnalysis";
import ProgressTracking from "./pages/ProgressTracking";
import MealSuggestions from "./pages/MealSuggestions";
import InteractiveCharts from "./pages/InteractiveCharts";


function App() {
  const [user, setUser] = useState(null);
  return (
    <UserProvider>
    <Router>
      <Navbar user={user}/>
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/suggestions" element={<Suggestions />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/track-nutrients" element={<TrackNutrients />} />
        <Route path="/calorie-recommendations" element={<CalorieRecommendations />} />
        <Route path="/food-quality-analysis" element={<FoodQualityAnalysis />} />
        <Route path="/progress-tracking" element={<ProgressTracking />} />
        <Route path="/meal-suggestions" element={<MealSuggestions />} />
        <Route path="/interactive-charts" element={<InteractiveCharts />} />

      </Routes>
    </Router>
    </UserProvider>
  );
}

export default App;