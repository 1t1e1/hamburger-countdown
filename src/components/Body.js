import React from "react";
import styled from "styled-components";

import Sidebar from "./Sidebar";

const StyledBody = styled.div`
	background-color: red;
	padding: 2rem;
	/* display inside main */
	/* position: relative; */
`;

const Main = styled.main`
	/* margin: 1em; */
	/* position: relative; */
	min-height: 50vh;
`;

const Body = () => {
	return (
		<StyledBody>
			<Main>
				<h1>Hello. This is main Component </h1>
			</Main>
			<Sidebar></Sidebar>
		</StyledBody>
	);
};

export default Body;
