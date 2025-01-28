import React from 'react';
import { useNavigate } from 'react-router-dom';
import './D4.css';
import vegetableStirFryImg from './Vegetable Stir-fry with Tofu.jpeg';

const D4 = () => {
  const navigate = useNavigate();

  return (
    <div className="recipe-page">
      <header className="recipe-header">
        <h1>VEGETABLE STIR-FRY WITH TOFU</h1>
        <button className="back-button" onClick={() => navigate('/Dinner')}>
          Back
        </button>
      </header>
      <div className="recipe-content">
        <img src={vegetableStirFryImg} alt="Vegetable Stir-Fry" className="recipe-image" />
        <div className="recipe-text">
          <h2>Ingredients:</h2>
          <ul>
            <li>Firm tofu (150g, cubed)</li>
            <li>Garlic (2 cloves, minced)</li>
            <li>Ginger (1 tsp, grated)</li>
            <li>Soy sauce (2 tbsp)</li>
            <li>Mixed vegetables (carrots, bell peppers, broccoli - 2 cups)</li>
            <li>Sesame seeds (optional)</li>
          </ul>
          <h2>Instructions:</h2>
          <ol>
            <li>Heat olive oil in a pan and sauté garlic and ginger until fragrant.</li>
            <li>Add tofu and stir-fry until golden brown. Remove and set aside.</li>
            <li>Add mixed vegetables to the pan and cook until tender-crisp.</li>
            <li>Return tofu to the pan and add soy sauce. Toss to combine.</li>
            <li>Garnish with sesame seeds before serving.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default D4;
