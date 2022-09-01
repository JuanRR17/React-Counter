import React from 'react'
import PropTypes from 'prop-types'
import {GrPause, GrPlay, GrResume, GrStop, GrRefresh } from 'react-icons/gr' 

const Functionalities = ({
    handleToggleTimer,
    handleStopFunc,
    handleResetFunc,
    handleToggleFunctions,
    play
}) => {


  return (
    <div className='functionalities '>
        {handleToggleFunctions ?
            <GrPlay onClick={handleToggleTimer}/>
        :
        (!play ? 
        <GrResume onClick={handleToggleTimer}/>
        :
        <GrPause onClick={handleToggleTimer}/>)
        }
        {!handleToggleFunctions ?
        <span>
        <GrStop onClick={handleStopFunc}/>
        <GrRefresh onClick={handleResetFunc}/>
        </span>
        :
        null      
        }
    </div>
  )
}

Functionalities.propTypes = {
    handleToggleTimer: PropTypes.func,
    handleStopFunc: PropTypes.func,
    handleResetFunc: PropTypes.func,
    handleToggleFunctions: PropTypes.bool,
    play: PropTypes.bool,
}

export default Functionalities