import React from "react";
import bank from './assets/bank.svg'

export default function Partners () {
    return (
		<div className="partners">
			<div className="our">
				<p className="our-p">Our Growth Partners</p>
			</div>
			<div className="flex-slide">
				<div className="bank">
					<img src={bank} />
				</div>
				<div className="bank">
					<img src={bank} />
				</div>
				<div className="bank">
					<img src={bank} />
				</div>
				<div className="bank">
					<img src={bank} />
				</div>
			</div>
            
		</div>
        
	);
}