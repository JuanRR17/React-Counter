import React from "react";
import PropTypes from "prop-types";


const Counter= (props)=>{
    const{seconds} = props;

    const styleCounter={
        width: "80px",
        height: "120px",
        borderRadius:"15px"
    }

    const styleSeconds={
        fontSize: "60px"
    }
   
    return (
        <div className="
        m-2 card text-white bg-dark 
        d-flex justify-content-center align-items-center
        border border-secondary border-4" 
        style={styleCounter}>
            <span style={styleSeconds}>{seconds}</span>
        </div>
    )
}

Counter.propTypes = {
    seconds : PropTypes.string
  }

export default Counter 