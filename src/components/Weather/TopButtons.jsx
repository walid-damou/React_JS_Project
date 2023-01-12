import React from 'react'

function TopButtons({setQuery}) {
    const cities=[
        {
            id:1,
            title:'Doha',
        },
        {
            id:2,
            title:'Lusail',
        },
        {
            id:3,
            title:'Al Khor',
        },
        {
            id:4,
            title:'Al Rayyan',
        },
        
    ];
  return (
    <div className='flex items-center  my-6'>
        {cities.map((city)=>(
            <button key={city.id} className='text-white text-lg mx-10 font-medium' onClick={()=>setQuery({q:city.title})}>{city.title}</button>
        ))}
    </div>
  )
}

export default TopButtons