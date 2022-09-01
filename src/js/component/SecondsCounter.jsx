import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { getSecondsArray } from '../utils.js';
import Functionalities from './Functionalities.jsx';
import SecondsRenderer from './SecondsRenderer.jsx';
import UserInput from './UserInput.jsx';

const SecondsCounter = ({alert}) => {
	const [seconds, setSeconds] = useState(0);
  const [play, setPlay] = useState(false);
  const [alertTime, setAlertTime] = useState();

  useEffect(() => {
    var intervalID = setInterval(() => {
        if(play){
          setSeconds(seconds => seconds + 1)
          if(seconds === alertTime){
            window.alert('Time\'s up!')
            onClickStop()
          }
    }},1000);
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
  if(seconds === alertTime && play){
    window.alert(`Time\'s up! \n You\'ve reached ${seconds} seconds! `)
    onClickStop()
  }

  const style = {
      width: "6em",
      textAlign: "right"
  }

  return (
    <div>
      {alert ? 
        <UserInput 
        label="Set Alert"
        onChangeHandler={event => setAlertTime(Number(event.target.value))}
      />
      :
      ""
      }
      <SecondsRenderer secondsArray={secondsArray} />
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
  alert: PropTypes.bool
}

export default SecondsCounter