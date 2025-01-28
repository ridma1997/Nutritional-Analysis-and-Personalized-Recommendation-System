import React from 'react';
import { useNavigate } from 'react-router-dom';
import './L1.css';
import mediterraneanPastaImg from './MediterraneanPastaSalad.jpeg';

const L1 = () => {
  const navigate = useNavigate();

  return (
    <div className="recipe-page">
      <header className="recipe-header">
        <h1>MEDITERRANEAN PASTA SALAD</h1>
        <button className="back-button" onClick={() => navigate('/Lunch')}>
          Back
        </button>
      </header>
      <div className="recipe-content">
        <img
          src={mediterraneanPastaImg}
          alt="Mediterranean Pasta Salad"
          className="recipe-image"
        />
        <div className="recipe-text">
          <h2>Ingredients:</h2>
          <ul>
            <li>Pasta of choice (250g)</li>
            <li>Cherry tomatoes (1 cup, halved)</li>
            <li>Cucumber (1, diced)</li>
            <li>Olives (1/2 cup, sliced)</li>
            <li>Feta cheese (1/2 cup, crumbled)</li>
            <li>Olive oil (2 tbsp)</li>
            <li>Lemon juice (1 tbsp)</li>
            <li>Salt and pepper (to taste)</li>
          </ul>
          <h2>Instructions:</h2>
          <ol>
            <li>Cook the pasta according to the package instructions. Drain and let it cool.</li>
            <li>In a large bowl, combine pasta, cherry tomatoes, cucumber, olives, and feta cheese.</li>
            <li>In a small bowl, whisk together olive oil, lemon juice, salt, and pepper.</li>
            <li>Pour the dressing over the pasta mixture and toss to combine.</li>
            <li>Serve chilled.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default L1;
