import React, { useEffect, useState }  from "react";
import SecondsCounter from "./SecondsCounter.jsx";
import Functionalities from "./Functionalities.jsx";
import Mode from "./Mode.jsx";

//create your first component
const App = () => {
	const [seconds, setSeconds] = useState(0);
    const [play, setPlay] = useState(false);
    const [mode, setMode] = useState(0);
    const modes = ["Timer", "Countdown", "Alert"];
    

    useEffect(() => {
        var intervalID = setInterval(() => {
            if(play)
			setSeconds(seconds => seconds + 1)
        },1000);
        return () => {
            clearInterval(intervalID)
        }
    }, [play,seconds]);

	return (<div>
        <Mode 
            mode={mode}
            modes={modes}
            handleSetMode={(value)=>setMode(value)}
        />
		<SecondsCounter 
			seconds={seconds}
		/>
        <Functionalities 
            seconds={seconds}
            handleSetSeconds={(value)=>setSeconds(value)}
            play={play}
            handleSetPlay={(value)=>setPlay(value)}
        />
    </div>

	);
};

export default App;
