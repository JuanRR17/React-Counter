import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ClockIcon from './ClockIcon.jsx';
import Counter from './Counter.jsx';
import { getSecondsArray } from '../utils.js';
import Functionalities from './Functionalities.jsx';

const SecondsCounter = (props) => {
	const [seconds, setSeconds] = useState(0);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    var intervalID = setInterval(() => {
        if(play)
  setSeconds(seconds => seconds + 1)
    },1000);
    return () => {
        clearInterval(intervalID)
    }
}, [play,seconds]);

  const onClickToggleTimer = () =>{
    setPlay(!play)
  }

  const onClickStop = ()=>{
    setSeconds(0)
    setPlay(false)
  }

  const onClickReset = () =>{
    setSeconds(0)
    setPlay(true)
  }

  const secondsArray = getSecondsArray(seconds);
  const style ={
    width:"fit-content",
    margin: "auto"
  }

  return (
    <div className='text-center'>
      <span style={style} className = "p-3 bg-dark d-flex justify-content-evenly flex-wrap">
        <ClockIcon />
        {secondsArray.map((_,idx) => {
          return <Counter key={idx} seconds={secondsArray[idx]}/>
        })}
        </span>
        <Functionalities 
            handleToggleTimer={onClickToggleTimer}
            handleStopFunc={onClickStop}
            handleResetFunc={onClickReset}
            handleToggleFunctions={seconds===0 ? true : false}
            play={play}
        />
    </div>
  )
}

SecondsCounter.propTypes = {
  seconds : PropTypes.number
}

export default SecondsCounter