import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function PlacesList({currentPlaces}) {
  return (
            <div className='flex justify-center'>
                <div className=" grid  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                    { currentPlaces.map((place , index)=>{
                        
                        return(
                            <a href={place.website} target="_blank" className="hover:scale-110 " key={index}>
                                <div className="m-5 max-w-sm rounded overflow-hidden shadow-lg">
                                    <img className="w-full max-h-48" src={place.image} alt="Sunset in the mountains"/>
                                    <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{place.name}</div>
                                    <p className="text-gray-700 text-base">{place.shortDescription}</p>
                                    </div>
                                    <div className="px-6 pt-4 pb-2">
                                    {/* <div className="font-bold text-sm mb-2">{resto.email}</div> */}
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                        <i className="fa-solid fa-location-dot"></i> {place.address}
                                    </span>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                        <i className="fa-solid fa-phone"></i> {place.phone}
                                    </span>
                                    <a href={place.website}>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1  hover:bg-green-300 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                        <i className="fa-solid fa-link"></i> Website

                                            
                                        </span>
                                    </a>
                                    </div>
                                </div>
                            </a>
                        )
                        
                    }) }
                </div>
            </div>
  )
}

export default PlacesList