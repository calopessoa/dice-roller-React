import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

const Provider = ({ children }) => {
  const [defaultValue, setDefaultValue] = useState('6')
  const [result1, setResult1] = useState('Roll me!');
  const [resolve1, setResolve1] = useState('')
  const [result2, setResult2] = useState('Roll me!');
  const [resolve2, setResolve2] = useState('');
  const [cheatValue, setCheatvalue] = useState('');
  const [isDisabled1, setIsDisabled1] = useState(false);
  const [isDisabled2, setIsDisabled2] = useState(false);
  // const [visibility, setVisibility] = useState('visible');

  const globalStates = {
    defaultValue,
    setDefaultValue,
    result1,
    setResult1,
    result2,
    setResult2,
    resolve1,
    setResolve1,
    resolve2,
    setResolve2,
    cheatValue,
    setCheatvalue,
    isDisabled1,
    setIsDisabled1,
    isDisabled2,
    setIsDisabled2,
    // visibility,
    // setVisibility,
  }

  return (
    <Context.Provider value={globalStates}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
