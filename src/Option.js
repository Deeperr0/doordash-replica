import React from "react";

export default function Option(props) {
	return (
		<div className="option">
			<img src={props.image} alt={props.title} className="option-image" />
			<h3 className="option-title">{props.title}</h3>
			<p className="option-text">{props.text}</p>
			<a href={props.link} className="option-link">
				{props.linkText}{" "}
				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
					className="link-arrow">
					<path
						d="M8.29289 11.2929C7.90237 11.6834 7.90237 12.3166 8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289L9.70711 3.29289C9.31658 2.90237 8.68342 2.90237 8.29289 3.29289C7.90237 3.68342 7.90237 4.31658 8.29289 4.70711L10.5858 7L3 7C2.44772 7 2 7.44771 2 8C2 8.55228 2.44772 9 3 9L10.5858 9L8.29289 11.2929Z"
						fill="#EB1700"></path>
				</svg>
			</a>
		</div>
	);
}
