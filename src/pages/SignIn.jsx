import React from 'react'
import { useRef } from 'react'
import '../components/form/form.css'
import InputSigniN from '../components/form/InputSignUp'
import { Link as NavLink } from 'react-router-dom';


export default function SignIn() {

    const form = useRef()
    const Username = useRef()
    const password = useRef()
    const user = []

    const sendForm = () => {
                user.push(
                    {
                        Username: Username.current.value,               
                        password: password.current.value,
                    }
                )
                localStorage.setItem('user', JSON.stringify(user))
            }
        
    return (
        <div class="card-form">
            <div class="cont-h2">
                <h2>SIGN IN</h2>
            </div>
            <form class="form" ref={form}>
                <InputSigniN className="input-text" type="text" placeholder=" Username" id={Username}/>
                <InputSigniN className="input-text" type="password" placeholder=" Password" id={password}/>
                <InputSigniN className="input-button" type="submit" value="Login" fx={sendForm}/>
            </form>
            <nav id="socialLogin">
                <a href="#" class="google"></a>
            </nav>
            <p>You dont have an account?
                <NavLink to='/signup'>
                    <a href='#'> Create account</a>
                </NavLink>
            </p>
        </div>
    )
}
