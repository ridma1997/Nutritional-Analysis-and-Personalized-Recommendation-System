import React from 'react';
import { useNavigate } from 'react-router-dom';
import './L4.css';
import shrimpSaganakiImg from './ShrimpSaganaki.jpeg';

const L4 = () => {
  const navigate = useNavigate();

  return (
    <div className="recipe-page">
      <header className="recipe-header">
        <h1>SHRIMP SAGANAKI</h1>
        <button className="back-button" onClick={() => navigate('/Lunch')}>
          Back
        </button>
      </header>
      <div className="recipe-content">
        <img
          src={shrimpSaganakiImg}
          alt="Shrimp Saganaki"
          className="recipe-image"
        />
        <div className="recipe-text">
          <h2>Ingredients:</h2>
          <ul>
            <li>Shrimp (250g, peeled and deveined)</li>
            <li>Tomatoes (1 cup, diced)</li>
            <li>Garlic (2 cloves, minced)</li>
            <li>Olive oil (2 tbsp)</li>
            <li>Feta cheese (1/2 cup, crumbled)</li>
            <li>Salt and pepper (to taste)</li>
          </ul>
          <h2>Instructions:</h2>
          <ol>
            <li>Heat olive oil in a pan and sauté garlic until fragrant.</li>
            <li>Add tomatoes, salt, and pepper. Simmer for 5 minutes.</li>
            <li>Stir in shrimp and cook until pink and opaque.</li>
            <li>Top with feta cheese and serve with bread or rice.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default L4;
