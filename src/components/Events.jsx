import React from "react";
import { useEffect, useState } from "react";
import CardShow from "./CardShow";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DB_LINK } from "../url";


export default function Events() {
  let { id } = useParams();
  let [hotelsShow, setHotelsShow] = useState([]);

  useEffect(() => {
    axios.get(`${DB_LINK}api/shows?hotelId=${id}`)
      .then((res) => setHotelsShow(res.data.data));
// eslint-disable-next-line
  }, []);

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
