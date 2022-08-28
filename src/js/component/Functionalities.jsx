import React from 'react'
import PropTypes from 'prop-types'
import {GrPause, GrPlay, GrResume, GrStop, GrRefresh } from 'react-icons/gr' 

const Functionalities = props => {
    const{
        handleSetPlay,
        play,
        seconds,
        handleSetSeconds
    }=props;
    const onClickToggleTimer = () =>{
        handleSetPlay(!play)
    }

    const onClickStop = ()=>{
        handleSetSeconds(0)
        handleSetPlay(false)
    }

    const onClickReset = () =>{
        handleSetSeconds(0)
        handleSetPlay(true)
    }

  return (
    <div className='functionalities '>
        {seconds===0 ?
            <GrPlay onClick={onClickToggleTimer}/>
        :
        (!play ? 
        <GrResume onClick={onClickToggleTimer}/>
        :
        <GrPause onClick={onClickToggleTimer}/>)
        }
        {seconds!==0 ?
        <span>
        <GrStop onClick={onClickStop}/>
        <GrRefresh onClick={onClickReset}/>
        </span>
        :
        null      
        }
    </div>
  )
}

Functionalities.propTypes = {}

export default Functionalities