import styled from "styled-components";

const StyledBurger = styled.div`
	cursor: pointer;
	height: 27px;
	width: 27px;
	margin: 50px;
	overflow: visible;
	position: relative;
	z-index: 2;

	& span,
	& span:before,
	& span:after {
		background: #fff;
		display: block;
		height: 4px;
		opacity: 1;
		position: absolute;
		transition: 0.3s ease-in-out;
	}
	& span:before,
	& span:after {
		content: "";
	}
	& span {
		right: 0px;
		top: 13px;
		width: 27px;
	}
	& span:before {
		left: 0px;
		top: -10px;
		width: 16px;
	}
	& span:after {
		left: 0px;
		top: 10px;
		width: 20px;
	}

	&.close span {
		transform: rotate(-45deg);
		top: 13px;
		width: 27px;
	}
	&.close span:before {
		top: 0px;
		transform: rotate(90deg);
		width: 27px;
	}
	&.close span:after {
		top: 0px;
		left: 0;
		transform: rotate(90deg);
		opacity: 0;
		width: 0;
	}
`;

export default function Burger() {
	return (
		<StyledBurger>
			<span></span>
		</StyledBurger>
	);
}
