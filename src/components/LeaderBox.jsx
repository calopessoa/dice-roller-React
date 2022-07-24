import React, { useContext } from 'react'
import '../App.css';
import Dice from 'react-dice-roll';
import FocusSelection from '../components/FocusSelection';
import Context from '../context/Context';
import catchValue from '../helpers';
import d1 from '../assets/dice1.png';
import d2 from '../assets/dice2.png';
import d3 from '../assets/dice3.png';
import d4 from '../assets/dice4.png';
import d5 from '../assets/dice5.png';
import d6 from '../assets/dice6.png';
import CommandBox from './CommandBox';
// import diceRolling from './assets/0004526.mp3';

function LeaderBox() {
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
          size={120}
          onRoll={(value) => catchValue(value, setResolve1, setResult1, setIsDisabled1)}
          faces={diceFaces}
          triggers={triggers}
          disabled={isDisabled1}
        // sound={diceRolling}
        // cheatValue={3}
        />
        <FocusSelection />
        {/* </span> */}

        <Dice
          defaultValue={6}
          size={120}
          onRoll={(value) => catchValue(value, setResolve2, setResult2, setIsDisabled2)}
          faces={diceFaces}
          triggers={triggers}
          disabled={isDisabled2}
        // sound={diceRolling}
        // cheatValue={2}
        />
        <FocusSelection />

      </div>

      <CommandBox />

    </div>
  );
}

export default LeaderBox;