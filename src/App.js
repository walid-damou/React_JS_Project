import React from 'react';
import './App.css';
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Home from './pages/Home'
import Restaurants from './components/Restaurants/Restaurants'
import RestauDetails from './components/Restaurants/RestauDetails'
import PopularPlaces from './components/PopularPlaces/PopularPlaces'
import { BrowserRouter as Router ,Route ,Routes } from 'react-router-dom';
import Hotels from './pages/Hotels';


function App() {
  return (
    <div className="BeVietnamPro m-0 p-0">
     
     <Router>
     <Header/>
        <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/Restaurants' element={<Restaurants/>} />
            <Route exact path='/Places' element={<PopularPlaces/>} />
            <Route exact path='/Hotels' element={<Hotels/>} />
            <Route exact path='/Restaurants/Details/:id' element={<RestauDetails/>} />
        </Routes>
        <Footer/>
    </Router>
    </div>
  );
}

export default App;