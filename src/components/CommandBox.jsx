import React, { useContext } from 'react';
import Context from '../context/Context';

function Box() {
  const [isCheated, setCheated] = useState(false);

  const { resolve1, resolve2, result1, result2,
    setIsDisabled1, setIsDisabled2, cheatValue,
    setCheatvalue } = useContext(Context);

  const reRoll = () => {
    setIsDisabled1(false);
    setIsDisabled2(false);
  }

  const handleChange = ({ target }) => {
    setCheatvalue(target.value);
  }

  const setDie = () => setCheatvalue(!cheatValue);

  // Building the function that resolves the dice; if their value include a "virar" word, it means that the user will be able to cheat, or turn dice faces.
  const resolveDie = (value) => {
    const filterFocus = result1
      .filter((e) => value === e.includes('virar'));
    if (filterFocus === true) {
      setCheated(true);
    }
  }

  return (
    <div className='box-options'>
      <section className='options-1'>
        <div>
          <button
            onClick={resolveDie}
          >
            Resolver Dado 1
          </button>
          {/* Insert a Select component to show up options to change that die into. */}
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
  )
}

export default Box;