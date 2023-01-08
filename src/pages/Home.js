import React from 'react'
import Hero from '../components/Hero'
import Translation from '../components/Translation'
import CTA from '../components/CTA'
import Divider from '../components/Divider'
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