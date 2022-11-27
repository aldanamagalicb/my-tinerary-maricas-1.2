import React from 'react'
import { useRef, useEffect, useState } from 'react'
import '../components/form/form.css'
import InputSignUp from '../components/form/InputSignUp'
import axios from 'axios';
import Swal from 'sweetalert2';
import { DB_LINK } from "../url";
import { useSelector } from "react-redux";


export default function NewShow() {

    const form = useRef()
    const name = useRef()
    const photo = useRef()
    const description = useRef()
    const price = useRef()
    const date = useRef()
    const hotelId = useRef();
    const [hotels, setHotels] = useState([]);
    const { id, token } = useSelector(store => store.userReducer)

    useEffect(() => {
        axios.get(`${DB_LINK}api/hotels`)
            .then((res) => setHotels(res.data.response));
        // eslint-disable-next-line
    }, []);

    async function createShow(event) {
        event.preventDefault()
        let newtinerary = {
            hotelId: hotelId.current.value,
            name: name.current.value,
            photo: photo.current.value,
            description: description.current.value,
            price: price.current.value,
            date: date.current.value,
            userId: id,
        }
        let header = { headers: { Authorization: `Bearer ${token}` } };
        try {
            let response = await axios.post(`${DB_LINK}api/shows/`, newtinerary, header)
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
                <h2>New Show</h2>
            </div>
            <form className="form" ref={form}>
                <InputSignUp className="input-text" type="text" placeholder=" Name" id={name} />
                <select ref={hotelId} className="input-text" id="hotelId">
                    <option>Select the hotel</option>
                    {hotels.map((hotel) => ( <option key={hotel._id} value={hotel._id}> {hotel.name}</option>))}
                </select>
                <InputSignUp className="input-text" type="text" placeholder=" Photo " id={photo} />
                <InputSignUp className="input-text" type="text" placeholder=" Description" id={description} />
                <InputSignUp className="input-text" type="text" placeholder=" Price" id={price} />
                <InputSignUp className="input-text" type="date" placeholder=" Date" id={date} />
                <InputSignUp className="input-button" type="submit" value="Create show" fx={createShow} />
            </form>
        </div>
    )
}
