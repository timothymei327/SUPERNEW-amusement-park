import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'


function Nav() {
  return (
    <nav className="navbar">
      <div>
        <Link to ="/">Home </Link>
        <Link to="Rides">Rides </Link>
        {/* <Link to="Food">Food </Link>
        <Link to="Shows">Shows </Link> */}
      </div>
    </nav>
  )
}

export default Nav