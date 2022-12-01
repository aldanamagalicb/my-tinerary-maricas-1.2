import React from 'react'
import { useRef, useEffect, useState } from 'react'
import '../components/form/form.css'
import InputSignUp from '../components/form/InputSignUp'
import axios from 'axios';
import Swal from 'sweetalert2';
import { DB_LINK } from "../url";
import { useSelector } from "react-redux";


export default function NewReaction() {

    const form = useRef()
    const name = useRef()
    const icon = useRef()
    const iconBack = useRef()
    const eventId = useRef();
    const [events, setEvents] = useState([]);
    const { id } = useSelector(store => store.userReducer)

    useEffect(() => {
        axios.get(`${DB_LINK}api/itineraries`)
            .then((res) => setEvents(res.data.response));
        // eslint-disable-next-line
    }, []);

    async function createReaction(event) {
        event.preventDefault()
        let newtinerary = {
            eventId: eventId.current.value,
            name: name.current.value,
            icon: icon.current.value,
            iconBack: iconBack.current.value,
            userId: [id],
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
                <h2>New tinerary</h2>
            </div>
            <form className="form" ref={form}>
                <InputSignUp className="input-text" type="text" placeholder=" Name" id={name} />
                <select ref={eventId} className="input-text" id="eventId">
                    <option>Select the itinerary</option>
                    {events.map((itinerary) => ( <option key={itinerary._id} value={itinerary._id}> {itinerary.name}</option>))}
                </select>
                <InputSignUp className="input-text" type="text" placeholder=" Icon" id={icon} />
                <InputSignUp className="input-text" type="text" placeholder=" IconBack" id={iconBack} />
                <InputSignUp className="input-button" type="submit" value="Create Reaction" fx={createReaction} />
            </form>
        </div>
    )
}
