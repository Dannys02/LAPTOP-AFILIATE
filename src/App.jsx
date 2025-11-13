import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Hero from './page/Hero';
import Category from './page/Category';
import Products from './page/Products';
import About from './page/About';
import Contact from './page/Contact';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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