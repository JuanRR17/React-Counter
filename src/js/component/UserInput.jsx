import React from 'react'
import PropTypes from 'prop-types'

const UserInput = ({label, onChangeHandler}) => {
    const style = {
        width: "6em",
        textAlign: "right"
      }
    return (
    <span className = "p-1 bg-light">
        <label>{label}</label>
        <input 
        style={style}
        onChange={onChangeHandler} 
        className='m-2' type="number" 
        max="999999" size="6" min="0"/>
    </span>
  )
}

UserInput.propTypes = {
    label:PropTypes.string,
    onChangeHandler: PropTypes.func
}

export default UserInput