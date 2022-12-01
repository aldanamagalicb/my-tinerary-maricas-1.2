import React from 'react'
import { useRef, useEffect, useState } from 'react'
import '../components/form/form.css'
import InputSignUp from '../components/form/InputSignUp'
import axios from 'axios';
import Swal from 'sweetalert2';
import { DB_LINK } from "../url";
import { useSelector, useDispatch } from "react-redux";
import citiesActions from '../redux/actions/citiesActions';
import hotelsActions from '../redux/actions/hotelsActions';


export default function NewReaction() {
    const { getItineraries } = citiesActions
    const { getShows } = hotelsActions
    const dispatch = useDispatch()
    const form = useRef()
    const name = useRef()
    const icon = useRef()
    const iconBack = useRef()
    const eventId = useRef();
    const { allItineraries } = useSelector(store => store.citiesReducer)
    const {allShows} = useSelector(store => store.hotelsReducer)

    useEffect(() => {
        dispatch(getItineraries())
        dispatch(getShows())

        
        // eslint-disable-next-line
    }, []);

    let events = [...allItineraries, ...allShows]


    async function createReaction(event) {
        event.preventDefault()

        let itineraires = allItineraries.find(itinerary => itinerary._id === eventId.current.value)
        let shows = allShows.find(show => show._id === eventId.current.value)

        let newtinerary = {
            name: name.current.value,
            icon: icon.current.value,
            iconBack: iconBack.current.value,
            userId: [],
        }

        if (itineraires) {
            newtinerary.itineraryId = eventId.current.value
        } else if (shows) {
            newtinerary.showId = eventId.current.value
        }
        try {
            
            let response = await axios.post(`${DB_LINK}api/reactions/`, newtinerary)
            if (response.data.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Tinerary created!',
                    showConfirmButton: true,    
                })
                    .then(make => {
                        if (make.isConfirmed) {
                            form.current.reset();
                        }
                    })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: response.data.message,
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="card-form">
            <div className="cont-h2">
                <h2>New Reaction</h2>
            </div>
            <form className="form" ref={form}>
                <InputSignUp className="input-text" type="text" placeholder=" Name" id={name} />
                <select ref={eventId} className="input-text" id="eventId">
                    <option>Select the event</option>
                    {events.map((event) => ( <option key={event._id} value={event._id}> {event.name}</option>))}
                </select>
                <InputSignUp className="input-text" type="text" placeholder=" Icon" id={icon} />
                <InputSignUp className="input-text" type="text" placeholder=" IconBack" id={iconBack} />
                <InputSignUp className="input-button" type="submit" value="Create Reaction" fx={createReaction} />
            </form>
        </div>
    )
}
