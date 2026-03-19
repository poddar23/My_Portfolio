import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './assets/Navbar'
import Hero from './assets/Hero'
import About from './assets/About'
import Wrok from './assets/Wrok'
import Project from './assets/Projects'
import Contact from './assets/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div className=''>

        
        <Navbar />

        <Hero />
        <About />
        <Wrok />
        <Project />
        <Contact />

      </div>
    </>
  )
}

export default App