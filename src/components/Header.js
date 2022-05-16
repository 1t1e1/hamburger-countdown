import styled from "styled-components";

import CountDown from "./CountDown";

export default function Header() {
	return (
		<StyledHeader>
			<div>Header</div>
			<CountDown></CountDown>
		</StyledHeader>
	);
}

const StyledHeader = styled.header`
	background-color: #89b7ba;
	min-height: 4rem;
	width: 100%;
	padding-left: 4rem;
	display: flex;
	align-items: center;
`;
