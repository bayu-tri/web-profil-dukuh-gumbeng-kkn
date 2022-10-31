import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Hero from '../../components/PemerintahanPage/Hero'
import ListPejabat from '../../components/PemerintahanPage/ListPejabat'

function Pemerintahan() {
  return (
    <>
      <Navbar />
      <Hero />
      <ListPejabat />
      <Footer />
    </>
  )
}

export default Pemerintahan