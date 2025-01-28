import React from 'react';
import { useNavigate } from 'react-router-dom';
import './L3.css';
import chickenProvencalImg from './ChickenProvençal.jpeg';

const L3 = () => {
  const navigate = useNavigate();

  return (
    <div className="recipe-page">
      <header className="recipe-header">
        <h1>CHICKEN PROVENCAL</h1>
        <button className="back-button" onClick={() => navigate('/Lunch')}>
          Back
        </button>
      </header>
      <div className="recipe-content">
        <img
          src={chickenProvencalImg}
          alt="Chicken Provencal"
          className="recipe-image"
        />
        <div className="recipe-text">
          <h2>Ingredients:</h2>
          <ul>
            <li>Chicken breast (500g)</li>
            <li>Tomatoes (1 cup, diced)</li>
            <li>Garlic (2 cloves, minced)</li>
            <li>Olive oil (2 tbsp)</li>
            <li>Thyme (1 tsp)</li>
            <li>Salt and pepper (to taste)</li>
          </ul>
          <h2>Instructions:</h2>
          <ol>
            <li>Heat olive oil in a skillet over medium heat. Sear chicken until golden brown.</li>
            <li>Add garlic, tomatoes, thyme, salt, and pepper. Simmer for 10 minutes.</li>
            <li>Serve warm with a side of rice or bread.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default L3;
