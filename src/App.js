import React from 'react';
import './App.css';
import { BrowserRouter as Router ,Route ,Routes } from 'react-router-dom';
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Home from './pages/Home'
import Restaurants from './pages/Restaurants'
import RestaurantDetails from './pages/RestaurantDetails'
import PopularPlaces from './pages/PopularPlaces'
import Hotels from './pages/Hotels';
import Weather from './pages/Weather';



function App() {
  return (
    <div className="BeVietnamPro m-0 p-0">
     
     <Router>
     <Header/>
        <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/Weather' element={<Weather/>}></Route>
            <Route exact path='/Restaurants' element={<Restaurants/>} />
            <Route exact path='/Places' element={<PopularPlaces/>} />
            <Route exact path='/Hotels' element={<Hotels/>} />
            <Route exact path='/Restaurants/Details/:id' element={<RestaurantDetails/>} />
        </Routes>
        <Footer/>
    </Router>
    </div>
  );
}

export default App;