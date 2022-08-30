import React from 'react'
import PropTypes from 'prop-types'

const Mode = props => {
  return (
  <div className='text-center'>
    Select Mode:
    <select name="mode" className="m-2">
        <option value="1">Timer</option>
        <option value="2">Countdown</option>
        <option value="3">Alert</option>
    </select>
  </div>

  )
}

Mode.propTypes = {}

export default Mode