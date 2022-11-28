import React from 'react'
import { useRef, useState, useEffect } from 'react'
import '../components/form/form.css'
import hotelsActions from '../redux/actions/hotelsActions'
import InputSignUp from '../components/form/InputSignUp'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { DB_LINK } from "../url";
import axios from 'axios';

export default function NewHotel() {
    const {id} = useSelector(store => store.userReducer)
    const dispatch = useDispatch()
    const { doHotel } = hotelsActions
    const form = useRef()
    const name = useRef()
    const photo = useRef()
    const photo1 = useRef()
    const photo2 = useRef()
    const capacity = useRef()
    const cityId = useRef()
    const [cities, setCities] = useState([]);


    useEffect(() => {
        axios.get(`${DB_LINK}api/cities`)
            .then((res) => setCities(res.data.response));
        // eslint-disable-next-line
    }, []);



    async function validation(event) {
        event.preventDefault()
        let NewHotel = {
            name: name.current.value,
            photo: [photo.current.value, photo1.current.value, photo2.current.value],
            capacity: capacity.current.value,
            cityId : cityId.current.value,
            userId: id
        }
        console.log(NewHotel)
        try {
            let response = await dispatch(doHotel(NewHotel))
            if (response.payload.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Hotel added!',
                    showConfirmButton: true,
                })
                    .then(make => {
                        if (make.isConfirmed) {
                            window.location.href = `/hotels/${response.payload.id}`
                        }
                    })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: response.payload.messages,
                })
            }
        }
        catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="card-form">
            <div className="cont-h2">
                <h2>CREATE HOTEL</h2>
            </div>
            <form className="form" ref={form}>
                <InputSignUp className="input-text" type="text" placeholder=" Name" id={name} />
                <select ref={cityId} className="input-text" id="cityId">
                    <option>Select the city</option>
                    {cities.map((city) => ( <option key={city._id} value={city._id}> {city.name}</option>))}
                </select>
                <InputSignUp className="input-text" type="text" placeholder=" Photo 1" id={photo} />
                <InputSignUp className="input-text" type="text" placeholder=" Photo 2" id={photo1} />
                <InputSignUp className="input-text" type="text" placeholder=" Photo 3" id={photo2} />
                <InputSignUp className="input-text" type="text" placeholder=" Capacity" id={capacity} />
                <InputSignUp className="input-button" type="submit" value="Create new hotel" fx={validation} />
            </form>
        </div>
    )
}