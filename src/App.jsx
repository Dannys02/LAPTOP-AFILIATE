import { useState } from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Hero from './page/Hero';
import Category from './page/Category';
import Products from './page/Products';
import About from './page/About';
import Contact from './page/Contact';
import AboutDetail from './page/AboutDetail';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutDetail />} />
      </Routes>

      <Navbar />
      <Hero />
      <Category />
      <Products />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App;