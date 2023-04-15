import React from "react";
import arrowright from "./assets/arrowright.svg";
import smallarrow from "./assets/smallarrow.svg";

export default function Faqs() {
	return (
		<div className="fags">
			<div className="fags-h">
				<h1 className="frequent">Frequently Asked Questions (FAQs)</h1>
			</div>
			<div className="box-fag">
				<div className="see-all">
					<p>See All</p>
					<img src={arrowright} />
				</div>
				<div>
					<div className="rec">
						<div>
							<p>What services does SwiftPay Offer?</p>
						</div>
						<div>
							<img src={smallarrow} />
						</div>
					</div>
					<div className="rec">
						<div>
							<p>What services does SwiftPay Offer?</p>
						</div>
						<div>
							<img src={smallarrow} />
						</div>
					</div>
					<div className="rec">
						<div>
							<p>What services does SwiftPay Offer?</p>
						</div>
						<div>
							<img src={smallarrow} />
						</div>
					</div>
					<div className="rec">
						<div>
							<p>What services does SwiftPay Offer?</p>
						</div>
						<div>
							<img src={smallarrow} />
						</div>
					</div>
					<div className="rec">
						<div>
							<p>What services does SwiftPay Offer?</p>
						</div>
						<div>
							<img src={smallarrow} />
						</div>
					</div>
					<div className="rec">
						<div>
							<p>What services does SwiftPay Offer?</p>
						</div>
						<div>
							<img src={smallarrow} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
