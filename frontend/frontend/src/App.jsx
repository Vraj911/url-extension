import './App.css'
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Reviews from './pages/Reviews';
import Features from './pages/Features';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
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
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/features" element={<Features />} />
        <Route path="/" element={<Landing/>} />
        <Route path="/howitworks" element={<Howitworks />} />
        <Route path="/result" element={<Result />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />

<Footer />
    </>
  );
}

export default App;
