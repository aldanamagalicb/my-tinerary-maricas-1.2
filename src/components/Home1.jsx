import React from 'react'
import AutoToTop from './AutoToTop'
import CallToAction from './CallToAction'
import Header from './Header'
import LogoMt from './LogoMt'
import Slogan from './Slogan'


export default function Home1() {
    return (
            <div className='bg-img-1 w-100 vh-100 '>
                <Header />
                <AutoToTop />
                <LogoMt link='./img/logo-black.png' className='w-100 flex center' />
                <Slogan />
                <div className='w-100 flex column center gap-2 py-2'>
                    <CallToAction rute='/cities' text='CITIES' className='call-card fs-6' />
                    <CallToAction rute='/hotels' text='HOTELS' className='call-card fs-6' />
                </div>
            </div>
    )
}