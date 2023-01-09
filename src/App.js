import React from 'react';
import './App.css';
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hotels from './pages/Hotels';

function App() {
  return (
    <Router>

      <div className="Nunito m-0 p-0">
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Hotels" exact element={<Hotels />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
