import React, { useEffect, useState } from 'react'
import { getSecondsArray } from '../utils.js';
import Functionalities from './Functionalities.jsx'
import SecondsRenderer from './SecondsRenderer.jsx';
import UserInput from './UserInput.jsx';

const Countdown = props => {
  const [seconds, setSeconds] = useState(0);
  const [play, setPlay] = useState(false);
  const [countdown, setCountdown] = useState(seconds);

  function handleCountdownChange(event) {
    console.log(event.target.value)
    setCountdown(Number(event.target.value));
  }

  useEffect(()=>{
    setSeconds(countdown);
  },[countdown])

  useEffect(() => {
    var intervalID = setInterval(() => {
        if(play && seconds>0)
          setSeconds(seconds => seconds - 1)
    },1000);
    return () => {
        clearInterval(intervalID)
    }
}, [play,seconds]);


const onClickToggleTimer = () =>{
  setPlay(!play)
}

const onClickStop = ()=>{
  setSeconds(countdown)
  setPlay(false)
}

const onClickReset = () =>{
  setSeconds(countdown)
  setPlay(true)
}

const secondsArray = getSecondsArray(seconds);

  return (
    <div>
      <UserInput 
        label="Enter Countdown"
        onChangeHandler={handleCountdownChange}
      />
      <SecondsRenderer secondsArray={secondsArray} />

      <Functionalities 
        handleToggleTimer={onClickToggleTimer}
        handleStopFunc={onClickStop}
        handleResetFunc={onClickReset}
        handleToggleFunctions={(seconds===countdown) ? true : false}
        play={play}
      />
    </div>
  )
}

Countdown.propTypes = {}

export default Countdown