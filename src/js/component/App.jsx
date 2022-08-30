import React, { useEffect, useState }  from "react";
import SecondsCounter from "./SecondsCounter.jsx";
import Functionalities from "./Functionalities.jsx";
import Mode from "./Mode.jsx";

//create your first component
const App = () => {
	const [seconds, setSeconds] = useState(0);
    const [play, setPlay] = useState(false);

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
        <Mode />
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
