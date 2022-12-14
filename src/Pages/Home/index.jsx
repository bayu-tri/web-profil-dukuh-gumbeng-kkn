import React from 'react'
import Hero from '../../components/HomePage/Hero'
import Navbar from '../../components/Navbar'
import History from '../../components/HomePage/History'
import Gallery from '../../components/HomePage/Gallery'
import Footer from '../../components/Footer'
import FeaturedThings from '../../components/HomePage/FeaturedThings'

function Home() {
  // console.log(process.env.REACT_APP_PUBLIC_URL)
  return (
    <>
        <Navbar/>
        <Hero/>
        <FeaturedThings/>
        <History/>
        <Gallery/>
        <Footer/>
    </>
    
  )
}

export default Home