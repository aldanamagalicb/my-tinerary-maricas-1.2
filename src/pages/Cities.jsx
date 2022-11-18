import React, { useRef, useState, useEffect } from 'react'
import Checkbox from '../components/Checkbox'
import CityCard from '../components/Cities/CityCard'
import NotFound from './NotFound'
import axios from 'axios'
import { DB_LINK } from '../url'


export default function Cities() {

    let [cities, setCities] = useState([])
    let [filCity, setFilCity] = useState([])
    let [checkboxes, setCheckboxes] = useState([])
    const searchId = useRef()


    useEffect(() => {
        axios.get(`${DB_LINK}api/cities`)
        .then(response => setCities(response.data.response))

        axios.get(`${DB_LINK}api/cities`)
        .then(response => setFilCity(response.data.response))
    }, [])


    let checkCities = [...new Set(cities.map((ciudad) => ciudad.continent))]


    function filterCheck(check){
        let checks = []
        if(check.target.checked){
            checks = [...checkboxes, check.target.value]
    }else{
        checks = checkboxes.filter((checkbox) => checkbox !== check.target.value)
    }
    setCheckboxes(checks)
    return checks
}

    function filterCities(cityFil){
        let check = filterCheck(cityFil)
        let url = check.map( (continent) => `continent=${continent}`).join('&');
        axios.get(`${DB_LINK}api/cities?${url}&name=${searchId.current.value}`)
        .then(response => setFilCity(response.data.response))
    }


    return (
        <div className='cont-cities'>
            <div className='wrap flex center w-100 m-1'>
                <div className='flex justify-around mx-1 gap-2'>
                    {checkCities.map((continent) => {
                        return <Checkbox continent={continent} value={continent} fx={filterCities}/>
                    })}
                </div>
                <div className='input-text'>
                    <input type="text" placeholder="Search" ref={searchId} onChange={filterCities} />
                </div>
            </div>
            <div className='Cities-card-container'>
                {filCity.length > 0 ? (filCity.map((city) => {
                    return <CityCard city={city} id={city._id} />
                }))
                : (
                    <NotFound />
                    )
                }
            </div>
        </div>
    )
}