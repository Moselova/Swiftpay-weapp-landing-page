import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Navbar from "./Navbar";
import Partners from "./Partners";
import Why from "./Why";
import Cards from "./Cards";
import "./App.css";
import About from "./About";


ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Navbar />
		<App />
		<Partners />
		<Why />
		<Cards />
    <About />
	
	</React.StrictMode>
);
