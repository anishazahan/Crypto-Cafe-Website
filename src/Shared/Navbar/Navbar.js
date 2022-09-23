import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-black h-14'>

    <div className="flex h-full px-10 justify-between items-center text-gray-50 max-w-7xl">
    <div className="logo">
        <h1 className='font-bold text-2xl text-pink-600'>Crypto Cafe</h1>
    </div>
    <div className="nav-menu">
        <ul className='flex justify-around items-center'>
            <li> <NavLink className='font-medium px-2' to='/'>Home</NavLink> </li>
            <li> <NavLink className='font-medium px-2' to='about'>About</NavLink> </li>
            <li> <NavLink className='font-medium px-2' to='coins'>Coins</NavLink> </li>
            <li> <NavLink className='font-medium px-2' to='contact'>Contact</NavLink> </li>
        </ul>
    </div>
    </div>

</div>
  )
}

export default Navbar