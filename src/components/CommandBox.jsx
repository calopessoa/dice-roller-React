import React, { useContext, useState } from 'react';
import Context from '../context/Context';

function Box() {
  const [isCheated, setCheated] = useState(false);
  const [hideSelection, setHideSelection] = useState(true);

  const { setDefaultValue, resolve1, resolve2, result1, result2,
    setIsDisabled1, setIsDisabled2, cheatValue,
    setCheatvalue, setResult1, setResolve1,
    setResult2, setResolve2 } = useContext(Context);

  const reset = () => {
    setIsDisabled1(false);
    setIsDisabled2(false);
    setDefaultValue('6');
    setResult1('Roll me!');
    setResolve1('');
    setResult2('Roll me!');
    setResolve2('');
  }

  const handleChange = ({ target }) => {
    setCheatvalue(target.value);
  }

  const setDie = () => setCheatvalue(!cheatValue);

  // Building the function that resolves the dice; if their value include a "virar" word, it means that the user will be able to cheat, or turn dice faces.
  const resolveDie = (disable) => {
    if (result1.includes('turn')) {
      setCheated(true);
      setHideSelection(false);
      console.log('hello, there!');
    } else if (result1.includes('blank')) {
      console.log(`You can't resolve blanks`);
    } else {
      console.log(result1);
    }
    disable(true);
  }

  return (
    <div className='box-options'>
      <section className='options-1'>
        <div>
          <button
            onClick={() => resolveDie(setIsDisabled1)}
          >
            Resolver Dado 1
          </button>
          {/* Insert a Select component to show up options to change that die into. */}

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

          <p>{resolve1} {result1}</p>
        </div>

        <div>
        <button
            onClick={() => resolveDie(setIsDisabled2)}
          >
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
          onClick={reset}
        >
          Reset!
        </button>
      </section>
    </div>
  )
}

export default Box;