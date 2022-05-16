import { createContext } from "react";

import { useTimer } from "../hooks/useTimer";

const CountContext = createContext();

export default CountContext;

export function CountDownProvider({ children }) {
	const { running, seconds, start } = useTimer({
		seconds: 10,
		// running: true,
	});

	return (
		<CountContext.Provider
			value={{
				running,
				seconds,
				start,
			}}
		>
			{children}
		</CountContext.Provider>
	);
}
