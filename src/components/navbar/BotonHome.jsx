import React from 'react'
import BotonDown from './BotonDown'
import { useState } from 'react';
import IconHome from './IconHome';

export default function BotonUsers() {
    const [show, setShow] = useState(false);
    const display = () => {
        setShow(!show);
        console.log(show)
    }
    return (
        <div className='flex column center'>
            <BotonDown text={<IconHome />} className='w-100' onClick={display}/>
            {show && (
            <div className='flex column'>
                <BotonDown text="Cities" rute='/cities'  />
                <BotonDown text="Hotels" rute='/hotels'/>
            </div>
            )}
        </div>
        )
}