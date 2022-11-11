import React from "react";

export default function CardItinerary(props) {
  let { name, price, description, photo, duration } = props;
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
      </div>
    </div>

  )
}
