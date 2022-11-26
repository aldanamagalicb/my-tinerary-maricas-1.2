import React from 'react'
import { useRef } from 'react'
import '../components/form/form.css'
import InputSigniN from '../components/form/InputSignUp'
import { Link as NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import userActions from '../redux/actions/userActions';
import Swal from 'sweetalert2'

export default function SignIn() {

    const dispatch = useDispatch()
    const { login } = userActions
    const form = useRef()
    const email = useRef()
    const password = useRef()

    async function sendForm(event) {
        event.preventDefault()
        let user =
        {
            email: email.current.value,
            password: password.current.value,
        }

        try {
            let response = await dispatch(login(user))
            if (response.payload.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'User logged in!',
                    showConfirmButton: true,
                })
                    // .then(make => {
                    //     console.log(make.isConfirmed)
                    //     if (make.isConfirmed) {                           
                    //         window.location.href = '/home'
                    //     }                      
                    // })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: response.payload.response,
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="card-form">
            <div className="cont-h2">
                <h2>SIGN IN</h2>
            </div>
            <form className="form" ref={form}>
                <InputSigniN className="input-text" type="text" placeholder=" Email" id={email} />
                <InputSigniN className="input-text" type="password" placeholder=" Password" id={password} />
                <InputSigniN className="input-button" type="submit" value="Login" fx={sendForm} />
            </form>
            <nav id="socialLogin">
                <button href="#" className="google"></button>
            </nav>
            <p>You dont have an account?
                <NavLink to='/signup'>
                    <button href='#'> Create account</button>
                </NavLink>
            </p>
        </div>
    )
}
