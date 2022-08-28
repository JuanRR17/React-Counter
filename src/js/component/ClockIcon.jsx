import React from "react";
import { IoIosTimer } from 'react-icons/io';

const ClockIcon= ()=>{
    const styleClock={
        width: "80px",
        height: "120px",
        borderRadius:"15px"
    }
    const styleSeconds={
        fontSize: "50px"
    }
    return (
        <div className="
        m-2 card text-white bg-dark 
        d-flex justify-content-center align-items-center
        border border-secondary border-4" 
        style={styleClock}>
            <span style={styleSeconds}><IoIosTimer /></span>
        </div>
    )
}
export default ClockIcon;