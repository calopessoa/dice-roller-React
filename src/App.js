import React, { useState } from 'react'
import Dice from 'react-dice-roll';
import './App.css';
import d1 from './assets/dice1.png';
import d2 from './assets/dice2.png';
import d3 from './assets/dice3.png';
import d4 from './assets/dice4.png';
import d5 from './assets/dice5.png';
import d6 from './assets/dice6.png';
import diceRolling from './assets/0004526.mp3';

function App() {
  const dieFaces = [
    d1,
    d2,
    d3,
    d4,
    d5,
    d6,
  ];
  const [result1, setResult1] = useState('Roll me!');
  const [resolve1, setResolve1] = useState('')
  const [result2, setResult2] = useState('Roll me!');
  const [resolve2, setResolve2] = useState('')
  const [isDisabled1, setIsDisabled1] = useState(false);
  const [isDisabled2, setIsDisabled2] = useState(false);
  const [isCheated, setCheated] = useState(false);
  const [cheatValue, setCheatvalue] = useState('');
  // const catchValue = (value) => {
  //   let face = 1
  //   switch (face) {
  //     case 1:
  //       setResult(value);
  //       break;
  //     case 2:
  //       setResult(value + 1)
  //       break;
  //     case 3:
  //       setResult(value * 2);
  //       break;
  //     case 4 || 5 || 6:
  //       setResult('success');
  //       break;
  //     default:
  //       // setResult(value);
  //       break;
  //   }
  // }

  const catchValue = (value, func1, func2, func3) => {
    if (value === 1) {
      func1(`Resolva para `)
      func2('causar 1 dano à distância')
    }
    if (value === 2) {
      func1(`Resolva para `)
      func2('causar 2 dano à distância')
    }
    if (value === 3) {
      func1(`Resolva para `)
      func2('virar 2 dados para qualquer lado')
    }
    if (value === 4 || value === 5) {
      func1(`Resolva para `)
      func2('colher 1 recurso')
    }
    if (value === 6) {
      func1(`Seu dado é `)
      func2('blank')
    }
    func3(true);
  }

  const reRoll = () => {
    setIsDisabled1(false);
    setIsDisabled2(false);
  }

  const handleChange = ({ target }) => {
    setCheatvalue(target.value);
  }

  const setDie = () => setCheatvalue(!cheatValue);

  const triggers = ['Enter', 'click'];

  return (
    <div className='home-container'>
      <div className="box-dice">
        <Dice
          defaultValue={6}
          size={200}
          onRoll={(value) => catchValue(value, setResolve1, setResult1, setIsDisabled1)}
          faces={dieFaces}
          triggers={triggers}
          disabled={isDisabled1}
          sound={diceRolling}
          // cheatValue={isCheated && cheatValue}
        />

        <Dice
          defaultValue={6}
          size={200}
          onRoll={(value) => catchValue(value, setResolve2, setResult2, setIsDisabled2)}
          faces={dieFaces}
          triggers={triggers}
          disabled={isDisabled2}
          sound={diceRolling}
          // cheatValue={isCheated && cheatValue}
        />
      </div>

      <div className='box-options'>
        <section className='options-1'>
          <div>
            <button>
              Resolver Dado 1
            </button>
            <p>{resolve1} {result1}</p>
          </div>

          <div>
            <button>
              Resolver Dado 2
            </button>
            <p>{resolve2} {result2}</p>
          </div>
        </section>

        <section className='options-2'>
          <div>
            <input
              type="text"
              onChange={handleChange}
            />

            <button
              onClick={setDie}
              disabled={true}
            >
              Set Die
            </button>
          </div>

          <button
            className='result'
            onClick={reRoll}
          >
            Reroll!
          </button>
        </section>
      </div>
    </div>
  );
}

export default App;
