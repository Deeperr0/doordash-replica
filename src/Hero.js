import React from "react";

export default function Hero() {
	return (
		<div className="hero-section">
			<h2 className="hero-section-title">
				Discover restaurants and more near you.
			</h2>
			<div className="box">
				<i>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						className="pin-logo">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M10.5257 21.3514L12 20L13.4743 21.3514C13.0955 21.7647 12.5606 22 12 22C11.4394 22 10.9045 21.7647 10.5257 21.3514ZM13.2949 18.4463C12.5464 19.4039 12 20 12 20C12 20 11.4535 19.4039 10.7051 18.4463C9.07919 16.3658 6.5 12.5792 6.5 9.49242C6.5 6.45904 8.96243 4 12 4C15.0376 4 17.5 6.45904 17.5 9.49242C17.5 12.5792 14.9208 16.3658 13.2949 18.4463ZM13.4743 21.3514C13.4743 21.3514 13.4743 21.3514 12 20C10.5257 21.3514 10.5257 21.3514 10.5257 21.3514L10.5227 21.3482L10.5177 21.3427L10.5018 21.3252L10.4474 21.2647C10.4014 21.2133 10.3363 21.1398 10.2548 21.0461C10.0919 20.8589 9.86301 20.5903 9.59004 20.2553C9.04587 19.5873 8.31764 18.6441 7.58566 17.5456C6.85705 16.4522 6.10151 15.1704 5.5227 13.8275C4.95169 12.5026 4.5 10.9984 4.5 9.49242C4.5 5.35187 7.86046 2 12 2C16.1395 2 19.5 5.35187 19.5 9.49242C19.5 10.9984 19.0483 12.5026 18.4773 13.8275C17.8985 15.1704 17.1429 16.4522 16.4143 17.5456C15.6824 18.6441 14.9541 19.5873 14.41 20.2553C14.137 20.5903 13.9081 20.8589 13.7452 21.0461C13.6637 21.1398 13.5986 21.2133 13.5526 21.2647L13.4982 21.3252L13.4823 21.3427L13.4773 21.3482L13.4743 21.3514Z"
							fill="#767676"></path>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M12 11C12.8284 11 13.5 10.3284 13.5 9.5C13.5 8.67157 12.8284 8 12 8C11.1716 8 10.5 8.67157 10.5 9.5C10.5 10.3284 11.1716 11 12 11ZM12 13C13.933 13 15.5 11.433 15.5 9.5C15.5 7.567 13.933 6 12 6C10.067 6 8.5 7.567 8.5 9.5C8.5 11.433 10.067 13 12 13Z"
							fill="#767676"></path>
					</svg>
				</i>
				<input
					type="text"
					placeholder="Enter delivery address"
					className="hero-section-search"></input>
				<button className="search-button">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						className="search-button-arrow">
						<path
							d="M12.2929 17.2929C11.9024 17.6834 11.9024 18.3166 12.2929 18.7071C12.6834 19.0976 13.3166 19.0976 13.7071 18.7071L19.1578 13.2564C19.242 13.1722 19.3427 13.0717 19.4241 12.9758C19.5183 12.8648 19.6439 12.6962 19.7195 12.4635C19.8174 12.1623 19.8174 11.8377 19.7195 11.5365C19.6439 11.3038 19.5183 11.1352 19.4241 11.0242C19.3427 10.9283 19.242 10.8278 19.1578 10.7436L13.7071 5.29289C13.3166 4.90237 12.6834 4.90237 12.2929 5.29289C11.9024 5.68342 11.9024 6.31658 12.2929 6.70711L16.5858 11L5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44771 13 5 13L16.5858 13L12.2929 17.2929Z"
							fill="white"></path>
					</svg>
				</button>
			</div>

			<a href="/">
				<button className="sign-in-address">
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						className="styles__StyledInlineSvg-sc-12l8vvi-0 jFpckg">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M12.5 16C13.6046 16 14.5 15.1046 14.5 14C14.5 13.5 14.37 13.0462 14.37 13.0462C14.2499 12.5658 14.0117 11.9323 13.5375 11.3C12.5198 9.94301 10.738 9 8 9C5.26202 9 3.48025 9.94301 2.4625 11.3C1.98825 11.9323 1.75013 12.5658 1.63003 13.0462C1.63003 13.0462 1.5 13.5 1.5 14C1.5 15.1046 2.39543 16 3.5 16H12.5ZM12.5 14C12.5 14 12.5 12.8726 11.4633 12C10.8088 11.4492 9.74133 11 8 11C6.25867 11 5.19116 11.4492 4.53675 12C3.5 12.8726 3.5 14 3.5 14H12.5Z"
							fill="currentColor"></path>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M12 4C12 6.20914 10.2091 8 8 8C5.79086 8 4 6.20914 4 4C4 1.79086 5.79086 0 8 0C10.2091 0 12 1.79086 12 4ZM8 6C9.10457 6 10 5.10457 10 4C10 2.89543 9.10457 2 8 2C6.89543 2 6 2.89543 6 4C6 5.10457 6.89543 6 8 6Z"
							fill="currentColor"></path>
					</svg>
					<p>Sign in for saved address</p>
				</button>
			</a>
		</div>
	);
}
