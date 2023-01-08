import React from 'react'
import Hero from '../components/Home/Hero'
import Translation from '../components/Home/Translation'
import CTA from '../components/Home/CTA'
import Divider from '../components/Home/Divider'
const Home = () => {
  return (
    <div className=' '>
      <Hero />
      <Divider/>
      <Translation />
      <CTA/>
    </div>

  )
}

export default Home