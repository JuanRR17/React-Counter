import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ClockIcon from './ClockIcon.jsx';
import Counter from './Counter.jsx';
import { getSecondsArray } from '../utils.js';
import Functionalities from './Functionalities.jsx'

const Countdown = props => {
  const [seconds, setSeconds] = useState(0);
  const [play, setPlay] = useState(false);

  function handleCountdownChange(event) {
    console.log(event.target.value)
    setSeconds(Number(event.target.value));
  }

  useEffect(() => {
    var intervalID = setInterval(() => {
        if(play && seconds>0)
  setSeconds(seconds => seconds - 1)
    },1000);
    return () => {
        clearInterval(intervalID)
    }
}, [play,seconds]);

  const secondsArray = getSecondsArray(seconds);
  const style ={
    width:"fit-content",
    margin: "auto"
  }

  return (
    <div className='text-center'>

      <span className = "p-1 bg-light">
        <label>Introduce Countdown</label>
        <input onChange={handleCountdownChange} className='m-2' type="text" maxLength="6" size="10"/>
      </span>
      <span style={style} className = "p-3 bg-dark d-flex justify-content-evenly flex-wrap">
        <ClockIcon />
        {secondsArray.map((_,idx) => {
          return <Counter key={idx} seconds={secondsArray[idx]}/>
        })}
        </span>
    <Functionalities 
            seconds={seconds}
            handleSetSeconds={(value)=>setSeconds(value)}
            play={play}
            handleSetPlay={(value)=>setPlay(value)}
        />
    </div>
  )
}

Countdown.propTypes = {}

export default Countdown