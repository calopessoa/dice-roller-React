import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CharContext from './CharContext';

const CharProvider = ({ children }) => {
  const [hideSelection, setHideSelection] = useState(true);
  const [globalValue, setGlobalValue] = useState(0);
  const [enemyLife1, setEnemyLife1] = useState(8);
  const [enemyLife2, setEnemyLife2] = useState(5);

  const charactersData = {
    globalValue,
    setGlobalValue,
    enemyLife1,
    setEnemyLife1,
    enemyLife2,
    setEnemyLife2,
    hideSelection,
    setHideSelection,
  }


  return (
    <CharContext.Provider value={charactersData}>
      {children}
    </CharContext.Provider>
  );

};

CharProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CharProvider;



