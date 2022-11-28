import React, { useRef, useEffect, useState } from "react";
import HotelCard from "../components/Hotels/HotelsCards";
import { useSelector, useDispatch } from 'react-redux';
import hotelsAction from '../redux/actions/hotelsActions';
import NotFound from './NotFound';

export default function Hotels() {

  const dispatch = useDispatch()
  let { hotels, name, order } = useSelector(state => state.hotelsReducer)
  const { getHotels, getContinentHotels } = hotelsAction
  
  let [time, setTime] = useState(true)

  if(time){
      hotels = null
  }

  const searchId = useRef();
  const selectId = useRef();

  useEffect(() => {

    setTimeout(() => {
      setTime(false)
  }, 1000);
  

    if (name || order) {
      let data = {
          name,
          order
      }
      dispatch(getContinentHotels(data))
      searchId.current.value = name
      selectId.current.value = order
  }else{
    dispatch(getHotels())
  }
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
  console.log(hotels)
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
        {
          hotels !== null ?

        hotels.length > 0 ? hotels?.map((hotel) => {
            return <HotelCard hotel={hotel} key={hotel._id} id={hotel._id} />;
          }) : <NotFound />        
          
          : <>
              <article className="d-flex flex-column align-items-center">
                <img src="https://media4.giphy.com/media/IIkMsHnwjWmxzbGki9/200w.webp?cid=ecf05e474ox5rhx1zdwa5nz8db02wuslpxnmhlb9syirkk7u&rid=200w.webp&ct=s" alt="error" class="gif img-fluid " width="385px"/>
            </article>
          </>

          }
      </div>
    </div>
  );
}
