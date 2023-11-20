import React from "react";
import becomeAPartner from "./work_with_doordash_desktop.avif";
export default function BecomeAPartner() {
	return (
		<div className="become-a-partner">
			<div className="become-a-partner-left">
				<img
					src={becomeAPartner}
					alt="Become a Partner"
					className="become-a-partner-image"
				/>
			</div>
			<div className="become-a-partner-right">
				<h2 className="become-a-partner-title">
					Grow your business with DoorDash
				</h2>
				<p className="become-a-partner-text">
					Businesses large and small partner with DoorDash to reach new
					customers, increase order volume, and drive more sales.
				</p>
				<button className="become-a-partner-button">Become a Partner</button>
			</div>
		</div>
	);
}
