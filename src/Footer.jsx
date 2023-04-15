import React from "react";
import logo2 from "./assets/logo2.svg";
import sms from "./assets/sms.svg";
import ig from "./assets/ig.svg";
import fb from "./assets/fb.svg";
import youtube from "./assets/youtube.svg";

export default function Footer() {
	return (
		<div className="foot">
			<div className="flex-ft">
				<div>
					<img src={logo2} />
					<p>Input Email to get newsletters and offers</p>
					<div className="email-cov">
						<div className="email-ctn">
							<img src={sms} />
							<input
								className="input-ct"
								type="text"
								placeholder="Enter Email"
							></input>
						</div>
						<div>
							<button className="sub-btn">Subscribe</button>
						</div>
					</div>
				</div>
				<div>
					<h4>Resources</h4>
					<p>About us</p>
					<p>About us</p>
					<p>About us</p>
					<p>About us</p>
					<p>About us</p>
				</div>
				<div>
					<h4>Policies</h4>
					<p>About us</p>
					<p>About us</p>
					<p>About us</p>
					<p>About us</p>
				</div>
				<div>
					<div>
						<h4>Connect with us</h4>
						<img src={ig} />
						<img src={fb} />
						<img src={youtube} />
					</div>
				</div>
			</div>
			<div></div>
		</div>
	);
}
