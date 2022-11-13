import React from "react";
import { useEffect, useState } from "react";
import CardShow from "./CardShow";
import { useParams } from "react-router-dom";

export default function Events() {
  let { id } = useParams();
  let [hotelsShow, setHotelsShow] = useState([]);

  useEffect(() => {
    fetch("/hotelsshow.json")
      .then((res) => res.json())
      .then((res) => setHotelsShow(res.filter((e) => e.hotelId === id)));
    // eslint-disable-next-line
  }, []);
  console.log(hotelsShow);

  return (
    <div className="event">
      {hotelsShow.map((item) => (
        <CardShow
          key={item.id}
          name={item.name}
          photo={item.photo}
          description={item.description}
          price={item.price} capacity={item.capacity}
          date={item.date}
        />
      ))}
    </div>
  );
}
