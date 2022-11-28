import React from 'react'
import BotonDown from './BotonDown'
import { useState } from 'react';
import IconUser from './IconUser';
import userActions from '../../redux/actions/userActions';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';


export default function BotonUsers() {
    const {logout} = userActions
    const dispatch = useDispatch();
    const { logged, token, myUser } = useSelector(store => store.userReducer)
    const [show, setShow] = useState(false);
    const display = () => {
        setShow(!show)}

    function logOut() {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, log out!'
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        dispatch(logout(token))
                        Swal.fire(
                            'Logged out!',
                            'You have been logged out',
                            'success'
                        )
                    }
                })
        } 

    return (
        <div className='flex column'>
            {logged ? (
                <div>
                    <img src={myUser.photo} alt={myUser.name} width='65px' onClick={display} />
                    <p className='text-white'>{myUser.name}</p>
                </div>
            )
                : (
                    <IconUser onClick={display} />
                    )
                }
            {show && (
            <div className='flex column'>
                { logged ?  
                    (
                        <>
                        <BotonDown text="Log Out" rute='/home' onClick={logOut} />
                        <BotonDown text="My Profile" rute="/myprofile/"/>
                        </>
                    ) : (
                        <>
                        <BotonDown text="Sign In" rute='/signin' />
                        <BotonDown text="Sign Up" rute='/signup' />
                        </>
                    )
            }
            </div>
            )}
        </div>
        )
}
