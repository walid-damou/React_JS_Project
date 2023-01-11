import React from 'react'
import sheraton from '../../assets/images/sheraton.jpg'
import { Hotels } from '../../Data/Hotels'
const Hero = () => {
    return (
        <section>

            <div className="flex flex-col md:items-center md:flex-row md:justify-between relative bg-cover h-96 bg-no-repeat bg-center bg-qatar5">
            </div>
            <h1 className="text-darkGrey font-bold text-4xl text-center my-12" > Discover the best hotels in <span className='text-mainColor'>Qatar </span>for you </h1>

            <div className='flex flex-col md:flex-row md:items-center md:justify-center md:flex-wrap mx-5 md:mx-20 my-12 gap-4'>
                {
                    Hotels.map((hotel) => (

                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md md:h-[400px] md:w-[300px]">
                            <a href="#">
                                <img className="rounded-t-lg h-1/2 w-full" src={hotel.img} alt={hotel.name} />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">{hotel.name}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 capitalize"><i className="fa-solid fa-location-pin pr-3"></i>{hotel.address}</p>
                                <p className="mb-3 font-normal text-gray-700 "><i className="fa-solid fa-phone pr-3"></i>{hotel.phoneNumber}</p>
                                <p className="mb-3 font-normal text-gray-700 capitalize"><i className="fa-solid fa-arrow-right pr-3"></i>{hotel.amenities}</p>


                               
                            </div>
                        </div>

                    ))
                }

            </div>


        </section>

    )
}

export default Hero