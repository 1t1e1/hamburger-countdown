import React from "react";

import "./app.css";

import { CountDownProvider } from "./context/useCountDown";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

const App = () => {
	return (
		<CountDownProvider>
			<Header />
			<Body />
			<Footer />
		</CountDownProvider>
	);
};

export default App;
