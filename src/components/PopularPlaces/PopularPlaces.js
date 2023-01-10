import React , { useEffect , useState } from 'react'
import { PopularPlacesData } from '../../Data/PopularPlacesData'
import Pagination from '../Restaurants/Pagination'

function PopularPlaces() {
      const [currentPage, setCurrentPage] = useState(1);
      const [placesPerPage, setPlacesPerPage] = useState(6);

      const lastPlaceIndex = currentPage * placesPerPage;
      const firstPlaceIndex = lastPlaceIndex - placesPerPage;
      const currentPlaces = PopularPlacesData.slice(firstPlaceIndex, lastPlaceIndex);
      return (
          <section className='m-5 md:m-10 md:p-10 sm:m-0 sm:p-0'>
              <div className="flex justify-center mb-10 ">
              <h1 className="text-center  text-darkGrey font-bold text-4xl  md:text-4xl md:w-1/2">Discover the magic of <span className="text-mainColor">Qatar</span> with our guide to the best places in the country.</h1>
              </div>

              <div className='flex justify-center'>
                  <div className=" grid  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                      { currentPlaces.map((place , index)=>{
                          
                          return(
                              <a href={place.website} target="_blank" className="hover:scale-110 ">
                                  <div className="m-5 max-w-sm rounded overflow-hidden shadow-lg">
                                      <img className="w-full max-h-48" src={place.image} alt="Sunset in the mountains"/>
                                      <div className="px-6 py-4">
                                      <div className="font-bold text-xl mb-2">{place.name}</div>
                                      <p className="text-gray-700 text-base">{place.shortDescription}</p>
                                      </div>
                                      <div className="px-6 pt-4 pb-2">
                                      {/* <div className="font-bold text-sm mb-2">{resto.email}</div> */}
                                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                        {place.address}
                                      </span>
                                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                        {place.phone}
                                      </span>
                                      <a href={place.website}><span className="inline-block bg-gray-200 rounded-full px-3 py-1  hover:bg-green-300 text-sm font-semibold text-gray-700 mr-2 mb-2">Website</span></a>
                                      </div>
                                  </div>
                              </a>
                          )
                          
                      }) }
                  </div>
              </div>
              <Pagination 
                  totalRestos = {PopularPlacesData.length} 
                  RestosPerPage = {placesPerPage} 
                  setCurrentPage={setCurrentPage}
                  currentPage = {currentPage} 
                  />        
          </section>
  )
}

export default PopularPlaces