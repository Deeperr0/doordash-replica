import React from "react";
import convenienceStores from "./convenience_desktop.avif";
export default function ConvenienceStores() {
	return (
		<div className="convenience-stores">
			<div className="convenience-stores-left">
				<h2 className="convenience-stores-title">
					Convenience stores at your doorstep
				</h2>
				<p className="convenience-stores-text">
					Stock up on snacks, household essentials, candy, or vitamins — all
					delivered in under an hour.
				</p>
				<button className="convenience-stores-button">Shop Now</button>
			</div>
			<div className="convenience-stores-right">
				<img
					src={convenienceStores}
					alt="Convenience stores at your doorstep"
					className="convenience-stores-image"
				/>
			</div>
		</div>
	);
}
