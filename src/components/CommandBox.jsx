import React, { useContext } from 'react';
import CharContext from '../context/CharContext';
import Context from '../context/Context';

function CommandBox() {
  const { resolve1, resolve2, result1, result2,
    isDisabled1, setIsDisabled1, isDisabled2, setIsDisabled2,
    setResult1, setResolve1, setResult2, setResolve2,
    setCheated, disableResolve1, setDisableResolve1,
    disableResolve2, setDisableResolve2 } = useContext(Context);

  const { setGlobalValue, setHideSelection } = useContext(CharContext);

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

  const resolveDie = (resolution, setDisable, lock, disable) => {
    const arr = resolution.split(' ');
    const getNumber = -(arr[1]);

    if (resolution.includes('resource')) {
      setDisable(true);
      console.log(resolution);
    } else if (resolution.includes('blank')) {
      console.log(`You can't resolve BLANKS`);
    } else if (resolution.includes('turn')) {
      // if (disable === true) {
      //   setHideSelection(true);
      // }
      setDisable(true);
      setCheated(true);
      setHideSelection(false);
    } else if (resolution.includes('special')) {
      setDisable(true);
    } else {
      setGlobalValue(getNumber);
      setDisable(true);
      console.log(resolution);
    }
    lock(true);
  }

  return (
    <div className='box-options'>
      <section className='options-1'>
        <div>
          <button
            onClick={() => resolveDie(result1, setIsDisabled1,setDisableResolve1, isDisabled1)}
            disabled={disableResolve1}
          >
            Resolver Dado 1
          </button>
          {/* Insert a Select component to show up options to change that die into. */}

          <p>{resolve1} {result1}</p>
        </div>

        <div>
        <button
            onClick={() => resolveDie(result2, setIsDisabled2, setDisableResolve2, isDisabled2)}
            disabled={disableResolve2}
          >
            Resolver Dado 2
          </button>
          <p>{resolve2} {result2}</p>
        </div>
      </section>

      <section className='options-2'>

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

export default CommandBox;