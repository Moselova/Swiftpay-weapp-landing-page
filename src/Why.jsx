import React from "react";
import first from "./assets/first.svg";
import second from "./assets/second.svg"
import third from "./assets/third.svg"
import fourth from "./assets/fourth.svg"
export default function Why() {
	return (
		<div className="why-div">
			<div className="swift">
				<h2 className="big"> Why Use SwiftPay</h2>
				<p className="small">
					All the amazing features we offer our
					<br /> customers at SwiftPay
				</p>
			</div>
			<div className="box-flex">
				<div className="box">
					<div className="first">
						<img src={first} />
					</div>
					<div>
						<p className="secu">Security</p>
						<p className="safe">
							SwiftPay comes with advanced security
							<br /> features such as two-factor authentication,
							<br /> encryption, and fraud monitoring, which can
							<br /> help keep your financial information safe.
						</p>
					</div>
				</div>
				<div className="box">
					<div className="first">
						<img src={second} />
					</div>
					<div>
						<p className="secu">Convenience</p>
						<p className="safe">
							SwiftPay offers easy and convenient access to your
							finances, allowing you to manage your money from
							your smartphone or tablet anytime and anywhere.
						</p>
					</div>
				</div>
				<div className="box">
					<div className="first">
						<img src={third} />
					</div>
					<div>
						<p className="secu">Budgeting and Tracking</p>
						<p className="safe">
							SwiftPay comes with budgeting and tracking tools
							that can help you keep track of your spending and
							savings goals.
						</p>
					</div>
				</div>
				<div className="box">
					<div className="first">
						<img src={fourth} />
					</div>
					<div>
						<p className="secu">Cost-effectiveness</p>
						<p className="safe">
							SwiftPay have lower fees than traditional banking
							institutions, which can save you money in the long
							run.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
