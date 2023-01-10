import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <div className='relative bg-cover bg-no-repeat bg-end flex flex-col space-y-5 md:space-y-0 md:items-center md:flex-row md:justify-between bg-qatar3 px-5 md:px-20 py-20 my-12' >
      <h3 className=' font-bold text-white text-3xl text-center md:text-left md:w-1/2'>Discover the best places to eat and stay in Qatar - start planning your trip today!</h3>
      <div className="space-x-4 md:space-y-0 md:space-x-4 flex items-center">
      <Link to="/Hotels" className="uppercase rounded-md py-2 px-5  font-semibold shadow-3xl cursor-pointer border border-mainColor hover:text-mainColor hover:bg-white text-white bg-mainColor">Hotels</Link>
      <Link to="/Restaurants" className="uppercase rounded-md py-2 px-5  font-semibold shadow-3xl cursor-pointer text-lightColor border border-lightColor bg-white hover:text-white hover:bg-lightColor">Restaurants</Link>
      </div>
    </div>
  )
}

export default CTA