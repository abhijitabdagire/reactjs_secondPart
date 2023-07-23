import React from 'react'
import'./Header.css'
import {NavLink} from 'react-router-dom'
const Header = () => {
  const navLinkStyle = ({isActive})=>{
    return{
      textDecoration: isActive ? "none" : "underline",
      color: isActive ? "red" : "White",
      fontSize : "25px"
    }
  }

  return (
    <div className='Header'>
        <NavLink style={navLinkStyle} to={'/'}>Home</NavLink>
        <NavLink style={navLinkStyle} to={'/about'}>About</NavLink>
        <NavLink style={navLinkStyle} to={'/contact'}>Contact Us</NavLink>
        
    </div>
  )
}

export default Header
