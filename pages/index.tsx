import React from 'react'
import Hero from "../components/Hero"
import Explore from "../components/Explore"
import Web from 'components/Web'
import Time from 'components/Time'
import Maintainers from 'components/Maintainers'
import Product from 'components/Product'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'




const Home = () => (
  <div className='index-bg'>
    <Navbar />
    <Hero />
    <Web />
     <Time /> 
    <Explore />
    <Maintainers />
    <Product />
    <Footer />
  </div>
)

export default Home