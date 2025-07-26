import './App.css'
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contacts from './pages/Contacts';
import Features from './pages/Features';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Howitworks from './pages/Howitworks';
import Result from './pages/Result';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Landing from './pages/Landing';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/contact" element={<Contacts />} />
        <Route path="/features" element={<Features />} />
        <Route path="/" element={<Landing/>} />
        <Route path="/howitworks" element={<Howitworks />} />
        <Route path="/result" element={<Result />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
<Footer />
    </>
  );
}

export default App;
