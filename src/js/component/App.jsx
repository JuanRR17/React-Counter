import React, { useState }  from "react";
import SecondsCounter from "./SecondsCounter.jsx";
import Mode from "./Mode.jsx";
import Countdown from "./Countdown.jsx";

//create your first component
const App = () => {
    const [mode, setMode] = useState();
    console.log("mode",mode)
	return (<div>
        <Mode 
            mode={mode}
            handleSetMode={(value)=>setMode(value)}
        />
        {mode === "Timer" ? <SecondsCounter /> : ""}
        {mode === "Countdown" ? <Countdown /> : ""}

    </div>

	);
};

export default App;
