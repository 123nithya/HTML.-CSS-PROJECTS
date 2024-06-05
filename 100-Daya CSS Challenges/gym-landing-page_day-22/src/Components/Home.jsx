import React from 'react'
import Navbar from "./Navbar"
import HeroSection from './HeroSection';
import Program from './Program';
import Membership from './Membership';
import Testimonials from './Testimonials';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Program />
      <Membership />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home
