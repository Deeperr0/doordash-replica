import React from "react";
import becomeADasher from "./become_a_dasher_desktop.avif";
export default function BecomeADasher() {
	return (
		<div className="become-a-dasher">
			<h2 className="become-a-dasher-title">
				Unlocking opportunity for Dashers and businesses
			</h2>
			<div className="become-a-dasher-container">
				<div className="become-a-dasher-left">
					<h2 className="become-a-dasher-subtitle">
						Sign up to dash and get paid
					</h2>
					<p className="become-a-dasher-text">
						Deliver with the #1 Food and Drink App in the U.S., set your own
						schedule, and start earning cash anytime, anywhere.
					</p>
					<button className="become-a-dasher-button">Become a Dasher</button>
				</div>
				<div className="become-a-dasher-right">
					<img
						src={becomeADasher}
						alt="Become a Dasher"
						className="become-a-dasher-image"
					/>
				</div>
			</div>
		</div>
	);
}
