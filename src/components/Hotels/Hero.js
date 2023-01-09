import React from 'react'
import sheraton from '../../assets/images/sheraton.jpg'
import { Hotels } from '../../Data/Hotels'
const Hero = () => {
    return (
        <section>

            <div class="flex flex-col md:items-center md:flex-row md:justify-between relative bg-cover h-96 bg-no-repeat bg-center bg-qatar5">
            </div>
            <h1 className="text-darkGrey font-bold text-4xl text-center my-12" > Hotels </h1>

            <div className='flex flex-col md:flex-row md:items-center md:justify-center md:flex-wrap mx-5 md:mx-20 my-12 gap-4'>
                {
                    Hotels.map((hotel) => (

                        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md md:h-[400px] md:w-1/4">
                            <a href="#">
                                <img class="rounded-t-lg h-1/2 w-full" src={hotel.img} alt={hotel.name} />
                            </a>
                            <div class="p-5">
                                <a href="#">
                                    <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 ">{hotel.name}</h5>
                                </a>
                                <p class="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                               
                            </div>
                        </div>

                    ))
                }

            </div>
        </section>

    )
}

export default Hero