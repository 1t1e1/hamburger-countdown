import React, { useState, useEffect } from "react";

const CountContext = React.createContext();

export default CountContext;

export function CountDownProvider({ children }) {
	const [remainingTime, setRemainingTime] = useState(60);

	// useEffect(() => {
	// 	const timerID = setInterval(() => {}, 1000);
	// 	return () => clearInterval(timerID);
	// }, [decreaseSeconds]);

	// const decreaseSeconds = () => {
	// 	// setRemainingTime((time) => {
	// 	// 	if (time <= 0) {
	// 	// 		return 0;
	// 	// 	} else {
	// 	// 		return time - 1;
	// 	// 	}
	// 	// });
	// };

	return (
		<CountContext.Provider
			value={{
				tick: remainingTime,
				start: "start",
			}}
		>
			{children}
		</CountContext.Provider>
	);
}
