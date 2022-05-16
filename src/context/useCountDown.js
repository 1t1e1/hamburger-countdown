import { createContext } from "react";

import { useTimer } from "../hooks/useTimer";

const CountContext = createContext();

export default CountContext;

export function CountDownProvider({ children }) {
	const { running, seconds, start, reset } = useTimer({
		seconds: 10,
	});

	return (
		<CountContext.Provider
			value={{
				running,
				seconds,
				start,
				reset,
			}}
		>
			{children}
		</CountContext.Provider>
	);
}
