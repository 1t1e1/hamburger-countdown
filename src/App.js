import React from "react";
import styled from "styled-components";

import "./app.css";

import { CountDownProvider } from "./context/useCountDown";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

const Body = styled.div`
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

const App = () => {
	return (
		<CountDownProvider>
			<Header />
			<Body>
				<Main>
					<h1>Hello. This is main Component </h1>
				</Main>
				<Sidebar></Sidebar>
			</Body>
			<Footer />
		</CountDownProvider>
	);
};

export default App;
