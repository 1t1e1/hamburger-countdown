import React from "react";

import useCountDown from "../hooks/useCountdown";

export default function CountDown() {
	const [seconds] = useCountDown();

	return <div>CountDown : {seconds}</div>;
}
