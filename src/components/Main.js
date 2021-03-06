import { useContext, useEffect } from "react";
import styled from "styled-components";

import CountContext from "../context/useCountDown";

const StyledMain = styled.main`
	min-height: 50vh;
`;

const Main = () => {
	const { start, reset } = useContext(CountContext);

	useEffect(() => {
		start();
	}, []);

	return (
		<StyledMain>
			<h1>Hello. This is main Component </h1>
			<Button onClick={reset}>Start Again!</Button>
		</StyledMain>
	);
};

const Button = styled.button`
	background: "white";
	margin-top: 1rem;
	font-size: 1.25rem;
	padding: 0.25rem 0.75rem;
	border: none;
	:focus {
		outline: none;
	}
`;

export default Main;
