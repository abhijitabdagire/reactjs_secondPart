import React from 'react'
import'./Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='Header'>
        <Link to={"/"}>
            <h2 style={{color:'white'}}>Home</h2>
        </Link>
        
        <Link to={"/about"}>
            <h2 style={{color:'white'}}>About</h2>
        </Link>
        
        <Link to={"/contact"}>
            <h2 style={{color:'white'}}>Contact Us</h2>
        </Link>
    </div>
  )
}

export default Header
