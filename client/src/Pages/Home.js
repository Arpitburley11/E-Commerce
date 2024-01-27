import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import FeaturedProducts from '../components/FeaturedProducts'
import Categories from '../components/Categories'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <FeaturedProducts title="featured"/>
      <Categories/>
      <FeaturedProducts title="trending" />
      <Contact/>
      <Footer/>
    </div>
  )
}
