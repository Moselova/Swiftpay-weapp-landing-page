import React, { useState } from "react";

const HamburgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<button
				className={`hamburger ${isOpen ? "open" : ""}`}
				onClick={toggleMenu}
			>
				<span className="line"></span>
				<span className="line"></span>
				<span className="line"></span>
			</button>

			{isOpen && (
				<div className="menu">{/* Your menu items go here */}</div>
			)}

		</div>
	);
};

export default HamburgerMenu;
