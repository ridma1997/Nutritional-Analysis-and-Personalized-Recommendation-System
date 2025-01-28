import React from 'react';
import { useNavigate } from 'react-router-dom';
import './D1.css';
import lentilSoupImg from './LentilSoup.jpeg';

const D1 = () => {
  const navigate = useNavigate();

  return (
    <div className="recipe-page">
      <header className="recipe-header">
        <h1>LENTIL SOUP</h1>
        <button className="back-button" onClick={() => navigate('/Dinner')}>
          Back
        </button>
      </header>
      <div className="recipe-content">
        <img src={lentilSoupImg} alt="Lentil Soup" className="recipe-image" />
        <div className="recipe-text">
          <h2>Ingredients:</h2>
          <ul>
            <li>Red lentils (1 cup)</li>
            <li>Onion (1, chopped)</li>
            <li>Garlic (3 cloves, minced)</li>
            <li>Celery (1 stalk, chopped)</li>
            <li>Carrot (1, diced)</li>
            <li>Vegetable stock (4 cups)</li>
            <li>Salt and pepper (to taste)</li>
            <li>Fresh parsley (for garnish)</li>
          </ul>
          <h2>Instructions:</h2>
          <ol>
            <li>Heat olive oil in a pot and sauté onion, garlic, celery, and carrot until softened.</li>
            <li>Add red lentils, vegetable stock, salt, and pepper.</li>
            <li>Simmer for 20-25 minutes or until lentils are tender.</li>
            <li>Use a hand blender to puree the soup (optional).</li>
            <li>Garnish with fresh parsley before serving.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default D1;
