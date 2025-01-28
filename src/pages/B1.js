import React from 'react';
import { useNavigate } from 'react-router-dom';
import './B1.css';
import greenMungBeanImg from './greenmung.jpeg';

const B1 = () => {
  const navigate = useNavigate();

  return (
    <div className="recipe-page">
      <header className="recipe-header">
        <h1>GREEN MUNG BEAN</h1>
        <button className="back-button" onClick={() => navigate('/Breakfast')}>
          Back
        </button>
      </header>
      <div className="recipe-content">
        <img src={greenMungBeanImg} alt="Green Mung Bean" className="recipe-image" />
        <div className="recipe-text">
          <h2>Ingredients:</h2>
          <ul>
            <li>1 cup green mung beans</li>
            <li>2 cups coconut milk</li>
            <li>1 medium onion (chopped)</li>
            <li>1-2 green chilies (sliced)</li>
            <li>1/2 tsp turmeric powder</li>
            <li>1/2 tsp mustard seeds</li>
            <li>Curry leaves and pandan leaves</li>
            <li>Salt (to taste)</li>
            <li>1 tbsp coconut oil (for tempering)</li>
          </ul>
          <h2>Instructions:</h2>
          <ol>
            <li>Wash and soak mung beans overnight.</li>
            <li>Boil mung beans until soft.</li>
            <li>Temper mustard seeds, curry leaves, and onion in coconut oil.</li>
            <li>Add turmeric powder and cooked mung beans, mix well.</li>
            <li>Add coconut milk, season with salt, and simmer.</li>
            <li>Serve as a breakfast bowl.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default B1;
