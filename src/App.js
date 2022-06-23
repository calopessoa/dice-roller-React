import React, { useState } from 'react'
import Dice from 'react-dice-roll';
import './App.css';
import d1 from './dice-01.svg';
import d2 from './dice-02.svg';
import d3 from './dice-03.svg';
import d4 from './dice-04.svg';
import d5 from './dice-05.svg';
import d6 from './dice-06.svg';

function App() {
  const dieFaces = [
    d1,
    d2,
    d3,
    d4,
    d5,
    d6,
  ];
  const [result, setResult] = useState('6');
  const catchValue = (value) => { setResult(value) }

  return (
    <div className='container'>
      <div className="App">
        <Dice
          defaultValue={6}
          size={200}
          onRoll={(value) => catchValue(value)}
          faces={dieFaces}
        />
      </div>

      <article className="result">The die's result is {result}</article>

    </div>
  );
}

export default App;
