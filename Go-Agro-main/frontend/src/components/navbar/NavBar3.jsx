import React from 'react'
import { Link } from 'react-router-dom'
import { FaBell } from 'react-icons/fa'
import { FaUserLarge } from "react-icons/fa6"
import './NavBar3.css'
export const NavBar3 = () => {
  return (
    <nav className='nav1 pt-4 pb-4  '>
      <Link to="/"><h1 className='text-white text-2xl ml-4 font-serif'>GO AGRO</h1></Link>

      <ul className='list1 flex flex-row gap-10 text-lg  text-white  font-extralight font-serif'>


        <Link to={/complaint/${farmer.email}}><li>Make Complaints</li></Link>
      <Link to="/"><li>Logout</li></Link>
      <Link to="/"><li>Contact Us</li></Link>

      <Link to="/#"><li className='mt-2'><FaBell /></li></Link>
      <Link to="/#"><li className='mt-2'><FaUserLarge /></li></Link>



    </ul>
        </nav >
  )
}

