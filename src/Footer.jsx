import React from "react";
import logo2 from "./assets/logo2.svg";
import sms from "./assets/sms.svg";
import ig from "./assets/ig.svg";
import fb from "./assets/fb.svg";
import youtube from "./assets/youtube.svg";
import copyright from "./assets/copyright.svg"

export default function Footer() {
	return (
		<div className="foot">
			<div className="flex-ft">
				<div>
					<div className="swift2">
						<img src={logo2} />
						<p className="logo-nm">SWIFTPAY</p>
					</div>
					<p className="get">
						Input Email to get newsletters and offers
					</p>
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
					<h4 className="res-h">Resources</h4>
					<p className="res-p">About us</p>
					<p className="res-p">Help and Support</p>
					<p className="res-p">FAQ</p>
					<p className="res-p">Claims</p>
					<p className="res-p">Blog</p>
				</div>
				<div>
					<h4 className="res-h">Policies</h4>
					<p className="res-p">Privacy Policy</p>
					<p className="res-p">Cookie Policy</p>
					<p className="res-p">Terms and Condition</p>
					<p className="res-p">Site Map</p>
				</div>
				<div>
					<div>
						<h4 className="res-h">Connect with us</h4>
						<div className="socials">
							<img src={ig} />
							<img src={fb} />
							<img src={youtube} />
						</div>
					</div>
				</div>
			</div>
			<div className="end-div">
                <img src={copyright} />
				<p className="end">2023 SwiftPay. All rights reserved.</p>
			</div>
		</div>
	);
}
