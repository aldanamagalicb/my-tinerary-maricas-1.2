import React from 'react'
import BotonDown from './BotonDown'
import { useState } from 'react';
import IconUser from './IconUser';
import { useSelector } from 'react-redux';


export default function BotonUsers() {
    let { logged } = useSelector(store => store.userReducer)
    const [show, setShow] = useState(false);
    const display = () => {
        setShow(!show)
    }
    return (
        <div className='flex column'>
            <IconUser onClick={display} />
            {show && (
            <div className='flex column'>
                { logged ?  
                    (
                        <BotonDown text="logOut" rute='/home'  />
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
