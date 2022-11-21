import React, { useRef, useEffect } from "react";
import HotelCard from "../components/Hotels/HotelsCards";
import NotFound from "./NotFound";
import { useSelector, useDispatch } from 'react-redux';
import hotelsAction from '../redux/actions/hotelsActions';

export default function Hotels() {

  const dispatch = useDispatch()
  const { hotels, name, order } = useSelector(state => state.hotelsReducer)
  const { getHotels, getContinentHotels } = hotelsAction

  const searchId = useRef();
  const selectId = useRef();

  useEffect(() => {
    if (name || order) {
      let data = {
          name,
          order
      }
      dispatch(getContinentHotels(data))
      searchId.current.value = name
      selectId.current.value = order
  }
  dispatch(getHotels())

    // eslint-disable-next-line
  }, [])

  let filterHotels = () => {
    if (selectId.current.value !== "asc" && selectId.current.value !== "desc") {
      selectId.current.value = "asc"
    } let data = {
      name: searchId.current.value,
      order: selectId.current.value
  }

  dispatch(getContinentHotels(data))
}

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
