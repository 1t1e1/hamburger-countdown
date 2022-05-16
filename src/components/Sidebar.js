import { useState } from "react";
import styled from "styled-components";
import { CgClose, CgMenuLeftAlt } from "react-icons/cg";

const Sidebar = () => {
	const [open, setOpen] = useState(false);

	return (
		<div>
			<Burger open={open} setOpen={setOpen} />
			<Menu open={open} setOpen={setOpen} />
		</div>
	);
};

const Menu = ({ open }) => {
	return (
		<StyledMenu open={open}>
			<a> Sidebar</a>
			<a> menu</a>
			<a> Link</a>
		</StyledMenu>
	);
};

const StyledMenu = styled.nav`
	background: #effffa;
	transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
	display: flex;
	flex-direction: column;
	justify-content: center;

	height: 100vh;
	text-align: left;
	padding: 2rem;
	position: absolute;
	top: 0;
	left: 0;
	transition: transform 0.3s ease-in-out;

	@media (max-width: 576px) {
		width: 100%;
	}
	& > a {
		margin-top: 2rem;
		cursor: pointer;
		font-size: 2rem;
		text-transform: uppercase;
		font-weight: bold;
		color: #0d0c1d;
		text-decoration: none;
		transition: color 0.3s linear;

		@media (max-width: 576px) {
			font-size: 1.5rem;
			text-align: center;
		}

		&:hover {
			border-bottom: 2px solid;
			margin-bottom: -2px;
		}
	}
`;

const StyledBurger = styled.button`
	position: absolute;
	z-index: 10;
	top: 1rem;
	left: 1rem;
	padding: 0;

	display: flex;
	flex-direction: column;
	justify-content: space-around;

	background: transparent;
	border: none;

	cursor: pointer;

	& > svg {
		width: 2rem;
		height: 2rem;

		transition: all 0.3s linear;
		position: relative;
		transform-origin: 1px;
	}

	&:focus {
		outline: none;
	}
`;

const Burger = ({ open, setOpen }) => {
	return (
		<StyledBurger open={open} onClick={() => setOpen(!open)}>
			{open ? <CgClose /> : <CgMenuLeftAlt color="#effffb" />}
		</StyledBurger>
	);
};

export default Sidebar;
