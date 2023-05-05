import { useState } from "react";
import phone from "./assets/phone.png";
import "./App.css";
import arrow from "./assets/arrow.svg";

function App() {
	return (
		<div className="conatiner">
			<div className="main">
				<h1 className="first-h">
					Seamless And Easy
					<br />
					Transactions On
					<br />
					The Go
				</h1>
				<p className="first-p">
					Carry out all financial transaction on one platform,
					<br /> fast and easy, without hassles.
				</p>
				<div className="button-sp">
					<button className="bt1">Log in</button>
					<button className="bt2">
						Get started <img src={arrow} />
					</button>
				</div>
				<div className="phone-img">
					<img src={phone} />
				</div>
			</div>
		</div>
	);
}

export default App;
