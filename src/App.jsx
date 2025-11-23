import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Outlet, Link} from "react-router-dom"

function App() {

  return (
    <>
      <nav>
        <Link to="/" className='link'>Home</Link>
        <Link to="/about" className='link'>About</Link>
        <Link to="/contact" className='link'>Contact</Link>
      </nav>
      <Outlet />
    </>
  )
}

export default App
