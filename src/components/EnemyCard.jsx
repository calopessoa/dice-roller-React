import React, { useContext } from 'react';
import CharContext from '../context/CharContext';
import './styles/enemyCard.css';

function EnemyCard() {
  const { enemyLife1, setEnemyLife1,
    globalValue, setGlobalValue,
    enemyLife2, setEnemyLife2 } = useContext(CharContext);

  const applyResolution = (newEnemyLife, enemyLife, number) => {
    newEnemyLife(enemyLife + globalValue);
    setGlobalValue(0);
    console.log(`enemy ${number} suffered ${globalValue} damage`);
  }

  return (
    <>
      <section
          className='enemy-card'
          onClick={() => applyResolution(setEnemyLife1, enemyLife1, 1)}
        >
          <p>Enemy ONE</p>
          <p>Life: {enemyLife1}</p>
      </section>

      <section
          className='enemy-card'
          onClick={() => applyResolution(setEnemyLife2, enemyLife2, 2)}
        >
          <p>Enemy TWO</p>
          <p>Life: {enemyLife2}</p>
      </section>

    </>
  )
}

export default EnemyCard;
