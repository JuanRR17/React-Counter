import React, {useState} from 'react'
import PropTypes from 'prop-types'

const Mode = ({mode, modes, handleSetMode}) => {
  
  function handleSelectChange(event) {
    handleSetMode(event.target.value);
  }
  console.log("mode", modes[mode]);
  return (
  <div className='text-center'>
    Select Mode:
    <select onChange={handleSelectChange} value={mode} name="mode" className="m-2">
        <option value="0">{modes[0]}</option>
        <option value="1">{modes[1]}</option>
        <option value="2">{modes[2]}</option>
    </select>
  </div>

  )
}

Mode.propTypes = {
  mode: PropTypes.number,
  modes: PropTypes.array,
  handleSetMode: PropTypes.func
}

export default Mode