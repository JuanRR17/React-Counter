import React from 'react'
import PropTypes from 'prop-types'
import ClockIcon from './ClockIcon.jsx';
import Counter from './Counter.jsx';

const SecondsRenderer = ({secondsArray}) => {
    const style ={
        width:"fit-content",
        margin: "auto"
      }
    return (
        <span style={style} className = "p-3 bg-dark d-flex justify-content-evenly flex-wrap">
        <ClockIcon />
        {secondsArray.map((_,idx) => {
        return <Counter key={idx} seconds={secondsArray[idx]}/>
        })}
        </span>
    )
}

SecondsRenderer.propTypes = {
    secondsArray: PropTypes.array
    }

export default SecondsRenderer