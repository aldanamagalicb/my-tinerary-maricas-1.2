import React from "react";
import { useEffect, useState } from "react";
import CardItinerary from "./CardItinerary";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DB_LINK } from "../url";

export default function Itinerary() {
    let { id } = useParams();
    let [count, setCount] = useState(0);
    let [itineraries, setItineraries] = useState([]);

    useEffect(() => {
        axios.get(`${DB_LINK}api/itineraries?cityId=${id}`)
            .then((res) => setItineraries(res.data.response));
        // eslint-disable-next-line
    }, []);


    useEffect(() => {
        let interval = setInterval(() => {
            count < 2 ? setCount(++count) : setCount(0);
        }, 3000);
        return () => {
            clearInterval(interval);
        };
    }, [count]);

    return (
        <div className="flex center wrap gap-2">
            {itineraries.map((itinerary) => (
                <CardItinerary
                    key={itinerary._id}
                    name={itinerary.name}
                    photo={itinerary.photo[count]}
                    description={itinerary.description}
                    price={itinerary.price} duration={itinerary.duration}
                    id={itinerary._id}
                />
            ))}
        </div>
    );
}
