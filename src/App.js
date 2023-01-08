import React from 'react';
import './App.css';
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Home from './pages/Home'
import Restaurants from './components/Restaurants/Restaurants'
import { BrowserRouter as Router ,Route ,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="BeVietnamPro m-0 p-0">
     
     <Router>
        <Routes>
            <Route exact path='/' element={<><Header/><Home/><Footer/></>} />
            <Route exact path='/Restaurants' element={<><Header/><Restaurants/><Footer/></>} />
            <Route exact path='/Restaurants/Details/:id' element={<><Header/><Footer/></>} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
