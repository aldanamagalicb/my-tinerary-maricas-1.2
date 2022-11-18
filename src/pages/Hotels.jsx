import React, { useRef, useState, useEffect } from "react";
import HotelCard from "../components/Hotels/HotelsCards";
import NotFound from "./NotFound";
import axios from 'axios'
import { DB_LINK } from '../url'

export default function Hotels() {

  let [hotels, setHotels] = useState([]);
  const searchId = useRef();
  const selectId = useRef();

  useEffect(() => {
    axios.get(`${DB_LINK}api/hotels`)
      .then(response => setHotels(response.data.response))
  }, [])

  let filterHotels = () => {
    if (selectId.current.value !== "asc" && selectId.current.value !== "desc") {
      selectId.current.value = "asc"
    } else {
      axios.get(
          `${DB_LINK}api/hotels?order=${selectId.current.value}&name=${searchId.current.value}`
        )
        .then((res) => setHotels(res.data.response));
    }
  };

  return (
    <div className="cont-cities">
      <form className="wrap flex center w-100 m-1" method="get">
        <label className='input-text'>
          <input type="search" name="search" id="search" placeholder="Search" ref={searchId} onChange={filterHotels} />
        </label>
        <label>
          Choose a Order:
          <select name="select" defaultValue={"default"} onChange={filterHotels} ref={selectId} >
            <option value="default" disabled>
              Select an order by capacity:
            </option>
            <option value="asc">Ascendent</option>
            <option value="desc">Descendent</option>
          </select>
        </label>
      </form>
      <div className='Cities-card-container'>
        {hotels.length > 0 ? (
          hotels.map((hotel) => {
            return <HotelCard hotel={hotel} key={hotel._id} id={hotel._id} />;
          })
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
}
