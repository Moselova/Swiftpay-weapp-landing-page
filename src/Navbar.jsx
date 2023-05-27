import React from "react";
import logo from "./assets/logo.png";
import HamburgerMenu from "./Hamburger";

export default function Navbar() {
	return (
		<nav>
			<div className="logo">
				<div className="logo-div">
					<div>
						<img src={logo} />
					</div>
					<div>
						<p>SWIFTPAY</p>
					</div>
				</div>
				<div className="nav-keys">
					<p>Home</p>
					<p>About us</p>
					<p>Features</p>
					<p>Resources</p>
				</div>
				<div className="nav-bt">
					<button className="bt2">Download Now</button>
				</div>
				<div className="ham">
					<HamburgerMenu />
				</div>
			</div>
		</nav>
	);
}

