import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Btn from './Btn'
import './carousel.css'
import { DB_LINK } from '../../url'


export default function Carousel() {
    let [number, setNumber] = useState(1)
    let [cities, setCities] = useState([])
    let [hotels, setHotels] = useState([])
    let [activities, setActivities] = useState([])
    let [detailsCities, setDetailCities] = useState([])
    let [detailsHotels, setDetailHotels] = useState([])
    let [detailsActivities, setDetailActivities] = useState([])
    let [details, setDetails] = useState([])
    let [id, setId] = useState(0);


    useEffect(() => {
        let idInterval = setInterval(
            () => {
                next();

            },

            5000
        );
        setId(idInterval);
        return clearInterval(id);
        // eslint-disable-next-line
    }, [number]);

    useEffect(() => {
        axios.get(`${DB_LINK}api/cities/`)
            .then(res => setCities(res.data.response))

        axios.get(`${DB_LINK}api/hotels/`)
            .then(res => setHotels(res.data.response))

        axios.get(`${DB_LINK}api/itineraries/`)
            .then(res => setActivities(res.data.response))
    },
        // eslint-disable-next-line
        [])

    let prev = () => {
        if (number !== 0) {
            setNumber(--number)
        } else {
            setNumber(details.length - 1)
        }
        clearInterval(id);
    }
    let next = () => {
        if (number !== details.length - 1) {
            setNumber(++number)
        } else {
            setNumber(0)
        }
        clearInterval(id);
    }

    function aleatory(number) {
        return Math.floor(Math.random() * number)
    }

    setDetailActivities = activities.map(activity => {
        if (detailsActivities.length < 4 && !detailsActivities.includes(activity.photo)) {
            detailsActivities.push(activity.photo[aleatory(activity.photo.length - 1)])
        }
        return setDetailActivities
    })


    setDetailHotels = hotels.map(hotel => {
        if (detailsHotels.length < 4 && !detailsHotels.includes(hotel.photo)) {
            detailsHotels.push(hotel.photo[aleatory(hotel.photo.length - 1)])
        }
        return setDetailHotels
    })

    setDetailCities = cities.map(() => {
        let citiesAleatory = aleatory(cities.length - 1)
        if (detailsCities.length < 4 && !detailsCities.includes(cities.photo)) {
            detailsCities.push(cities[citiesAleatory].photo)
        }
        return setDetailCities
    })

    if (details.length < 4) {
        setDetails = details.push(detailsActivities, detailsCities, detailsHotels)
        return setDetails
    }

    return (
        <div className='flex justify-center column '>
            <div>
                <div className='flex justify-center'>
                    <h1 className='tittleCar'>Popular My Tineraries</h1>
                </div>
                <div className='flex justify-center align-center gap-1 w-100 vh-90'>
                    <Btn verb="<" onClick={prev} />
                    <div className='cont-carousel'>
                        {
                            details[number].map((photo) => {
                                return (
                                    <img className='carousel' src={photo} alt="photo" />
                                )
                            })
                        }
                    </div>
                    <Btn verb=">" onClick={next} />
                </div>
            </div>
        </div>

    )
}