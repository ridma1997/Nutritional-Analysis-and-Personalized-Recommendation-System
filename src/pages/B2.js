import React from 'react';
import { useNavigate } from 'react-router-dom';
import './B2.css';
import milkRiceImg from './milkrice.webp';

const B2 = () => {
  const navigate = useNavigate();

  return (
    <div className="recipe-page">
      <header className="recipe-header">
        <h1>MILK RICE WITH LUNUMIRIS</h1>
        <button className="back-button" onClick={() => navigate('/Breakfast')}>
          Back
        </button>
      </header>
      <div className="recipe-content">
        <img src={milkRiceImg} alt="Milk Rice with Lunumiris" className="recipe-image" />
        <div className="recipe-text">
          <h2>Ingredients (for 4 servings):</h2>
          <h3>For Milk Rice:</h3>
          <ul>
            <li>1 cup white raw rice</li>
            <li>1 cup thick coconut milk</li>
            <li>1/2 tsp salt</li>
          </ul>
          <h3>For Lunumiris (Spicy Sambal):</h3>
          <ul>
            <li>2 medium red onions (finely chopped)</li>
            <li>1 tbsp chili powder</li>
            <li>1 tsp maldive fish flakes (optional)</li>
            <li>Juice of 1 lime</li>
            <li>1/2 tsp salt</li>
          </ul>
          <h2>Instructions:</h2>
          <h3>For Milk Rice:</h3>
          <ol>
            <li>Wash the rice and cook it with 2 cups of water until soft.</li>
            <li>Add thick coconut milk and salt to the cooked rice. Stir well and let it simmer for 5 minutes until creamy.</li>
            <li>Flatten the milk rice on a tray or plate, let it set, and cut into squares or diamonds before serving.</li>
          </ol>
          <h3>For Lunumiris:</h3>
          <ol>
            <li>Mix finely chopped red onions, chili powder, maldive fish (if using), lime juice, and salt in a bowl.</li>
            <li>Adjust spiciness and tanginess to taste.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default B2;
