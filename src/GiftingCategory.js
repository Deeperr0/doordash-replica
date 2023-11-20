import React from "react";
export default function GiftingCategory(props) {
	return (
		<div className="gifting-category">
			<img src={props.image} className="gifting-category-image" />
			<h2 className="gifting-category-title">{props.title}</h2>
			<p className="gifting-category-text">{props.description}</p>
			<a href={props.link} className="gifting-category-link">
				<button className="gifting-category-button">{props.button}</button>
			</a>
			{props.comment && (
				<p className="gifting-category-comment">{props.comment}</p>
			)}
		</div>
	);
}
