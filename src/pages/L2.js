import React from 'react';
import { useNavigate } from 'react-router-dom';
import './L2.css';
import blackBeanChiliImg from './VegetarianBlackBeanChili.jpeg';

const L2 = () => {
  const navigate = useNavigate();

  return (
    <div className="recipe-page">
      <header className="recipe-header">
        <h1>VEGETARIAN BLACK BEAN CHILI</h1>
        <button className="back-button" onClick={() => navigate('/Lunch')}>
          Back
        </button>
      </header>
      <div className="recipe-content">
        <img
          src={blackBeanChiliImg}
          alt="Vegetarian Black Bean Chili"
          className="recipe-image"
        />
        <div className="recipe-text">
          <h2>Ingredients:</h2>
          <ul>
            <li>Black beans (1 can, rinsed and drained)</li>
            <li>Onion (1, diced)</li>
            <li>Garlic (2 cloves, minced)</li>
            <li>Tomatoes (1 cup, diced)</li>
            <li>Bell pepper (1, diced)</li>
            <li>Chili powder (1 tsp)</li>
            <li>Cumin (1 tsp)</li>
            <li>Salt and pepper (to taste)</li>
          </ul>
          <h2>Instructions:</h2>
          <ol>
            <li>Heat olive oil in a pot and sauté onion and garlic until fragrant.</li>
            <li>Add tomatoes, bell pepper, chili powder, and cumin. Cook for 5 minutes.</li>
            <li>Stir in black beans, salt, and pepper. Simmer for 10 minutes.</li>
            <li>Serve warm with rice or tortilla chips.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default L2;
