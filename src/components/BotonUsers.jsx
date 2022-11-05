import React from 'react'
import BotonDown from './BotonDown'
import { useState } from 'react';
import IconUser from './IconUser';

export default function BotonUsers() {
    const [show, setShow] = useState(false);
    const display = () => {
        setShow(!show);
        console.log(show)
    }
    return (
        <div className='flex column'>
            <BotonDown text={<IconUser />} className='w-100' onClick={display}/>
            {show && (
            <div className='flex column'>
                <BotonDown text="Sign In"  />
                <BotonDown text="Sign Up" />
            </div>
            )}
        </div>
        )
}
