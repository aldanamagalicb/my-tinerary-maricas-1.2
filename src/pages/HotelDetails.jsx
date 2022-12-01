import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Events from "../components/Events";
import DetailsHotel from "./DetailsHotel";
import { DB_LINK } from "../url";

export default function HotelDetails() {
  let [hotels, setHotels] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    axios.get(`${DB_LINK}api/hotels/${id}`)
      .then((res) => setHotels(res.data.response));
      // eslint-disable-next-line
  }, []);

  return (
    <>
      <DetailsHotel
        img={hotels.photo}
        name={hotels.name}
        capacity={hotels.capacity}
      />
      <div className="cont-events">
        <Events className="p-2" id={hotels._id} />
        <button>View Comments</button>
      </div>
    </>
  );
}

