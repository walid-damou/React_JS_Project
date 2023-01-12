import React  from 'react'

function RestaurantsList({currentPage ,RestosPerPage , restoData}) {
        
        const lastRestoIndex = currentPage * RestosPerPage;
        const firstRestoIndex = lastRestoIndex - RestosPerPage;
        const currentRestos = restoData.slice(firstRestoIndex, lastRestoIndex);
        // console.log('currentPage',currentPage)
        // console.log('currentRestos',currentRestos)
        return (
            <div className='flex justify-center'>
                <div className=" grid  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
    
                    { currentRestos.map((resto , index)=>{
                        return(
                            <a href={"/Restaurants/Details/"+(firstRestoIndex+index)} className="hover:scale-110" key={index}>
                                <div className="m-5 max-w-sm rounded overflow-hidden shadow-lg">
                                    <img className="w-full max-h-48" src={resto.photo==undefined ? 'https://media-cdn.tripadvisor.com/media/photo-w/16/3b/fc/8d/interior-area.jpg' : resto.photo.images.large.url} alt="Sunset in the mountains"/>
                                    <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{resto.name==undefined ? 'Title' : resto.name}</div>
                                    <p className="text-gray-700 text-base">{resto.description==undefined ? 'lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée ' : resto.description.slice(0,80)}</p>
                                    </div>
                                    <div className="px-6 pt-4 pb-2">
                                    {/* <div className="font-bold text-sm mb-2">{resto.email}</div> */}
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                        <i className="fa-solid fa-location-dot"></i> {resto.address_obj==undefined ? 'Dukhan, Qatar' : ' Doha, Qatar ' }
                                    </span>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                        <i className="fa-solid fa-phone"></i> {resto.phone==undefined ? '+66 83 625 121' : resto.phone}
                                    </span>
                                    <a href={resto.website}>
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

export default RestaurantsList