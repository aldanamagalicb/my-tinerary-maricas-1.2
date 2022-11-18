import React from 'react'
import BotonDown from './BotonDown'
import { useState } from 'react';
import IconUser from './IconUser';

export default function BotonUsers() {
    const [show, setShow] = useState(false);
    const display = () => {
        setShow(!show)
    }
    return (
        <div className='flex column'>
            <IconUser onClick={display} />
            {show && (
            <div className='flex column'>
                <BotonDown text="Sign In" rute='/signin' />
                <BotonDown text="Sign Up" rute='/signup'  />
            </div>
            )}
        </div>
        )
}
