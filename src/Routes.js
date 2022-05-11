import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './User/Dashboard';
import Certificate from './User/Certificate';
import ScrollToTop from './ScrollToTop';
import Profile from './User/Profile';
import HomePage from './Pages/HomePage';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsConditions from './Pages/TermsConditions';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Faq from './Pages/Faq'




function Routers(){
   
    return (
            <div>
                <Router>
                    <ScrollToTop />
                    <Routes>
                        <Route path="/" element={<HomePage />}/>
                        <Route path="/login" element={<Login />}/> 
                        <Route path="/register" element={<Register />}/> 
                        <Route path="/privacy-policy" element={<PrivacyPolicy />}/> 
                        <Route path="/terms-condition" element={<TermsConditions />}/> 
                        <Route path="/about" element={<About />}/> 
                        <Route path="/contact" element={<Contact />}/> 
                        <Route path="/faq" element={<Faq />}/> 
                        <Route path="/user/dashboard" element={<Dashboard />}/> 
                        <Route path="/user/certificate" element={<Certificate />}/> 
                        <Route path="/user/profile" element={<Profile />}/>                                                              
                    </Routes>   
                </Router>                
            </div>
        )
}

export default Routers;