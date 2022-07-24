import React, { useContext } from 'react';
import CharContext from '../context/CharContext';

function FocusSelection() {
  const { hideSelection } = useContext(CharContext);

  return(
    <select
    hidden={hideSelection}
    >
      <option value="">1</option>
      <option value="">2</option>
      <option value="">3</option>
      <option value="">4</option>
      <option value="">5</option>
      <option value="">6</option>

    </select>
  )

}

export default FocusSelection;