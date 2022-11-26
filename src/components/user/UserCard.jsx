import React from "react";
export default function Details(props) {
  let { photo, name, lastName, age  } = props;  
  return (
    <div className="cont-card-detail">
        <div className="container-img-detail">
          <img src={photo} alt={name} />
        </div>
        <h1>{name} {lastName}</h1>
        <div>
          <h3>Age: {age}</h3>        
        </div>
    </div>
  );
}