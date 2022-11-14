import React from 'react'
import { useRef } from 'react'
import '../components/form/form.css'
import InputSignUp from '../components/form/InputSignUp'
import axios from 'axios'
import {DB_LINK} from '../url'

console.log(DB_LINK)

export default function NewHotel() {

    const form = useRef()
    const name = useRef()
    const city = useRef()
    const photo = useRef()
    const capacity = useRef()
    
    const validation = () => {
        axios.post(`${DB_LINK}api/hotels/`, {
        name: name.current.value,
        city: city.current.value,
        photo: photo.current.value,
        capacity: capacity.current.value,
        cityId: "63715951fc1586373cba7dc2",
        userId: "636d82c66a32c7c4c029d58a"
    })
        .then(function (response) {
            console.log(response);
        })
}
        
    return (
        <div className="card-form">
            <div className="cont-h2">
                <h2>CREATE HOTEL</h2>
            </div>
            <form className="form" ref={form}>
                <InputSignUp className="input-text" type="text" placeholder=" name" id={name}/>
                <InputSignUp className="input-text" type="text" placeholder=" city" id={city}/>
                <InputSignUp className="input-text" type="text" placeholder=" photo" id={photo}/>
                <InputSignUp className="input-text" type="text" placeholder=" capacity" id={capacity}/>
                <InputSignUp className="input-button" type="submit" value="Create new hotel" fx={validation}/>
            </form>
        </div>
    )
}