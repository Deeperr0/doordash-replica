import React from "react";
import GiftingCategory from "./GiftingCategory";
import returnPackages from "./package_pickup_desktop.webp";
import backToSchool from "./bts-backpack.webp";
import minibar from "./alcohol_desktop.avif";
import petSupplies from "./pet_supplies_desktop.avif";
const giftingCategories = [
	{
		image: returnPackages,
		title: "Return packages from home",
		description:
			"Request a package pickup with just a few taps and get your returns dropped off at carriers like UPS, FedEx, and USPS.",
		link: "#",
		button: "Try Package Pickup",
	},
	{
		image: backToSchool,
		title: "Back to school shopping",
		description:
			"From school snacks to notebooks, find everything on your back to school list.",
		link: "#",
		button: "Shop Now",
	},
	{
		image: minibar,
		title: "Restock the minibar",
		description:
			"Hosting a get-together or need or need a special cocktail ingredient? Get liquor, beer, mixers, champagne, and wine delivered fast.*",
		link: "#",
		button: "Shop Alcohol",
		comment: "*Must be 21+. Enjoy responsibly.",
	},
	{
		image: petSupplies,
		title: "What your pets need, and want",
		description:
			"Finally, something cat people and dog people agree on — pet supplies delivery. Shop pet food, chew toys, and even costumes.",
		link: "#",
		button: "Get Pet Supplies",
		comment: "",
	},
];
export default function Gifting() {
	return (
		<div className="to-do">
			<h2 className="to-do-title">Helping you with to-dos and gifting</h2>
			<div className="gifting-categories">
				{giftingCategories.map((category) => (
					<GiftingCategory
						image={category.image}
						title={category.title}
						description={category.description}
						link={category.link}
						button={category.button}
						comment={category.comment}
						key={category.title}
					/>
				))}
			</div>
		</div>
	);
}
