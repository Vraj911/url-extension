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
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/contact" element={<Contacts />} />
        <Route path="/features" element={<Features />} />
        <Route path="/" element={<Home />} />
        <Route path="/howitworks" element={<Howitworks />} />
        <Route path="/result" element={<Result />} />
      </Routes>

    </>
  );
}

export default App;
