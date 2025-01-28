import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Breakfast.css';

// Import breakfast images
import greenMungBeanImg from './greenmung.jpeg';
import bananaPancakesImg from './BananaOatmealPancakes.jpeg';
import milkRiceImg from './milkrice.webp';
import avocadoToastImg from './AvocadoToastwithEgg.jpeg';

const Breakfast = () => {
  const navigate = useNavigate();

  return (
    <div className="breakfast-page">
      <header className="breakfast-header">
        <h1>BREAKFAST</h1>
        <button className="back-button" onClick={() => navigate('/Recipes')}>
          Back
        </button>
      </header>
      <section className="breakfast-content">
        <div className="breakfast-item" onClick={() => navigate('/B1')}>
          <img src={greenMungBeanImg} alt="Green Mung Bean" className="breakfast-image" />
          <p>Green Mung Bean - Cal 446</p>
        </div>
        <div className="breakfast-item" onClick={() => navigate('/B4')}>
          <img src={bananaPancakesImg} alt="Banana Pancakes" className="breakfast-image" />
          <p>Banana Oatmeal Pancakes - Cal 160</p>
        </div>
        <div className="breakfast-item" onClick={() => navigate('/B2')}>
          <img src={milkRiceImg} alt="Milk Rice" className="breakfast-image" />
          <p>Milk Rice with Lunumiris - Cal 192</p>
        </div>
        <div className="breakfast-item" onClick={() => navigate('/B3')}>
          <img src={avocadoToastImg} alt="Avocado Toast" className="breakfast-image" />
          <p>Avocado Toast with Egg - Cal 160</p>
        </div>
      </section>
    </div>
  );
};

export default Breakfast;
