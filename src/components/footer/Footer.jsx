import React from 'react'
import Btnfooter from './Btnfooter'
import DesignText from './DesignText'
import './footer.css'


export default function Footer() {
    return (
    
        <footer  className='footer'>
                <DesignText className='flex column center g-5' href='https://www.linkedin.com' text1='Design by' text2='Andres Martinez' text3='Aldana Chavez Bravo' />
                <div className='text-center'>
                    <h4>My Tinerary Project 2022 - © All rights reserved</h4>  
                </div>
                <ul className='text-decoration flex gap-1'>
                    <Btnfooter rute='/Home' className='text-decoration list-none' text='Home' />
                    <Btnfooter rute='/cities' className='text-decoration list-none' text='Cities' />
                    <Btnfooter rute='/hotels' className='text-decoration list-none' text='Hotels' />
                </ul>
                
        </footer>
        )
}