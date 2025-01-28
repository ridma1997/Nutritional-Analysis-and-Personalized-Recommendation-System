import React from 'react';
import { useNavigate } from 'react-router-dom';
import './D2.css';
import bakedSalmonImg from './BakedSalmonwithAsparagus.jpeg';

const D2 = () => {
  const navigate = useNavigate();

  return (
    <div className="recipe-page">
      <header className="recipe-header">
        <h1>BAKED SALMON WITH ASPARAGUS</h1>
        <button className="back-button" onClick={() => navigate('/Dinner')}>
          Back
        </button>
      </header>
      <div className="recipe-content">
        <img src={bakedSalmonImg} alt="Baked Salmon" className="recipe-image" />
        <div className="recipe-text">
          <h2>Ingredients:</h2>
          <ul>
            <li>Salmon fillets (2)</li>
            <li>Asparagus spears (8-10)</li>
            <li>Olive oil (2 tbsp)</li>
            <li>Lemon juice (1 tbsp)</li>
            <li>Salt and pepper (to taste)</li>
          </ul>
          <h2>Instructions:</h2>
          <ol>
            <li>Preheat the oven to 375°F (190°C).</li>
            <li>Place salmon and asparagus on a baking sheet.</li>
            <li>Drizzle with olive oil, lemon juice, and season with salt and pepper.</li>
            <li>Bake for 15-20 minutes until the salmon is flaky and asparagus is tender.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default D2;