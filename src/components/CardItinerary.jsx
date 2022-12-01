import React from "react";
import Reaction from "./Reaction";

export default function CardItinerary(props) {
	let { name, price, description, photo, duration, id } = props;



	return (
		<div className="card-event">
			<div className="card-header">
				<img src={photo} alt="city" />
			</div>
			<div className="card-body">
				<h3>
					{name}
				</h3>
				<h5>
					{description}
				</h5>
				<h5>USD $
					{price}
				</h5>
				<h5>Duration:
					{duration}
					hour
				</h5>
				<div className="flex gap-1 cont-reactions">
					<Reaction itineraryid={id} />
				</div>
			</div>
		</div>
	)
}
