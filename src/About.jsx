import React from "react";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import likemachino from "./assets/likemachino.png";

export default function About() {
	return (
		<div className="about-box">
			<div className="about-h">
				<h1 className="text-h">
					What Our SwiftPay Citizenship Say
					<br /> About Us
				</h1>
			</div>
			<div className="box2-flex">
				<div>
					<div className="box-2">
						<div>
							<img src={img1} />
						</div>
						<div>
							<p className="pic-p">Morrison Jean</p>
							<p className="pic-pp">
								SwiftPay comes with advanced security
								<br /> features such as two-factor
								authentication,
								<br /> encryption, and fraud monitoring, which
								can
								<br /> help keep your financial information
								safe.
							</p>
						</div>
					</div>
					<div className="box-2">
						<div>
							<img src={img2} />
						</div>
						<div>
							<p className="pic-p">Janice Fowler</p>
							<p className="pic-pp">
								SwiftPay comes with advanced security
								<br /> features such as two-factor
								authentication,
								<br /> encryption, and fraud monitoring, which
								can
								<br /> help keep your financial information
								safe.
							</p>
						</div>
					</div>
				</div>
				<div className="machino">
					<img src={likemachino} />
				</div>
				<div>
					<div className="box-2">
						<div>
							<img src={img3} />
						</div>
						<div>
							<p className="pic-p">Dennis Ado</p>
							<p className="pic-pp">
								SwiftPay comes with advanced security
								<br /> features such as two-factor
								authentication,
								<br /> encryption, and fraud monitoring, which
								can
								<br /> help keep your financial information
								safe.
							</p>
						</div>
					</div>
					<div className="box-2">
						<div>
							<img src={img4} />
						</div>
						<div>
							<p className="pic-p">Divine Adeshina</p>
							<p className="pic-pp">
								SwiftPay comes with advanced security
								<br /> features such as two-factor
								authentication,
								<br /> encryption, and fraud monitoring, which
								can
								<br /> help keep your financial information
								safe.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
