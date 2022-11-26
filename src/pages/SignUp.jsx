import React from 'react'
import { useRef } from 'react'
import '../components/form/form.css'
import InputSignUp from '../components/form/InputSignUp'
import { Link as NavLink } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { DB_LINK } from "../url";



export default function SignUp() {

    const form = useRef()
    const name = useRef()
    const lastName = useRef()
    const photo = useRef()
    const age = useRef()
    const email = useRef()
    const password = useRef()


    async function sendForm(event) {
        event.preventDefault()
        let newUser = {
            name: name.current.value,
            lastName: lastName.current.value,
            photo: photo.current.value,
            age: age.current.value,
            email: email.current.value,
            password: password.current.value,
        }

        try {
            let response = await axios.post(`${DB_LINK}api/auth/sign-up/`, newUser)
            if (response.data.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'User created!',
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
        <div class="card-form">
            <div class="cont-h2">
                <h2>SIGN UP</h2>
            </div>
            <form class="form" ref={form}>
                <InputSignUp className="input-text" type="text" placeholder=" Name" id={name} />
                <InputSignUp className="input-text" type="text" placeholder=" Last Name" id={lastName} />
                <InputSignUp className="input-text" type="text" placeholder=" Photo" id={photo} />
                <InputSignUp className="input-text" type="text" placeholder=" Age" id={age} />
                <InputSignUp className="input-text" type="email" placeholder=" Email" id={email} />
                <InputSignUp className="input-text" type="password" placeholder=" Password" id={password} />
                <InputSignUp className="input-button" type="submit" value="Create account" fx={sendForm} />
            </form>
            <nav id="socialLogin">
                <button href="#" class="google"></button>
            </nav>
            <p>Do you have an account?
                <NavLink to='/signin'>
                    <button href='#'> Come to sing in</button>
                </NavLink>
            </p>
        </div>
    )
}
