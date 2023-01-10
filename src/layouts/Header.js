import React from 'react'
import logo from '../assets/images/logo.png'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='my-2 mx-5 md:mx-20 '>
      <nav class="bg-white border-gray-200 ">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a href="#" class="flex items-center">
            <img src={logo} class="h-12 md:h-20" alt="QATARIVOYAGE Logo" />
          </a>
          <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <div class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <Link to="/" className="block py-2 pl-3 pr-4  text-gray-700 md:p-0  hover:text-mainColor">Translation</Link>
              <Link to="/Weather" className="block py-2 pl-3 pr-4  text-gray-700 md:p-0  hover:text-mainColor">Weather</Link>
              <div>
                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-700 rounded hover:text-mainColor md:p-0 md:w-auto">To visit<svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                <div id="dropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded shadow w-44 ">
                  <div class="py-1 text-sm text-gray-700 " aria-labelledby="dropdownLargeButton">
                    <Link to="/Hotels" className="block px-4 py-2  hover:text-mainColor">Hotels</Link>
                    <Link to="/" className="block px-4 py-2  hover:text-mainColor">Restaurants</Link>
                    <Link to="/" className="block px-4 py-2  hover:text-mainColor">Popular Places</Link>
                  </div>
                </div>
              </div>
              <Link to="/" className="block py-2 pl-3 pr-4  text-gray-700 md:p-0  hover:text-mainColor">Currency change</Link>
            </div>
          </div>
        </div>
      </nav>


    </header>

  )
}

export default Header