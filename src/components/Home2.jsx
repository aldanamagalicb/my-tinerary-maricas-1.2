import React from 'react'
import Carousel from './carousel/Carousel'
import Header from './Header'
import Footer from './footer/Footer'
import ScrollToTop from './ScrollToTop'

export default function Home2() {
    return (
        <div className='bg-img-2 w-100 vh-100' >  
            <Header />
            <Carousel />
            <Footer />
            <ScrollToTop />
        </div>           
    )
}
