import React from 'react'
import { useRef } from 'react'
import '../components/form/form.css'
import InputSignUp from '../components/form/InputSignUp'


export default function NewHotel() {

    const form = useRef()
    const name = useRef()
    const city = useRef()
    const photo = useRef()
    const capacity = useRef()
    const newHotel = []

    const sendForm = () => {
                newHotel.push(
                    {
                        name: name.current.value,
                        city: city.current.value,
                        photo: photo.current.value,
                        capacity: capacity.current.value,
                    }
                )
                localStorage.setItem('newHotel', JSON.stringify(newHotel))
            }
        
    return (
        <div class="card-form">
            <div class="cont-h2">
                <h2>CREATE HOTEL</h2>
            </div>
            <form class="form" ref={form}>
                <InputSignUp className="input-text" type="text" placeholder=" name" id={name}/>
                <InputSignUp className="input-text" type="text" placeholder=" city" id={city}/>
                <InputSignUp className="input-text" type="text" placeholder=" photo" id={photo}/>
                <InputSignUp className="input-text" type="text" placeholder=" capacity" id={capacity}/>
                <InputSignUp className="input-button" type="submit" value="Create new hotel" fx={sendForm}/>
            </form>
        </div>
    )
}