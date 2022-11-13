import React from "react";
import { useEffect, useState } from "react";
import CardItinerary from "./CardItinerary";
import { useParams } from "react-router-dom";

export default function Itinerary() {
  let { id } = useParams();
  let [count, setCount] = useState(0);
  let [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("/touristact.json")
      .then((res) => res.json())
      .then((res) => setActivities(res.filter((e) => e.citiId === id)));

  }, []);
  console.log(activities);

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
      {activities.map((item) => (
        <CardItinerary
          key={item.id}
          name={item.name}
          photo={item.photo[count]}
          description={item.description}
          price={item.price} duration={item.duration}
        />
      ))}
    </div>
  );
}
