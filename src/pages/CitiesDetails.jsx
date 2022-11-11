import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Itinerary from "../components/Itinerary";
import Details from "./Details";

export default function CitiesDetails() {
  let [cities, setCities] = useState([]);
  let { id } = useParams();



  useEffect(() => {
    fetch("/cities.json")
      .then((res) => res.json())
      .then((res) => setCities(res.find((e) => e.id === id)));


    // eslint-disable-next-line
  }, []);


  console.log(id);
  return (
    <>
      <Details
        img={cities.photo}
        name={cities.name}
        zone={cities.zone}
        population={cities.population}
      />
      <div className="p-2 flex column justify-center align-center">
        <Itinerary className="p-2" id={cities.id}></Itinerary>
        <button>View Comments</button>
      </div>
    </>
  );
}
