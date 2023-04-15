import React from "react";
import cell from "./assets/cell.png";
import appstore from "./assets/appstore.svg";
import googlestore from "./assets/googlestore.svg";
export default function Download() {
	return (
		<div className="down-div">
			<div className="sec-down">
				<div>
					<h1 className="down-h">
						Download Our Mobile
						<br /> App And Start Enjoying
						<br /> Hassle Free Transactions
					</h1>
					<p className="download-p">
						Get our mobile app on playstore or apple store and start
						<br />
						enjoying seamless and hassle free transactions on the
						go!
					</p>
				</div>
				<div className="btns">
					<button className="app-btn">
						<img src={appstore} />
						<p>Download On Apple Store</p>
					</button>
					<button className="goo-btn">
						<img src={googlestore} />
						<>Download On Googleplay Store</>
					</button>
				</div>
			</div>
			<div className="cell-div">
				<img src={cell} />
			</div>
		</div>
	);
}
