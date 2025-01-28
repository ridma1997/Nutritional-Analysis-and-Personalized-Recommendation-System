import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Lunch.css';
import mediterraneanPastaImg from './MediterraneanPastaSalad.jpeg';
import vegetableRiceImg from './VegetarianBlackBeanChili.jpeg';
import shrimpTacosImg from './ShrimpSaganaki.jpeg';
import chickenProvençalImg from './ChickenProvençal.jpeg';

const Lunch = () => {
  const navigate = useNavigate();

  return (
    <div className="lunch-page">
      <header className="lunch-header">
        <h1>LUNCH</h1>
        <button className="back-button" onClick={() => navigate('/Recipes')}>
          Back
        </button>
      </header>
      <div className="lunch-content">
        <div className="lunch-item" onClick={() => navigate('/L1')}>
          <img src={mediterraneanPastaImg} alt="Mediterranean Pasta Salad" className="lunch-image" />
          <p>Mediterranean Pasta Salad - Cal 508</p>
        </div>
        <div className="lunch-item" onClick={() => navigate('/L2')}>
          <img src={vegetableRiceImg} alt="Vegetarian Black Bean Chili" className="lunch-image" />
          <p>Vegetarian Black Bean Chili - Cal 250</p>
        </div>
        <div className="lunch-item" onClick={() => navigate('/L4')}>
          <img src={shrimpTacosImg} alt="Shrimp Saganaki" className="lunch-image" />
          <p>Shrimp Saganaki - Cal 280</p>
        </div>
        <div className="lunch-item" onClick={() => navigate('/L3')}>
          <img src={chickenProvençalImg} alt="Chicken Provençal" className="lunch-image" />
          <p>Chicken Provençal - Cal 320</p>
        </div>
      </div>
    </div>
  );
};

export default Lunch;
