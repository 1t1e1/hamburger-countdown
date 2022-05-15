import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
	background-color: #89b7ba;
	min-height: 4rem;
	width: 100%;
	padding-left: 4rem;
	display: flex;
	align-items: center;
	/* justify-content: center; */
`;

export default function Footer() {
	return <StyledFooter>Footer Component</StyledFooter>;
}