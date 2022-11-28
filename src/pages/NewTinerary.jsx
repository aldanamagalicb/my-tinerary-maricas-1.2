import React from 'react'
import { useRef, useEffect, useState } from 'react'
import '../components/form/form.css'
import InputSignUp from '../components/form/InputSignUp'
import axios from 'axios';
import Swal from 'sweetalert2';
import { DB_LINK } from "../url";
import { useSelector } from "react-redux";


export default function NewTinerary() {

    const form = useRef()
    const name = useRef()
    const photo1 = useRef()
    const photo2 = useRef()
    const photo3 = useRef()
    const description = useRef()
    const price = useRef()
    const duration = useRef()
    const cityId = useRef();
    const [cities, setCities] = useState([]);
    const { id, token } = useSelector(store => store.userReducer)

    useEffect(() => {
        axios.get(`${DB_LINK}api/cities`)
            .then((res) => setCities(res.data.response));
        // eslint-disable-next-line
    }, []);

    async function createTinerary(event) {
        event.preventDefault()
        let photo = [photo1.current.value, photo2.current.value, photo3.current.value]
        let newtinerary = {
            cityId: cityId.current.value,
            name: name.current.value,
            photo,
            description: description.current.value,
            price: price.current.value,
            duration: duration.current.value,
            userId: id,
        }
        let header = { headers: { Authorization: `Bearer ${token}` } };
        try {
            let response = await axios.post(`${DB_LINK}api/itineraries/`, newtinerary, header)
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
                <select ref={cityId} className="input-text" id="cityId">
                    <option>Select the city</option>
                    {cities.map((city) => ( <option key={city._id} value={city._id}> {city.name}</option>))}
                </select>
                <InputSignUp className="input-text" type="text" placeholder=" Photo 1" id={photo1} />
                <InputSignUp className="input-text" type="text" placeholder=" Photo 2" id={photo2} />
                <InputSignUp className="input-text" type="text" placeholder=" Photo 3" id={photo3} />
                <InputSignUp className="input-text" type="text" placeholder=" Description" id={description} />
                <InputSignUp className="input-text" type="text" placeholder=" Price" id={price} />
                <InputSignUp className="input-text" type="text" placeholder=" Duration" id={duration} />
                <InputSignUp className="input-button" type="submit" value="Create tinerary" fx={createTinerary} />
            </form>
        </div>
    )
}
