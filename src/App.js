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
import Recipes from "./pages/Recipes";
import Breakfast from "./pages/Breakfast";
import B1 from "./pages/B1";
import B2 from "./pages/B2";
import B3 from "./pages/B3";
import B4 from "./pages/B4";
import Lunch from "./pages/Lunch";
import L1 from "./pages/L1";
import L2 from "./pages/L2";
import L3 from "./pages/L3";
import L4 from "./pages/L4";
import Dinner from "./pages/Dinner";
import D1 from "./pages/D1";
import D2 from "./pages/D2";
import D3 from "./pages/D3";
import D4 from "./pages/D4";


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
        <Route path="/Recipes" element={<Recipes/>} />
        <Route path="/Breakfast" element={<Breakfast/>} />
        <Route path="/B1" element={<B1/>} />
        <Route path="/B2" element={<B2/>} />
        <Route path="/B3" element={<B3/>} />
        <Route path="/B4" element={<B4/>} />
        <Route path="/Lunch" element={<Lunch/>} />
        <Route path="/L1" element={<L1/>} />
        <Route path="/L2" element={<L2/>} />
        <Route path="/L3" element={<L3/>} />
        <Route path="/L4" element={<L4/>} />
        <Route path="/Dinner" element={<Dinner/>} />
        <Route path="/D1" element={<D1/>} />
        <Route path="/D2" element={<D2/>} />
        <Route path="/D3" element={<D3/>} />
        <Route path="/D4" element={<D4/>} />

      </Routes>
    </Router>
    </UserProvider>
  );
}

export default App;