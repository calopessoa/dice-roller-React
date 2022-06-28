import React, { useContext } from 'react'
import Dice from 'react-dice-roll';
import './App.css';
import catchValue from './helpers';
import d1 from './assets/dice1.png';
import d2 from './assets/dice2.png';
import d3 from './assets/dice3.png';
import d4 from './assets/dice4.png';
import d5 from './assets/dice5.png';
import d6 from './assets/dice6.png';
import diceRolling from './assets/0004526.mp3';
import Box from './components/CommandBox';
import Context from './context/Context';
import EnemyCard from './components/EnemyCard';
// import { applyResolution } from './components/EnemyCard';

function App() {
  const diceFaces = [d1, d2, d3, d4, d5, d6];

  const {
    defaultValue,
    setResult1, setResolve1,
    setResult2, setResolve2,
    setIsDisabled1, setIsDisabled2,
    isDisabled1, isDisabled2,

  } = useContext(Context);

  const triggers = ['Enter', 'click'];

  return (
    <div className='home-container'>
      <div className="box-dice">
        {/* <span style={{ visibility: visibility }}> */}
        <Dice
          defaultValue={defaultValue}
          size={200}
          onRoll={(value) => catchValue(value, setResolve1, setResult1, setIsDisabled1)}
          faces={diceFaces}
          triggers={triggers}
          disabled={isDisabled1}
          sound={diceRolling}
          cheatValue={2}
          />
        {/* </span> */}

        <Dice
          defaultValue={6}
          size={200}
          onRoll={(value) => catchValue(value, setResolve2, setResult2, setIsDisabled2)}
          faces={diceFaces}
          triggers={triggers}
          disabled={isDisabled2}
          sound={diceRolling}
          cheatValue={2}
        />
      </div>

      <Box />

      <EnemyCard
        // onClick={ () => applyResolution() }
      />

    </div>
  );
}

export default App;

// Implantar funcionalidade do Botão : Resolver Dado.
  // Transformar o ResolveDie em switch-case;
  // string -> array para pegar o [1] (numeros) e computar no estado;
    // pegar o [2] para computar no estado o tipo de ativação;
  // array -> string;

// Criar API para ter um banco de dados dos personagens e a tradução de suas faces em strings no JSON.
