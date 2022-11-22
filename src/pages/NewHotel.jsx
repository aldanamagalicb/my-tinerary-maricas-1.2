import React from 'react'
import { useRef } from 'react'
import '../components/form/form.css'
import hotelsActions from '../redux/actions/hotelsActions'
import InputSignUp from '../components/form/InputSignUp'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'


export default function NewHotel() {

    const dispatch = useDispatch()
    const { doHotel } = hotelsActions
    const form = useRef()
    const name = useRef()
    const photo = useRef()
    const photo1 = useRef()
    const photo2 = useRef()
    const capacity = useRef()

    async function validation(event) {
        event.preventDefault()
        let NewHotel = {
            name: name.current.value,
            photo: [photo.current.value, photo1.current.value, photo2.current.value],
            capacity: capacity.current.value,
            cityId: "63715951fc1586373cba7dc2",
            userId: "636d82c66a32c7c4c029d58a"
        }
        try {
            let response = await dispatch(doHotel(NewHotel))
            console.log(response.payload)
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
                <InputSignUp className="input-text" type="text" placeholder=" name" id={name} />
                <InputSignUp className="input-text" type="text" placeholder=" photo" id={photo} />
                <InputSignUp className="input-text" type="text" placeholder=" photo" id={photo1} />
                <InputSignUp className="input-text" type="text" placeholder=" photo" id={photo2} />
                <InputSignUp className="input-text" type="text" placeholder=" capacity" id={capacity} />
                <InputSignUp className="input-button" type="submit" value="Create new hotel" fx={validation} />
            </form>
        </div>
    )
}