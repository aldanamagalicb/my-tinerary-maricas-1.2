import React from 'react'
import { useRef } from 'react'
import '../components/form/form.css'
import InputSignUp from '../components/form/InputSignUp'
import axios from 'axios'


export default function NewCity() {

    

    const form = useRef()
    const name = useRef()
    const continent = useRef()
    const photo = useRef()
    const population = useRef()


    const validation = () => {
                    axios.post('http://localhost:8000/api/cities/', {
                    name: name.current.value,
                    continent: continent.current.value,
                    photo: photo.current.value,
                    population: population.current.value,
                    userId: "636d82c66a32c7c4c029d58a"
                })
                    .then(function (response) {
                        console.log(response);
                    })
            }
    
    return (
        <div className="card-form">
            <div className="cont-h2">
                <h2>CREATE CITY</h2>
            </div>
            <form className="form" ref={form}>
                <InputSignUp className="input-text" type="text" placeholder=" name" id={name}/>
                <InputSignUp className="input-text" type="text" placeholder=" continent" id={continent}/>
                <InputSignUp className="input-text" type="text" placeholder=" photo" id={photo}/>
                <InputSignUp className="input-text" type="text" placeholder=" population" id={population}/>
                <InputSignUp className="input-button" type="submit" value="Create new city" fx={validation}/>
            </form>
        </div>
    )
}
