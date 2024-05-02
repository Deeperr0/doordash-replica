import React from "react";
import findRestaurant from "./download_the_app_desktop.avif";
export default function FindRestaurant() {
	return (
		<div className="find-restaurant-container">
			<div className="left">
				<h2 className="find-restaurant-title">
					Everything you crave, delivered.
				</h2>
				<h3 className="find-restaurant-subtitle">
					Your favorite local restaurants
				</h3>
				<p className="find-restaurant-text">
					Get a slice of pizza or the whole pie delivered, or pick up house lo
					mein from the Chinese takeout spot you've been meaning to try.
				</p>
				<a href="/">
					<button className="find-restaurant-button">Find restaurants</button>
				</a>
			</div>

			<div className="right">
				<img
					src={findRestaurant}
					className="find-restaurant-image"
					alt="Everything you crave, delivered."
				/>
			</div>
		</div>
	);
}
