import React from "react";
import logo from "./logoFooter.png";
import earth from "./earth.svg";
import menuArrow from "./menu-arrow.svg";
import apple from "./apple.svg";
import android from "./android.svg";
const topCities = [
	{ cityName: "New York City", link: "#" },
	{ cityName: "Los Angeles", link: "#" },
	{ cityName: "Toronto", link: "#" },
	{ cityName: "Chicago", link: "#" },
	{ cityName: "Houston", link: "#" },
	{ cityName: "Brooklyn", link: "#" },
	{ cityName: "San Diego", link: "#" },
	{ cityName: "Las Vegas", link: "#" },
	{ cityName: "San Francisco", link: "#" },
	{ cityName: "Seattle", link: "#" },
	{ cityName: "Atlanta", link: "#" },
	{ cityName: "Queens", link: "#" },
	{ cityName: "Vancouver, BC", link: "#" },
	{ cityName: "Miami", link: "#" },
	{ cityName: "San Antonio", link: "#" },
	{ cityName: "Phoenix", link: "#" },
	{ cityName: "Denver", link: "#" },
	{ cityName: "Austin", link: "#" },
	{ cityName: "Washington, DC", link: "#" },
	{ cityName: "Dallas", link: "#" },
	{ cityName: "Melbourne", link: "#" },
	{ cityName: "Sydney", link: "#" },
	{ cityName: "Montreal", link: "#" },
	{ cityName: "All Cities", link: "#" },
];
const topCuisines = [
	{ cuisineName: "Pizza Near Me", link: "#" },
	{ cuisineName: "Chinese Food Near Me", link: "#" },
	{ cuisineName: "Sushi Near Me", link: "#" },
	{ cuisineName: "Cafe Near Me", link: "#" },
	{ cuisineName: "Mexican Food Near Me", link: "#" },
	{ cuisineName: "Thai Food Near Me", link: "#" },
	{ cuisineName: "Lunch Near Me", link: "#" },
	{ cuisineName: "Seafood Near Me", link: "#" },
	{ cuisineName: "Indian Food Near Me", link: "#" },
	{ cuisineName: "Dessert Near Me", link: "#" },
	{ cuisineName: "Burgers Near Me", link: "#" },
	{ cuisineName: "Asian Food Near Me", link: "#" },
	{ cuisineName: "Italian Food Near Me", link: "#" },
	{ cuisineName: "Vegan Food Near Me", link: "#" },
	{ cuisineName: "Sandwiches Near Me", link: "#" },
	{ cuisineName: "Restaurants Near Me", link: "#" },
];
const popularCategories = [
	{ categoryName: "Alcohol Delivery", link: "#" },
	{ categoryName: "Back To School Delivery", link: "#" },
	{ categoryName: "Beauty Stores", link: "#" },
	{ categoryName: "Beauty Supply", link: "#" },
	{ categoryName: "Catering Near Me", link: "#" },
	{ categoryName: "Convenience Stores", link: "#" },
	{ categoryName: "Dashmart Near Me", link: "#" },
	{ categoryName: "Flower Delivery", link: "#" },
	{ categoryName: "Grocery Delivery", link: "#" },
	{ categoryName: "Halloween", link: "#" },
	{ categoryName: "Medicine Delivery", link: "#" },
	{ categoryName: "Pet Store Near Me", link: "#" },
	{ categoryName: "Retail Stores Near Me", link: "#" },
	{ categoryName: "Seasonal Holidays", link: "#" },
];
const links = [
	{ title: "About Us", link: "#" },
	{ title: "Careers", link: "#" },
	{ title: "Investors", link: "#" },
	{ title: "Company Blog", link: "#" },
	{ title: "Engineering Blog", link: "#" },
	{ title: "Merchant Blog", link: "#" },
	{ title: "Gift Cards", link: "#" },
	{ title: "Package Pickup", link: "#" },
	{ title: "Promotions", link: "#" },
	{ title: "Dasher Central", link: "#" },
	{ title: "LinkedIn", link: "#" },
	{ title: "Glassdoor", link: "#" },
	{ title: "Accessibility", link: "#" },
	{ title: "Newsroom", link: "#" },
];
const helpLinks = [
	{ title: "Account Details", link: "#" },
	{ title: "Order History", link: "#" },
	{ title: "Help", link: "#" },
];
const doingBusinessLinks = [
	{ title: "Become a Dasher", link: "#" },
	{ title: "List Your Business", link: "#" },
	{ title: "Get Dashers for Deliveries", link: "#" },
	{ title: "Get DoorDash for Work", link: "#" },
];

export default function Footer() {
	return (
		<footer>
			<div className="footer">
				<div className="footer-1">
					<div className="top-cities">
						<h3>Top Cities</h3>
						<div className="top-cities-container">
							{topCities.map((city) => (
								<a href={city.link}>{city.cityName}</a>
							))}
						</div>
					</div>
					<div className="top-cuisines">
						<h3>Top Cuisines Near You</h3>
						<div className="top-cuisines-container">
							{topCuisines.map((cuisine) => (
								<a href={cuisine.link}>{cuisine.cuisineName}</a>
							))}
						</div>
					</div>
				</div>
				<div className="footer-2">
					<div className="popular-categories">
						<h3>Popular Categories</h3>
						<div className="popular-categories-container">
							{popularCategories.map((category) => (
								<a href={category.link}>{category.categoryName}</a>
							))}
						</div>
					</div>
				</div>
				<div className="footer-3">
					<div className="get-to-know-us">
						<h3>Get to Know Us</h3>
						<div className="get-to-know-us-container">
							{links.map((link) => (
								<a href={link.link}>{link.title}</a>
							))}
						</div>
					</div>
					<div className="let-us-help-you">
						<h3>Let Us Help You</h3>
						<div className="let-us-help-you-container">
							{helpLinks.map((helpLink) => (
								<a href={helpLink.link}>{helpLink.title}</a>
							))}
						</div>
					</div>
					<div className="doing-business">
						<h3>Doing business</h3>
						<div className="doing-business-container">
							{doingBusinessLinks.map((link) => (
								<a href={link.link}>{link.title}</a>
							))}
						</div>
					</div>
					<div className="downloads">
						<button className="apple">
							<img src={apple} />
						</button>
						<button className="android">
							<img src={android} />
						</button>
					</div>
				</div>
				<div className="footer-4">
					<img src={logo} alt="logo" className="footer-logo" />
					<a href="#">Terms of Service</a>
					<a href="#">Privacy</a>
					<a href="#">Delivery Locations</a>
					<a href="#">California Privacy</a>
					<a href="#">Do Not Sell or Share My Personal Information</a>
					<p className="trademark">© 2023 DoorDash</p>
					<div className="languages-box">
						<img src={earth} className="earth-symbol" />
						<select name="languages" id="languages">
							<option value="en-us" selected="selected">
								English (US)
							</option>
							<option value="es-us">Español (US)</option>
							<option value="en-ca">English (CA)</option>
							<option value="fr-ca">Français (CA)</option>
							<option value="en-au">English (AU)</option>
							<option value="en-nz">English (NZ)</option>
						</select>
						<img src={menuArrow} className="menu-symbol" />
					</div>
					<div className="socials"></div>
				</div>
			</div>
		</footer>
	);
}
