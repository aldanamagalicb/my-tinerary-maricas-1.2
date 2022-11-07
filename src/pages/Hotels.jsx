import React, { useRef, useState, useEffect } from "react";
import HotelCard from "../components/Hotels/HotelsCards";

export default function Hotels() {
  let [hotels, setHotels] = useState([]);
  let [filtrarHoteles, setHotelsFiltered] = useState([]);
  const searchId = useRef();
  const selectId = useRef();

  useEffect(() => {
    fetch("../hotels.json")
      .then((response) => response.json())
      .then((response) => setHotels(response));

    fetch("../hotels.json")
      .then((response) => response.json())
      .then((response) => setHotelsFiltered(response));
  }, []);

  function filterCheckCards() {
    let orderFiltered = sortHotels();
    let searchFiltered = filterSearch(orderFiltered);
    localStorage.setItem("searchFiltrados", JSON.stringify(searchFiltered));
    setHotelsFiltered(searchFiltered);
    console.log(searchFiltered);
    localStorage.setItem("filtrarHoteles", JSON.stringify(searchFiltered));
  }

  function sortHotels() {
    let hotelesOrdenados;
    let order = selectId.current.value;
    if (order !== "default") {
      if (order === "asc") {
        hotelesOrdenados = hotels
          .sort((a, b) => a.capacity - b.capacity)
          .map((hotel) => hotel);
      } else if (order === "desc") {
        hotelesOrdenados = hotels
          .sort((a, b) => b.capacity - a.capacity)
          .map((hotel) => hotel);
      }
      setHotelsFiltered(hotelesOrdenados);
      return hotelesOrdenados;
    } else {
      return hotels;
    }
  }

  function filterSearch(array) {
    if (searchId.current.value !== "") {
      let hotelesFiltrados = array.filter((hotel) =>
        hotel.name.toLowerCase().includes(searchId.current.value.toLowerCase())
      );
      return hotelesFiltrados;
    } else {
      return array;
    }
  }

  return (
    <div className="cont-cities">
      <form className="wrap flex center w-100 m-1" method="get">
        <label className='input-text'>
          <input 
            type="search"
            name="search"
            id="search"
            placeholder="Search"
            ref={searchId}
            onChange={filterCheckCards}
          />
        </label>
        <label>
          Choose a Order:
          <select
            name="select"
            defaultValue={"default"}
            onChange={filterCheckCards}
            ref={selectId}
          >
            <option value="default" disabled>
              Select an order by capacity:
            </option>
            <option value="asc">Ascendent</option>
            <option value="desc">Descendent</option>
          </select>
        </label>
      </form>

      <div className='Cities-card-container'>
        {filtrarHoteles.length > 0 ? (
          filtrarHoteles.map((hotel, index) => {
            return <HotelCard hotel={hotel} key={index} />;
          })
        ) : (
          <img
            className="img-fluid"

            src="./img/dontFound.jpg"
            alt="Sorry, not found search"
          />
        )}
      </div>
    </div>
  );
}
