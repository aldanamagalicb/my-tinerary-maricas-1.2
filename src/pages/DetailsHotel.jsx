import React from "react";
export default function DetailsHotel(props) {
  let { img } = props;
  let { name } = props;
  let { capacity } = props;

  return (
    <div className=" w-100 flex column justify-center align-center p-2">
      <div className="container-card">
        <div className="container-img">
          <img
            src={img}
            alt={name}
          />
        </div>
        <h1>{name}</h1>
        <div>
          <h3 className="projcard-subtitle">Capacity: {capacity}</h3>
        </div>
      </div>
    </div>
);
}
