import React from 'react'
import { useRef } from 'react'
import '../components/form/form.css'
import InputSignUp from '../components/form/InputSignUp'


export default function NewCity() {

    const form = useRef()
    const name = useRef()
    const continent = useRef()
    const photo = useRef()
    const population = useRef()
    const newCity = []

    const sendForm = () => {
                newCity.push(
                    {
                        name: name.current.value,
                        continent: continent.current.value,
                        photo: photo.current.value,
                        population: population.current.value,
                    }
                )
                localStorage.setItem('newCity', JSON.stringify(newCity))
            }
        
    return (
        <div class="card-form">
            <div class="cont-h2">
                <h2>CREATE CITY</h2>
            </div>
            <form class="form" ref={form}>
                <InputSignUp className="input-text" type="text" placeholder=" name" id={name}/>
                <InputSignUp className="input-text" type="text" placeholder=" continent" id={continent}/>
                <InputSignUp className="input-text" type="text" placeholder=" photo" id={photo}/>
                <InputSignUp className="input-text" type="text" placeholder=" population" id={population}/>
                <InputSignUp className="input-button" type="submit" value="Create new city" fx={sendForm}/>
            </form>
        </div>
    )
}
