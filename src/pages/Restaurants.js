import React , { useEffect , useState } from 'react'
import WelcomeResto from '../components/Restaurants/WelcomeResto'
import RestaurantsList from '../components/Restaurants/RestaurantsList'
import { RestaurantsData } from '../Data/RestaurantsData'
import Pagination from '../layouts/Pagination'
function Restaurants() {
    const [restoData , setRestoData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [RestosPerPage, setRestosPerPage] = useState(6);
    const [showRestos, setshowRestos] = useState(false);
    // useEffect(()=>{
    //     console.log('start')
    //     const options = {
    //         method: 'GET',
    //         headers: {
    //             'X-RapidAPI-Key': '568876b392msh8e9eff9728a2702p1ced5ajsn7fd686877f74',
    //             'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    //         }
    //     };
        
    //     fetch('https://travel-advisor.p.rapidapi.com/restaurants/list?location_id=293919&restaurant_tagcategory=10591&restaurant_tagcategory_standalone=10591&currency=USD&lunit=km&limit=30&open_now=false&lang=en_US', options)
    //         .then(response => response.json())
    //         .then(response => setRestoData(response))
    //         .catch(err => console.error(err));
            
    // },[])

    
    useEffect(()=>{
        async function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        
        // const fetchData = async () => {

        //     const data = await 
        //     return data;
        //   }
        

        async function setInUseState() {
            // Do something before waiting
            await sleep(500); // Wait for 1 second
            // fetchData()
            //     .then(data =>setRestoData(data))
            //     .catch(console.error);
            setRestoData(RestaurantsData)
            setshowRestos(true);
            }
        setInUseState()
    },[])
    
    if (showRestos) {
        return(
                <section className='m-5 p-10 md:m-10 md:p-10 sm:m-0 sm:p-0'>
                    <WelcomeResto />
                    <RestaurantsList 
                                        currentPage= {currentPage} 
                                        RestosPerPage= {RestosPerPage} 
                                        restoData = {restoData}
                    />  
                    <Pagination 
                                        totalRestos = {restoData.length} 
                                        RestosPerPage = {RestosPerPage} 
                                        setCurrentPage={setCurrentPage}
                                        currentPage = {currentPage} 
                    />     
                </section>
        )
    }        
}

export default Restaurants