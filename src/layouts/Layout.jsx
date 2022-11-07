import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import ScrollToTop from '../components/ScrollToTop'
import AutoToTop from '../components/AutoToTop'

export default function Layout(props) {
    return (
        <>
            <AutoToTop />
            <Navbar />
            <div className='main-full bg-img-2'>
                {props.children}
            </div>
            <ScrollToTop />
            <Footer />
        </>
    )
}
