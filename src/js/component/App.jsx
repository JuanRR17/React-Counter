import React, { useEffect, useState }  from "react";
import SecondsCounter from "./SecondsCounter.jsx";

//create your first component
const App = () => {
	const [count, setCount] = useState(0);

    useEffect(() => {
        var intervalID = setInterval(() => {
			setCount(count => count + 1)
        },1000);
        return () => {
            clearInterval(intervalID)
        }
    }, [count]);

	return (
		<SecondsCounter 
			seconds={count}
		/>
	);
};

export default App;
