import styled from "styled-components";

import Sidebar from "./Sidebar";
import Main from "./Main";

const StyledBody = styled.div`
	background-color: red;
	padding: 2rem;
	/* display inside main */
	/* position: relative; */
`;

const Body = () => {
	return (
		<StyledBody>
			<Main></Main>
			<Sidebar></Sidebar>
		</StyledBody>
	);
};

export default Body;
