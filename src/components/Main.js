import { useContext, useEffect } from "react";
import styled from "styled-components";

import CountContext from "../context/useCountDown";

const StyledMain = styled.main`
	/* margin: 1em; */
	/* position: relative; */
	min-height: 50vh;
`;

const Main = () => {
	const { start } = useContext(CountContext);

	useEffect(() => {
		start();
	}, []);

	return (
		<StyledMain>
			<h1>Hello. This is main Component </h1>
		</StyledMain>
	);
};

export default Main;
