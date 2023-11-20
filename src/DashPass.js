import React from "react";
import dashpass from "./dashpass_desktop.avif";
export default function DashPass() {
	return (
		<div className="dashpass">
			<div className="dashpass-left">
				<img
					src={dashpass}
					alt="DashPass is delivery for less"
					className="dashpass-image"
				/>
			</div>
			<div className="dashpass-right">
				<h2 className="dashpass-title">DashPass is delivery for less</h2>
				<h3 className="dashpass-text">
					Members get a $0 delivery fee on DashPass orders, 5% back on pickup
					orders, and so much more. Plus, it's free for 30 days.
				</h3>
				<button className="dashpass-button">Get DashPass</button>
			</div>
		</div>
	);
}
