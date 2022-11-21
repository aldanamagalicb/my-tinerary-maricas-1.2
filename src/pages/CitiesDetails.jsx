import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Itinerary from "../components/Itinerary";
import Details from "./Details";
import { DB_LINK } from "../url";

export default function CitiesDetails() {
  let [cities, setCities] = useState([]);
  let {id} = useParams();

  useEffect(() => {
    axios.get(`${DB_LINK}api/cities/${id}`)
      .then((res) => setCities(res.data.response));
      // eslint-disable-next-line
  }, []);


  return (
    <>
      <Details
        img={cities.photo}
        name={cities.name}
        zone={cities.continent}
        population={cities.population}
      />
      <div className="p-2 flex column justify-center align-center">
        <Itinerary className="p-2" id={cities._id}></Itinerary>
        <button>View Comments</button>
      </div>
    </>
  );
}
