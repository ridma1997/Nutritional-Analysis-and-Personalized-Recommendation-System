import React from 'react';
import { useNavigate } from 'react-router-dom';
import './D3.css';
import grilledLemonChickenImg from './GrilledLemonHerbChickenwithSteamedVegetables.jpeg';

const D3 = () => {
  const navigate = useNavigate();

  return (
    <div className="recipe-page">
      <header className="recipe-header">
        <h1>GRILLED LEMON HERB CHICKEN WITH VEGETABLES</h1>
        <button className="back-button" onClick={() => navigate('/Dinner')}>
          Back
        </button>
      </header>
      <div className="recipe-content">
        <img src={grilledLemonChickenImg} alt="Grilled Lemon Chicken" className="recipe-image" />
        <div className="recipe-text">
          <h2>Ingredients:</h2>
          <ul>
            <li>Chicken breast (500g)</li>
            <li>Lemon juice (2 tbsp)</li>
            <li>Garlic (3 cloves, minced)</li>
            <li>Olive oil (2 tbsp)</li>
            <li>Mixed herbs (1 tsp)</li>
            <li>Salt and pepper (to taste)</li>
          </ul>
          <h2>Instructions:</h2>
          <ol>
            <li>Marinate chicken with lemon juice, olive oil, garlic, herbs, salt, and pepper for 30 minutes.</li>
            <li>Grill chicken over medium heat until fully cooked.</li>
            <li>Serve with steamed vegetables on the side.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default D3;
