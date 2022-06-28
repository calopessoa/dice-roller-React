import React, { useContext, useState } from 'react';
import CharContext from '../context/CharContext';
import Context from '../context/Context';

function Box() {
  const [hideSelection, setHideSelection] = useState(true);

  const { resolve1, resolve2, result1, result2,
    isDisabled1, setIsDisabled1, isDisabled2, setIsDisabled2,
    setResult1, setResolve1, setResult2, setResolve2,
    setCheated, disableResolve1, setDisableResolve1,
    disableResolve2, setDisableResolve2 } = useContext(Context);

  const { setGlobalValue } = useContext(CharContext);

  const reset = () => {
    setIsDisabled1(false);
    setIsDisabled2(false);
    setResult1('Roll me!');
    setResolve1('');
    setResult2('Roll me!');
    setResolve2('');
    setHideSelection(true);
    setDisableResolve1(false);
    setDisableResolve2(false);
  }

  // useEffect(() => );

  // const handleChange = ({ target }) => {
  //   setCheatvalue(target.value);
  // }

  // const setDie = () => setCheatvalue(!cheatValue);


  if (isDisabled1 === true) {
    setDisableResolve1(true);
  }
  if (isDisabled2 === true) {
    setDisableResolve2(true);
  }


  const arr = result1.split(' ');
  const getNumber = -(arr[1]);

  const resolveDie = (resolution, disable, lock) => {
    if (resolution.includes('resource')) {
      disable(true);
      console.log(resolution);
    } else if (resolution.includes('blank')) {
      console.log(`You can't resolve BLANKS`);
    } else if (resolution.includes('turn')) {
      setCheated(true);
      setHideSelection(false);
      disable(true);
    } else if (resolution.includes('special')) {
      disable(true);
    } else {
      setGlobalValue(getNumber);
      disable(true);
      console.log(resolution);
    }
    lock(true);
  }

  return (
    <div className='box-options'>
      <section className='options-1'>
        <div>
          <button
            onClick={() => resolveDie(result1, setIsDisabled1,setDisableResolve1)}
            disabled={disableResolve1}
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
            onClick={() => resolveDie(result2, setIsDisabled2, setDisableResolve2)}
            disabled={disableResolve2}
          >
            Resolver Dado 2
          </button>
          <p>{resolve2} {result2}</p>
        </div>
      </section>

      <section className='options-2'>
        {/* <div>
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
        </div> */}

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