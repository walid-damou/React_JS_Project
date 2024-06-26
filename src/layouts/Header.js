import React,{useState} from 'react'
import logo from '../assets/images/logo.png'
import { Link } from "react-router-dom";
import Modal from '../components/Currency/Modal';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className='my-2 mx-5 md:mx-20 '>
      <nav className="bg-white border-gray-200 ">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" className="flex items-center">
            <img src={logo} className="h-12 md:h-20" alt="QATARIVOYAGE Logo" />
          </a>
          <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <div className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <Link to="/" className="block py-2 pl-3 pr-4  text-gray-700 md:p-0  hover:text-mainColor">Translation</Link>
              <Link to="/Weather" className="block py-2 pl-3 pr-4  text-gray-700 md:p-0  hover:text-mainColor">Weather</Link>
              <div>
                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-700 rounded hover:text-mainColor md:p-0 md:w-auto">To visit<svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
                <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded shadow w-44 ">
                  <div className="py-1 text-sm text-gray-700 " aria-labelledby="dropdownLargeButton">
                    <Link to="/Hotels" className="block px-4 py-2  hover:text-mainColor">Hotels</Link>
                    <Link to="/Restaurants" className="block px-4 py-2  hover:text-mainColor">Restaurants</Link>
                    <Link to="/Places" className="block px-4 py-2  hover:text-mainColor">Popular Places</Link>
                  </div>
                </div>
              </div>
              <Link onClick={() => setIsOpen(true)} className="block py-2 pl-3 pr-4  text-gray-700 md:p-0  hover:text-mainColor">Currency change</Link>
            </div>
          </div>
        </div>
      </nav>
      {isOpen && (<Modal close={()=>setIsOpen(false)}/>)}

    </header>

  )
}

export default Header