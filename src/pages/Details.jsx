import React from "react";
export default function Details(props) {
  let { img } = props;
  let { name } = props;
  let { zone } = props;
  let { population } = props
  return (
    <div className="cont-card-detail">
        <div className="container-img-detail">
          <img src={img} alt={name} />
        </div>
        <h1>{name}</h1>
        <div>
          <h3>{zone}</h3>
          <h3>Population: {population}</h3>
        </div>
    </div>
  );
}
