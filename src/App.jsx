import { useState } from 'react'
import './App.css'
import Header from './components/global/header/Header.jsx'
import Footer from './components/global/footer/Footer.jsx'
import Hero from './pages/hero/Hero.jsx'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  )
}

export default App
