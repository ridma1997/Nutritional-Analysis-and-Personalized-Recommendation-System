import React from 'react';
import { useNavigate } from 'react-router-dom';
import './B3.css';
import avocadoToastImg from './AvocadoToastwithEgg.jpeg';

const B3 = () => {
  const navigate = useNavigate();

  return (
    <div className="recipe-page">
      <header className="recipe-header">
        <h1>AVOCADO TOAST WITH EGG</h1>
        <button className="back-button" onClick={() => navigate('/Breakfast')}>
          Back
        </button>
      </header>
      <div className="recipe-content">
        <img src={avocadoToastImg} alt="Avocado Toast with Egg" className="recipe-image" />
        <div className="recipe-text">
          <h2>Ingredients:</h2>
          <ul>
            <li>2 slices of whole-grain bread</li>
            <li>1 ripe avocado</li>
            <li>2 eggs (poached, scrambled, or fried)</li>
            <li>Salt and pepper (to taste)</li>
            <li>Red pepper flakes or chili powder (optional)</li>
            <li>Lemon juice (a few drops)</li>
          </ul>
          <h2>Instructions:</h2>
          <ol>
            <li>Toast the bread until golden and crispy.</li>
            <li>Mash the avocado in a small bowl with salt, pepper, and lemon juice.</li>
            <li>Prepare the eggs as desired (poached, scrambled, or fried).</li>
            <li>Spread the avocado mixture onto the toasted bread.</li>
            <li>Top with eggs and red pepper flakes for a spicy kick.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default B3;
