import React from 'react';
import { Routes, Route, Link } from 'react-router';
import HomePage from './Components/HomePage';
import AboutUs from './Components/AboutUs';
import Feedback from './Components/FeedBack';
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
  return (

    <div>
     <Header/>  
    
    <div className="content">
      <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutUs" element={<AboutUs/>} />
            <Route path="/feedback" element={<Feedback />} />
      </Routes>
          </div>
  <Footer/>

      </div>
    
);
}
export default App;
