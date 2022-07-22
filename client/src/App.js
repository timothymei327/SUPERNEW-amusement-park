import './App.css'
import { useState } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import RideDetails from './components/RideDetails'
import Rides from './components/Rides'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'

function App() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Rides" element={<Rides />}></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
