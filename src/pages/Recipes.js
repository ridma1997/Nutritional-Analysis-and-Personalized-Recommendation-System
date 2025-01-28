import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Recipes.css';

// Import images
import breakfastImg from './BananaOatmealPancakes.jpeg';
import lunchImg from './brooke-lark.jpg';
import dinnerImg from './carissa-gan-YlwOMESLPQo-unsplash.jpg';

const Recipes = () => {
  const navigate = useNavigate();

  return (
    <div className="recipes-page">

      <section className="recipes-content">
        <div className="recipe-card" onClick={() => navigate('/Breakfast')}>
          <img src={breakfastImg} alt="Breakfast" className="recipe-image" />
          <p>BREAKFAST</p>
        </div>
        <div className="recipe-card" onClick={() => navigate('/Lunch')}>
          <img src={lunchImg} alt="Lunch" className="recipe-image" />
          <p>LUNCH</p>
        </div>
        <div className="recipe-card" onClick={() => navigate('/Dinner')}>
          <img src={dinnerImg} alt="Dinner" className="recipe-image" />
          <p>DINNER</p>
        </div>
      </section>
    </div>
  );
};

export default Recipes;
