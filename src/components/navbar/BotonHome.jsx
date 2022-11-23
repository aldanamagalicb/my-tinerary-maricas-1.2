import React from 'react'
import BotonDown from './BotonDown'
import { useState } from 'react';
import IconHome from './IconHome';

export default function BotonUsers() {
    const [show, setShow] = useState(false);
    const display = () => {
        setShow(!show);
    }
    return (
        <div className='flex column center'>
            <IconHome onClick={display}/>
            {show && (
            <div className='flex column'>
                <BotonDown text="Cities" rute='/cities'/>
                <BotonDown text="Hotels" rute='/hotels'/>
                <BotonDown text="New City" rute='/newcity'/>
                <BotonDown text="New Hotel" rute='/newhotel'/>
                <BotonDown text="MyCities" rute='/mycities'/>
                <BotonDown text="MyHotels" rute='/myhotels'/>
                <BotonDown text="MyTineraries" rute='/mytineraries'/>
                <BotonDown text="MyShows" rute='/myshows'/>
            </div>
            )}
        </div>
        )
}