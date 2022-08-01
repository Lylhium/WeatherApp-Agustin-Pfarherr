import React from 'react'
//css
import '../Navbar/Navbar.css'
//react router
import { Link } from 'react-router-dom'

export const Navbar = () => {

  return (
    <div>
    <nav>
      <div className='icon-url'> Lilius Weather  🌧️</div>
        <Link to='/'> <button className='btn-nav'>Home</button>  </Link>
        <Link to='/about'> <button className='btn-nav'>About us</button> </Link> 
    </nav>

    </div>
  )
}
