import React from 'react'
import BotonDown from './BotonDown'
import { useState } from 'react';
import IconHome from './IconHome';
import { useSelector } from 'react-redux';


export default function BotonUsers() {

    let { role } = useSelector(store => store.userReducer)
    const [show, setShow] = useState(false);
    const display = () => {
        setShow(!show);
    }
    return (
        <div className='flex column center'>
                <IconHome onClick={display} />
            {show && (
                <div className='flex column'>
                { role === "user" ?
                            (
                                <>
                                    <BotonDown text="Home" rute='/home' />
                                    <BotonDown text="Hotels" rute='/hotels' />
                                    <BotonDown text="Cities" rute='/cities' />
                                    <BotonDown text="MyTineraries" rute='/mytineraries' />
                                    <BotonDown text="NewTinerary" rute='/newtinerary' />
                                    <BotonDown text="MyShows" rute='/myshows' />
                                    <BotonDown text="NewShow" rute='/newshow' />
                                </>
                            )
                            : role === "admin" ?
                                (
                                    <>  
                                        <BotonDown text="Home" rute='/home' />
                                        <BotonDown text="Hotels" rute='/hotels' />
                                        <BotonDown text="Cities" rute='/cities' />
                                        <BotonDown text="MyCities" rute='/mycities' />
                                        <BotonDown text="MyHotels" rute='/myhotels' />
                                        <BotonDown text="New City" rute='/newcity' />
                                        <BotonDown text="New Hotel" rute='/newhotel' />
                                    </>

                                ) :
                                (
                                    <>
                                        <BotonDown text="Home" rute='/home' />
                                        <BotonDown text="Hotels" rute='/hotels' />
                                        <BotonDown text="Cities" rute='/cities' />
                                    </>
                                )
                        }
            </div>
            )}
        </div>
    )
}