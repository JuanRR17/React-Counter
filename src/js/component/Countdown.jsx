import React from 'react'
import PropTypes from 'prop-types'

const Countdown = props => {
  return (
    <span style={style} className = "p-3 bg-dark d-flex justify-content-evenly flex-wrap">
      <label>Introduce Countdown</label>
      <input className='m-2' type="text" maxLength="6" size="10"/>
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

Countdown.propTypes = {}

export default Countdown