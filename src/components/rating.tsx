/** @format */

import { Rating as RT } from "../types/rating.ts";
import "../styles/rating.css";

export default function Rating({ rating }: { ranting: RT }) {
	const filledStars = "★".repeat(Math.floor(rating.rate));
	const hasHalfStar = rating.rate % 1 >= 0.5;
	const middleStar = hasHalfStar ? "star_rate_half"/*"⯪"*/ : "";
	const emptyStars = "☆".repeat(5 - Math.ceil(rating.rate));

	return (
		<div className='rating-container'>
			<span className="material-symbols-outlined" > {filledStars + middleStar + emptyStars}</span>
			<span>📦 {rating.count}</span>
		</div>
	);
}
