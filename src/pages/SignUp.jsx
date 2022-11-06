import React from 'react'
import { useRef } from 'react'
import '../components/form/form.css'
import InputSignUp from '../components/form/InputSignUp'
import { Link as NavLink } from 'react-router-dom';


export default function SignUp() {

    const form = useRef()
    const Username = useRef()
    const email = useRef()
    const password = useRef()
    const newUser = []

    const enviarFormulario = () => {
                newUser.push(
                    {
                        Username: Username.current.value,
                        email: email.current.value,
                        password: password.current.value,
                    }
                )
                localStorage.setItem('newUser', JSON.stringify(newUser))
            }
        
    return (
        <div class="card-form">
            <div class="cont-h2">
                <h2>SIGN UP</h2>
            </div>
            <form class="form" ref={form}>
                <InputSignUp className="input-text" type="text" placeholder=" Username" id={Username}/>
                <InputSignUp className="input-text" type="email" placeholder=" Email" id={email}/>
                <InputSignUp className="input-text" type="password" placeholder=" Password" id={password}/>
                <InputSignUp className="input-button" type="submit" value="Create account" fx={enviarFormulario}/>
            </form>
            <nav id="socialLogin">
                <a href="#" class="google"></a>
            </nav>
            <p>¿Do you have an account?
                <NavLink to='/signin'>
                    <a href='#'> Come to sing in</a>
                </NavLink>
            </p>
        </div>
    )
}
