import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Conatct = () => {
  return (
    <>
      <Link to={'insta'}><h4>Contact via Instagram</h4></Link>
      <Link to={'mail'}><h4>Contact via Email</h4></Link>
      <Outlet/>
    </>
  )
}

export default Conatct
