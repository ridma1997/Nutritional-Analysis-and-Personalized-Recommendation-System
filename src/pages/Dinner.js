import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dinner.css';
import lentilSoupImg from './LentilSoup.jpeg';
import vegetableStirFryImg from './Vegetable Stir-fry with Tofu.jpeg';
import bakedSalmonImg from './BakedSalmonwithAsparagus.jpeg';
import grilledLemonChickenImg from './GrilledLemonHerbChickenwithSteamedVegetables.jpeg';

const Dinner = () => {
  const navigate = useNavigate();

  return (
    <div className="dinner-page">
      <header className="dinner-header">
        <h1>DINNER</h1>
        <button className="back-button" onClick={() => navigate('/Recipes')}>
          Back
        </button>
      </header>
      <div className="dinner-content">
        <div className="dinner-item" onClick={() => navigate('/D1')}>
          <img src={lentilSoupImg} alt="Lentil Soup" className="dinner-image" />
          <p>Lentil Soup - Cal 330</p>
        </div>
        <div className="dinner-item" onClick={() => navigate('/D4')}>
          <img src={vegetableStirFryImg} alt="Vegetable Stir-Fry with Tofu" className="dinner-image" />
          <p>Vegetable Stir-Fry with Tofu - Cal 290</p>
        </div>
        <div className="dinner-item" onClick={() => navigate('/D2')}>
          <img src={bakedSalmonImg} alt="Baked Salmon with Asparagus" className="dinner-image" />
          <p>Baked Salmon with Asparagus - Cal 350</p>
        </div>
        <div className="dinner-item" onClick={() => navigate('/D3')}>
          <img src={grilledLemonChickenImg} alt="Grilled Lemon Herb Chicken with Steamed Vegetables" className="dinner-image" />
          <p>Grilled Lemon Herb Chicken with Steamed Vegetables - Cal 320</p>
        </div>
      </div>
    </div>
  );
};

export default Dinner;
