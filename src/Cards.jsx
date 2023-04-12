import React from "react";
import firstcard from "./assets/firstcard.png"
import secondcard from "./assets/secondcard.png"
import thirdcard from "./assets/thirdcard.png"
export default function Cards() {
	return (
		<div className="our-div">
			<div className="cards-p">
				<h2 className="swift-h">Our SwiftPay Citizenship Cards</h2>
				<p className="swift-p">
					Get SwiftPay Virtual and Physical card for
					<br /> online and offline payments for FREE
				</p>
			</div>
			<div className="card-box">
				<div>
					<img src={firstcard} />
				</div>
				<div>
					<img src={secondcard} />
				</div>
				<div>
					<img src={thirdcard} />
				</div>
			</div>
		</div>
	);
}
