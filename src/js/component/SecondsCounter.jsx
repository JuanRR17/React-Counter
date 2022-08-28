import React from 'react'
import PropTypes from 'prop-types'
import ClockIcon from './ClockIcon.jsx';
import Counter from './Counter.jsx';

const SecondsCounter = props => {
  const{
    seconds
  }=props;

  const secondsArray = seconds.toString().split("").reverse();
  const style ={
    width:"fit-content",
    margin: "auto"
  }
  return (
    <span style={style} className = "p-3 bg-dark d-flex justify-content-evenly flex-wrap">
      <ClockIcon />
      <Counter seconds={secondsArray[5] ?? "0"}/>
      <Counter seconds={secondsArray[4] ?? "0"}/>
      <Counter seconds={secondsArray[3] ?? "0"}/>
      <Counter seconds={secondsArray[2] ?? "0"}/>
      <Counter seconds={secondsArray[1] ?? "0"}/>
      <Counter seconds={secondsArray[0] ?? "0"}/>
    </span>
  )
}

SecondsCounter.propTypes = {
  seconds : PropTypes.number
}

export default SecondsCounter