import React , { useEffect , useState } from 'react'
import { PopularPlacesData } from '../Data/PopularPlacesData'
import WelcomePlaces from '../components/PopularPlaces/WelcomePlaces';
import PlacesList from '../components/PopularPlaces/PlacesList';
import Pagination from '../layouts/Pagination'

function PopularPlaces() {
      const [currentPage, setCurrentPage] = useState(1);
      const [placesPerPage, setPlacesPerPage] = useState(6);

      const lastPlaceIndex = currentPage * placesPerPage;
      const firstPlaceIndex = lastPlaceIndex - placesPerPage;
      const currentPlaces = PopularPlacesData.slice(firstPlaceIndex, lastPlaceIndex);
      return (
          <section className='m-5 md:m-10 md:p-10 sm:m-0 sm:p-0'>
              <WelcomePlaces/>
              <PlacesList currentPlaces = {currentPlaces}/>
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