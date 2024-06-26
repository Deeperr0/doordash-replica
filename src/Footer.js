import React from "react";
import logo from "./logo1.svg";
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
							{topCities.map((city, index) => (
								<a href={city.link} key={`city-${index}`}>
									{city.cityName}
								</a>
							))}
						</div>
					</div>
					<div className="top-cuisines">
						<h3>Top Cuisines Near You</h3>
						<div className="top-cuisines-container">
							{topCuisines.map((cuisine, index) => (
								<a href={cuisine.link} key={`cuisine-${index}`}>
									{cuisine.cuisineName}
								</a>
							))}
						</div>
					</div>
				</div>
				<div className="footer-2">
					<div className="popular-categories">
						<h3>Popular Categories</h3>
						<div className="popular-categories-container">
							{popularCategories.map((category, index) => (
								<a href={category.link} key={`category-${index}`}>
									{category.categoryName}
								</a>
							))}
						</div>
					</div>
				</div>
				<div className="footer-3">
					<div className="get-to-know-us">
						<h3>Get to Know Us</h3>
						<div className="get-to-know-us-container">
							{links.map((link, index) => (
								<a href={link.link} key={`know-${index}`}>
									{link.title}
								</a>
							))}
						</div>
					</div>
					<div className="let-us-help-you">
						<h3>Let Us Help You</h3>
						<div className="let-us-help-you-container">
							{helpLinks.map((helpLink, index) => (
								<a href={helpLink.link} key={`help-${index}`}>
									{helpLink.title}
								</a>
							))}
						</div>
					</div>
					<div className="doing-business">
						<h3>Doing business</h3>
						<div className="doing-business-container">
							{doingBusinessLinks.map((link, index) => (
								<a href={link.link} key={`business-${index}`}>
									{link.title}
								</a>
							))}
						</div>
					</div>
					<div className="downloads">
						<button className="apple">
							<img src={apple} alt="apple" />
						</button>
						<button className="android">
							<img src={android} alt="android" />
						</button>
					</div>
				</div>
				<div className="footer-4">
					<img src={logo} alt="logo" className="footer-logo" />
					<a href="/">Terms of Service</a>
					<a href="/">Privacy</a>
					<a href="/">Delivery Locations</a>
					<a href="/">California Privacy</a>
					<a href="/">Do Not Sell or Share My Personal Information</a>
					<p className="trademark">© 2023 DoorDash</p>
					<div className="languages-box">
						<img src={earth} className="earth-symbol" alt="earth-symbol" />
						<select name="languages" id="languages" defaultValue={"en-us"}>
							<option value="en-us">English (US)</option>
							<option value="es-us">Español (US)</option>
							<option value="en-ca">English (CA)</option>
							<option value="fr-ca">Français (CA)</option>
							<option value="en-au">English (AU)</option>
							<option value="en-nz">English (NZ)</option>
						</select>
						<img src={menuArrow} className="menu-symbol" alt="menu-symbol" />
					</div>
					<div className="socials">
						<a href="www.facebook.com">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								className="styles__StyledInlineSvg-sc-12l8vvi-0 jFpckg">
								<path
									d="M21 12C21 7.02943 16.9706 3 12 3C7.02943 3 3 7.02943 3 12C3 16.4922 6.29117 20.2155 10.5938 20.8907V14.6016H8.30859V12H10.5938V10.0172C10.5938 7.76156 11.9374 6.51562 13.9932 6.51562C14.9779 6.51562 16.0078 6.69141 16.0078 6.69141V8.90625H14.8729C13.7549 8.90625 13.4062 9.60001 13.4062 10.3117V12H15.9023L15.5033 14.6016H13.4062V20.8907C17.7088 20.2155 21 16.4922 21 12Z"
									fill="#C4C4C4"
								/>
							</svg>
						</a>
						<a href="www.twitter.com">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								className="styles__StyledInlineSvg-sc-12l8vvi-0 jFpckg">
								<path
									d="M8.2896 20C15.8368 20 19.9648 13.8438 19.9648 8.50515C19.9648 8.3303 19.9648 8.15623 19.9528 7.98295C20.7559 7.41105 21.4491 6.70293 22 5.89176C21.2511 6.21847 20.4567 6.43273 19.6432 6.52739C20.4998 6.02249 21.1409 5.22838 21.4472 4.29285C20.6417 4.76343 19.7605 5.09507 18.8416 5.27346C18.2229 4.62577 17.4047 4.19689 16.5135 4.05318C15.6223 3.90947 14.7079 4.05894 13.9116 4.47848C13.1154 4.89801 12.4819 5.56421 12.109 6.37398C11.7361 7.18376 11.6446 8.09196 11.8488 8.95805C10.2174 8.87753 8.62144 8.46013 7.16451 7.73294C5.70759 7.00576 4.42227 5.98505 3.392 4.73708C2.86727 5.62645 2.70656 6.67929 2.94258 7.68123C3.17861 8.68317 3.79362 9.55888 4.6624 10.1301C4.00939 10.111 3.37062 9.93757 2.8 9.62439C2.8 9.64093 2.8 9.65826 2.8 9.67559C2.80026 10.6083 3.12821 11.5123 3.72823 12.2341C4.32824 12.9559 5.16338 13.4512 6.092 13.6359C5.4879 13.7981 4.85406 13.8218 4.2392 13.7052C4.50141 14.5079 5.01189 15.2099 5.69926 15.7129C6.38662 16.216 7.21649 16.4949 8.0728 16.5107C6.61979 17.6351 4.82485 18.2454 2.9768 18.2436C2.65032 18.2429 2.32416 18.2235 2 18.1853C3.87651 19.3709 6.05993 19.9998 8.2896 19.9968"
									fill="#C4C4C4"
								/>
							</svg>
						</a>
						<a href="www.instagram.com">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								className="styles__StyledInlineSvg-sc-12l8vvi-0 jFpckg">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M12.0008 3C9.55657 3 9.24981 3.01069 8.2898 3.05438C7.33167 3.09825 6.67766 3.24994 6.10541 3.4725C5.51346 3.70238 5.01133 4.00989 4.51108 4.51033C4.01045 5.01058 3.70294 5.51271 3.47232 6.10447C3.24919 6.67691 3.09731 7.33111 3.05419 8.28887C3.01125 9.24888 3 9.55582 3 12.0001C3 14.4444 3.01088 14.7502 3.05438 15.7102C3.09844 16.6683 3.25013 17.3223 3.4725 17.8946C3.70257 18.4865 4.01007 18.9887 4.51052 19.4889C5.01058 19.9895 5.51271 20.2978 6.10428 20.5277C6.67691 20.7502 7.33111 20.9019 8.28905 20.9458C9.24906 20.9895 9.55563 21.0002 11.9997 21.0002C14.4442 21.0002 14.75 20.9895 15.71 20.9458C16.6681 20.9019 17.3229 20.7502 17.8955 20.5277C18.4873 20.2978 18.9887 19.9895 19.4887 19.4889C19.9894 18.9887 20.2969 18.4865 20.5275 17.8948C20.7487 17.3223 20.9006 16.6681 20.9456 15.7104C20.9887 14.7504 21 14.4444 21 12.0001C21 9.55582 20.9887 9.24906 20.9456 8.28905C20.9006 7.33092 20.7487 6.67691 20.5275 6.10466C20.2969 5.51271 19.9894 5.01058 19.4887 4.51033C18.9881 4.0097 18.4875 3.70219 17.895 3.4725C17.3212 3.24994 16.6668 3.09825 15.7087 3.05438C14.7487 3.01069 14.4431 3 11.998 3H12.0008ZM11.7009 4.6218L12.0008 4.62189C14.4039 4.62189 14.6887 4.63052 15.6376 4.67364C16.5151 4.71377 16.9914 4.86039 17.3086 4.98358C17.7286 5.14671 18.0281 5.34171 18.3429 5.65671C18.6579 5.97172 18.8529 6.27172 19.0164 6.69173C19.1396 7.0086 19.2864 7.48486 19.3263 8.36237C19.3695 9.31113 19.3788 9.59613 19.3788 11.998C19.3788 14.3999 19.3695 14.6849 19.3263 15.6337C19.2862 16.5112 19.1396 16.9875 19.0164 17.3043C18.8533 17.7243 18.6579 18.0234 18.3429 18.3382C18.0279 18.6532 17.7288 18.8482 17.3086 19.0114C16.9918 19.1351 16.5151 19.2814 15.6376 19.3215C14.6889 19.3646 14.4039 19.374 12.0008 19.374C9.59762 19.374 9.3128 19.3646 8.36404 19.3215C7.48653 19.281 7.01028 19.1344 6.69284 19.0112C6.27283 18.848 5.97283 18.653 5.65783 18.338C5.34282 18.023 5.14782 17.7238 4.98432 17.3036C4.86113 16.9867 4.71432 16.5105 4.67438 15.6329C4.63125 14.6842 4.62263 14.3992 4.62263 11.9958C4.62263 9.59238 4.63125 9.30888 4.67438 8.36012C4.71451 7.48261 4.86113 7.00635 4.98432 6.6891C5.14745 6.2691 5.34282 5.96909 5.65783 5.65409C5.97283 5.33909 6.27283 5.14408 6.69284 4.98058C7.01009 4.85683 7.48653 4.71058 8.36404 4.67027C9.1943 4.63277 9.51606 4.62152 11.1934 4.61964V4.62189C11.3502 4.62165 11.5189 4.62172 11.7009 4.6218ZM15.725 7.19592C15.725 6.59947 16.2088 6.11628 16.805 6.11628C17.4013 6.11628 17.885 6.59966 17.885 7.19592C17.885 7.79217 17.4013 8.27593 16.805 8.27593C16.2088 8.27593 15.725 7.79217 15.725 7.19592ZM12.0006 7.37817C9.44827 7.37827 7.37891 9.44769 7.37891 12.0001C7.37891 14.5526 9.44837 16.6211 12.0008 16.6211C14.5533 16.6211 16.622 14.5526 16.622 12.0001C16.622 9.44763 14.5531 7.37817 12.0006 7.37817ZM15.0009 12.0001C15.0009 10.3431 13.6577 9.00006 12.0009 9.00006C10.3439 9.00006 9.00085 10.3431 9.00085 12.0001C9.00085 13.6569 10.3439 15.0001 12.0009 15.0001C13.6577 15.0001 15.0009 13.6569 15.0009 12.0001Z"
									fill="#C4C4C4"
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
