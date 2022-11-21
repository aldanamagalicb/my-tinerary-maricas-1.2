import React from 'react'
import { useRef } from 'react'
import '../components/form/form.css'
import InputSignUp from '../components/form/InputSignUp'
import citiesActions from '../redux/actions/citiesActions'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'


export default function NewCity() {

    const dispatch = useDispatch()
    const { doCity } = citiesActions
    const form = useRef()
    const name = useRef()
    const continent = useRef()
    const photo = useRef()
    const population = useRef()

    async function validation(event) {
        event.preventDefault()
        let newCity = {
            name: name.current.value,
            continent: continent.current.value,
            photo: photo.current.value,
            population: population.current.value,
            userId: "636d82c66a32c7c4c029d58a"
        }
        try {
            let response = await dispatch(doCity(newCity))
            if (response.payload.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'City added!',
                    showConfirmButton: true,
                })
                    .then(make => {
                        if (make.isConfirmed) {
                            window.location.href = `/cities/${response.payload.id}`
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
                <h2>CREATE CITY</h2>
            </div>
            <form className="form" ref={form}>
                <InputSignUp className="input-text" type="text" placeholder="Name" id={name} />
                <InputSignUp className="input-text" type="text" placeholder="Continent" id={continent} />
                <InputSignUp className="input-text" type="text" placeholder="Photo" id={photo} />
                <InputSignUp className="input-text" type="text" placeholder="Population" id={population} />
                <InputSignUp className="input-button" type="submit" value="Create new city" fx={validation} />
            </form>
        </div>
    )
}