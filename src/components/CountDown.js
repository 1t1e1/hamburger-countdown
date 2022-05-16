import React, { useState, useContext } from "react";
import styled from "styled-components";

import tntGif from "../assets/bomb-tnt.gif";

import CountContext from "../context/useCountDown";

export default function CountDown() {
	const { seconds, running } = useContext(CountContext);

	return (
		<>
			<P>Time : {running ? seconds : "  "}</P>
			{seconds ? (
				<Img src={tntGif} alt="ticking bomb" />
			) : (
				<Container>
					<FireWork></FireWork>
				</Container>
			)}
		</>
	);
}

const Img = styled.img`
	height: 4rem;
	margin-left: 3rem;
`;

const P = styled.p`
	margin-left: 1rem;
`;

const Container = styled.div`
	display: inline;
	position: relative;
	margin-left: 5.5rem;
`;

const FireWork = styled.div`
	@keyframes firework {
		0% {
			width: 1.5vmin;
			opacity: 1;
		}
		100% {
			width: 45vmin;
			opacity: 0;
		}
	}

	&,
	&::before,
	&::after {
		--top: 60%;
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 0.5vmin;
		aspect-ratio: 1;
		background:
    /* random backgrounds */ radial-gradient(
					circle,
					#ff0 0.2vmin,
					#0000 0
				)
				50% 00%,
			radial-gradient(circle, #ff0 0.3vmin, #0000 0) 00% 50%,
			radial-gradient(circle, #ff0 0.5vmin, #0000 0) 50% 99%,
			radial-gradient(circle, #ff0 0.2vmin, #0000 0) 99% 50%,
			radial-gradient(circle, #ff0 0.3vmin, #0000 0) 80% 90%,
			radial-gradient(circle, #ff0 0.5vmin, #0000 0) 95% 90%,
			radial-gradient(circle, #ff0 0.5vmin, #0000 0) 10% 60%,
			radial-gradient(circle, #ff0 0.2vmin, #0000 0) 31% 80%,
			radial-gradient(circle, #ff0 0.3vmin, #0000 0) 80% 10%,
			radial-gradient(circle, #ff0 0.2vmin, #0000 0) 90% 23%,
			radial-gradient(circle, #ff0 0.3vmin, #0000 0) 45% 20%,
			radial-gradient(circle, #ff0 0.5vmin, #0000 0) 13% 24%;
		background-size: 0.5vmin 0.5vmin;
		background-repeat: no-repeat;
		animation: firework 2s forwards;
	}

	&::before {
		transform: translate(-50%, -50%) rotate(25deg) !important;
	}

	&::after {
		transform: translate(-50%, -50%) rotate(-37deg) !important;
	}
`;
