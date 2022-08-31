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
    handleSetPlay: PropTypes.func,
    play: PropTypes.bool,
    seconds: PropTypes.number,
    handleSetSeconds: PropTypes.func
}

export default Functionalities