import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import Slider from './components/Slider'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
      <Hero />
      <Slider />
      <About />
      <Footer />
    </>
  )
}

export default App
