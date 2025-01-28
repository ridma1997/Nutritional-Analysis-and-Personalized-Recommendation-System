import React from 'react';
import { useNavigate } from 'react-router-dom';
import './B4.css';
import bananaPancakesImg from './BananaOatmealPancakes.jpeg';

const B4 = () => {
  const navigate = useNavigate();

  return (
    <div className="recipe-page">
      <header className="recipe-header">
        <h1>BANANA OATMEAL PANCAKES</h1>
        <button className="back-button" onClick={() => navigate('/Breakfast')}>
          Back
        </button>
      </header>
      <div className="recipe-content">
        <img src={bananaPancakesImg} alt="Banana Oatmeal Pancakes" className="recipe-image" />
        <div className="recipe-text">
          <h2>Ingredients:</h2>
          <ul>
            <li>1 ripe banana</li>
            <li>1 cup rolled oats</li>
            <li>2 eggs</li>
            <li>1/4 cup milk (or any plant-based milk)</li>
            <li>1/2 teaspoon baking powder</li>
            <li>1/2 teaspoon vanilla extract</li>
            <li>A pinch of salt</li>
            <li>Butter or oil for cooking</li>
          </ul>
          <h2>Instructions:</h2>
          <ol>
            <li>In a blender, combine the banana, rolled oats, eggs, milk, baking powder, vanilla extract, and salt. Blend until smooth.</li>
            <li>Heat a non-stick skillet over medium heat and add a small amount of butter or oil.</li>
            <li>Pour small portions of the batter onto the skillet to form pancakes. Cook until bubbles form on the surface, then flip and cook the other side until golden.</li>
            <li>Serve warm with your favorite toppings such as maple syrup, fresh fruit, or a sprinkle of nuts.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default B4;
