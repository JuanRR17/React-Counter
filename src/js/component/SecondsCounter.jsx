import React from 'react'
import PropTypes from 'prop-types'
import ClockIcon from './ClockIcon.jsx';
import Counter from './Counter.jsx';
import { getSecondsArray } from '../utils.js';

const SecondsCounter = ({seconds}) => {

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
    </div>

  )
}

SecondsCounter.propTypes = {
  seconds : PropTypes.number
}

export default SecondsCounter