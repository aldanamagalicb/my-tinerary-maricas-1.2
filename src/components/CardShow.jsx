import React from "react";
import Reaction from "./Reaction";


export default function CardShow(props) {
    let { name, price, description, photo, date, id } = props;
    console.log(id)
    return (
        <div className="card-event">
            <div className="card-header">
                <img src={photo} alt="hotel" />
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
                <h5>Date: {date} </h5>
                <div className="flex gap-1 cont-reactions">
					<Reaction type='show' eventid={id} />
				</div>
            </div>
        </div>
    )
}
