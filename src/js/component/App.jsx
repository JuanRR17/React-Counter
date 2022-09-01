import React, { useState }  from "react";
import Countdown from "./Countdown.jsx";
import Mode from "./Mode.jsx";
import SecondsCounter from "./SecondsCounter.jsx";


//create your first component
const App = () => {
    const [mode, setMode] = useState();
	return (<div className='text-center'>
        <Mode 
            mode={mode}
            handleSetMode={(value)=>setMode(value)}
        />
        {mode === "Timer" || mode === "Alert" ? <SecondsCounter alert={mode==="Alert" ? true : false} /> : ""}
        {mode === "Countdown" ? <Countdown /> : ""}
    </div>

	);
};

export default App;
