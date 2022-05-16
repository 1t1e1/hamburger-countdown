import { useCallback, useState, useEffect } from "react";

export const useTimer = ({
	seconds: initialSeconds = 10,
	running: initiallyRunning = false,
} = {}) => {
	const [seconds, setSeconds] = useState(initialSeconds);
	const [running, setRunning] = useState(initiallyRunning);

	const tick = useCallback(
		() =>
			running
				? setSeconds((seconds) => {
						if (seconds && seconds > 0) {
							return seconds - 1;
						} else if (!seconds || seconds < 0) {
							setRunning(false);
							return 0;
						}
				  })
				: undefined,
		[running]
	);

	const start = () => setRunning(true);

	useEffect(() => {
		const timerID = setInterval(tick, 1000);

		return () => clearInterval(timerID);
	}, [tick]);

	return { running, seconds, start };
};
