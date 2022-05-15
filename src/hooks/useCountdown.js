import React, { useState, useEffect } from "react";

export default function CountDown() {
	const [seconds, setSeconds] = useState(10);

	useEffect(() => {
		const interval = setInterval(() => {
			if (seconds > 0) {
				setSeconds((seconds) => seconds - 1);
			} else {
				clearInterval(interval);
			}
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	}, [setSeconds]);

	return [seconds];
}
