import React from "react";
import Option from "./Option.js";
import scoot from "./ScootScoot.svg";
import storeFront from "./Storefront.svg";
import iphone from "./iphone.svg";
const options = [
	{
		image: scoot,
		title: "Become a Dasher",
		text: "As a delivery driver, you'll make reliable money—working anytime, anywhere.",
		link: "#",
		linkText: "Start earning",
	},
	{
		image: storeFront,
		title: "Become a Partner",
		text: "Grow your business and reach new customers by partnering with us.",
		link: "#",
		linkText: "Sign up your store",
	},
	{
		image: iphone,
		title: "Get the best DoorDash experience",
		text: "Experience the best your neighborhood has to offer, all in one app.",
		link: "#",
		linkText: "Get the app",
	},
];

export default function Options() {
	return (
		<div className="options-container">
			<div className="options">
				{options.map((option) => (
					<Option
						title={option.title}
						text={option.text}
						link={option.link}
						linkText={option.linkText}
						key={option.title}
						image={option.image}
					/>
				))}
			</div>
		</div>
	);
}
